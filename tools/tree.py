class Node:
    def __init__(self):
        self.label = None
        self.children = []

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
