import yaml


class Node:
    def __init__(self):
        self.label = None
        self.children = []

    def __str__(self):
        return "Node(label={} children={})".format(
            self.label, [child.label for child in self.children])

    def leaves(self):
        """
        Return a list of leaf Nodes under this Node.
        """
        leaves = []

        def func(node, **kwargs):
            if not node.children:
                leaves.append(node)

        self.traverse_preorder(func)
        return leaves

    def copy(self):
        """
        Return a deep copy of this Node.
        """
        def func(node, child_results):
            copy = Node()
            copy.label = node.label
            copy.children = child_results
            return copy
        return self.transform(func)

    def transform(self, func):
        """
        Transform this Node recursively, using the given func.
        """
        child_results = [child.transform(func) for child in self.children]
        return func(self, child_results)

    def _traverse(self, func, order, depth, parent):
        """
        Traverse this Node depth-first, applying func on every node.

        order='pre' means the root is processed before its children.
        order='post' means the root is processed after its children.
        """
        assert order in ('pre', 'post')
        if order == 'pre':
            func(self, depth=depth, parent=parent)
        for child in self.children:
            child._traverse(func, order, depth + 1, self)
        if order == 'post':
            func(self, depth=depth, parent=parent)

    def traverse_preorder(self, func):
        self._traverse(func, 'pre', 0, None)

    def traverse_postorder(self, func):
        self._traverse(func, 'post', 0, None)


_ROOT_LABEL = '_root'


def read_categories_yaml(yaml_file):
    """
    Read tree of categories and return its root Node.
    """
    # The file contains a list of top-level nodes. Each node is either a leaf
    # 'foo', or a branch `{'foo': [...]}` where the children are nodes.
    raw_nodes_toplevel = yaml.safe_load(yaml_file)
    raw_root = {_ROOT_LABEL: raw_nodes_toplevel}

    # Convert to a tree of `Node` objects.
    def raw_node_to_node(raw_node):
        node = Node()
        if type(raw_node) == str:
            node.label = raw_node
        elif type(raw_node) == dict:
            assert len(raw_node) == 1
            key, val = raw_node.items()[0]
            node.label = key
            node.children = [raw_node_to_node(raw_child) for raw_child in val]
        return node

    categs_root = raw_node_to_node(raw_root)
    return categs_root


def make_categ_to_path(categs_root):
    """
    Return mapping from 'categ' to '/path/to/categ'.
    """
    categ_to_path = {}

    def func(node, **kwargs):
        if '/' in node.label:
            raise ValueError(
                "Invalid category {} -- slashes are not allowed"
                .format(node.label))
        if node.label in categ_to_path:
            raise ValueError("Found ambiguous category {}".format(node.label))
        if node.label == _ROOT_LABEL:
            path_to_node = ''
        else:
            parent = kwargs['parent']
            path_to_node = categ_to_path[parent.label] + '/' + node.label
        categ_to_path[node.label] = path_to_node

    categs_root.traverse_preorder(func)
    categ_to_path.pop(_ROOT_LABEL)
    return categ_to_path
