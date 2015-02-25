from datetime import timedelta


def build_time_tree(onto_tree, categ_to_time):
    """
    Build a tree based on onto_tree, adding time_spent at each Node.
    """
    time_tree = onto_tree.copy()

    # Fill in time_spent at the leaves.
    categ_to_leaf = {}
    for leaf in time_tree.leaves():
        leaf.time_spent = timedelta()
        categ_to_leaf[leaf.label] = leaf
    for categ, time_spent in categ_to_time.iteritems():
        categ_to_leaf[categ].time_spent = time_spent

    # Propagate time_spent upwards in the tree by summing.
    def func(node, **kwargs):
        if node.children:
            node.time_spent = sum(
                (child.time_spent for child in node.children), timedelta())
    time_tree.traverse_postorder(func)

    # Sort children in decreasing order of time_spent.
    def func(node, **kwargs):
        node.children.sort(key=lambda node: node.time_spent, reverse=True)
    time_tree.traverse_postorder(func)

    return time_tree


def print_time_tree(root):
    """
    Pretty-print a time_tree to stdout, with time stats at each node.
    """
    total_sec = root.time_spent.total_seconds()

    def func(node, **kwargs):
        node_sec = node.time_spent.total_seconds()
        frac_of_total = node_sec / total_sec
        sec_per_day = timedelta(days=1).total_seconds() * frac_of_total
        time_per_day = timedelta(seconds=int(sec_per_day))

        parent = kwargs['parent']
        if parent:
            parent_sec = parent.time_spent.total_seconds()
            frac_of_parent = node_sec / parent_sec
        else:
            frac_of_parent = 1.0

        indent = " " * 4 * kwargs['depth']
        print "{}{:30s}  {:5.2f}% of parent;  total {};  per-day {}".format(
            indent,
            node.label,
            100.0 * frac_of_parent,
            node.time_spent,
            time_per_day)

    root.traverse_preorder(func)
