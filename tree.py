from datetime import timedelta


class Node:
    def __init__(self):
        self.category = None
        self.time_spent = timedelta()
        self.children = []


def parse_ontology(inp):
    """
    Return tree of categories.

    Nodes in this tree are {category -> sub_categories} dicts.
    Leaf categories are empty dicts like {"leaf_cat" -> {}}.
    """
    root = Node()
    root.category = 'root'
    # We add an empty first line so that lineno can start at 1, and therefore
    # match the actual line number in the file, which is 1-indexed.
    lines = [''] + inp.readlines()
    lineno = parse_ontology_level(lines, 1, 0, root)
    if lineno != len(lines):
        raise ValueError("line {}: underindented".format(lineno))
    return root


def parse_ontology_level(lines, lineno, root_spaces, root):
    """
    Parse a level of the tree into `root` and return the next `lineno`.

    The level is defined by the number of spaces.
    """
    prev_categ = None
    child_spaces = None
    while True:
        if lineno == len(lines):
            # EOF; end recursion.
            break
        line = lines[lineno]
        if not line.strip() or line.startswith('#'):
            # Ignore blank line.
            lineno += 1
            continue
        categ = line.strip()
        spaces = 0
        for c in line:
            if c != ' ':
                break
            spaces += 1
        if spaces < root_spaces:
            # Handled by function above us.
            break
        if spaces == root_spaces:
            # Handled by ourselves.
            child = Node()
            child.category = categ
            root.children.append(child)
            prev_categ = child
            lineno += 1
        elif spaces > root_spaces:
            # Handled by a child function.
            if child_spaces is None:
                child_spaces = spaces
            if child_spaces != spaces:
                raise ValueError("line {}: indent mismatch".format(lineno))
            if prev_categ is None:
                raise ValueError("line {}: overindented".format(lineno))
            lineno = parse_ontology_level(lines, lineno, spaces, prev_categ)

    return lineno


def add_events(tree, events):
    """
    Assign events to leaf categories, in place.

    In place.
    """
    def find_leaf_categs(node):
        if not node.children:
            if node.category in leaf_categ_to_node:
                raise ValueError(
                    "duplicate leaf category '{}'".format(node.category))
            leaf_categ_to_node[node.category] = node
        for child in node.children:
            find_leaf_categs(child)

    leaf_categ_to_node = {}
    find_leaf_categs(tree)

    for (begin, end, categs, comment) in events:
        time = (end - begin) / len(categs)
        for categ in categs:
            if categ not in leaf_categ_to_node:
                raise ValueError("unknown leaf category '{}'".format(categ))
            node = leaf_categ_to_node[categ]
            node.time_spent += time


def finalize_tree(tree):
    """
    Propagate time_spent upwards, in place.
    """
    def sum_time_spent(node):
        for child in node.children:
            sum_time_spent(child)
            node.time_spent += child.time_spent
        node.children.sort(key=lambda child: -child.time_spent)

    sum_time_spent(tree)


def print_tree(node, spaces, parent_time, total_time):
    """
    Pretty-print tree of categories.
    """
    time_sec = node.time_spent.total_seconds()
    percent_of_parent = 0.0
    time_per_day = '-'
    if parent_time:
        percent_of_parent = 100.0 * time_sec / parent_time.total_seconds()
    if total_time:
        frac_of_total = 1.0 * time_sec / total_time.total_seconds()
        sec_per_day = timedelta(days=1).total_seconds() * frac_of_total
        time_per_day = timedelta(seconds=int(sec_per_day))
    print "{}{:30s}  {:5.2f}% of parent;  total {};  per-day {}".format(
        ' ' * spaces,
        node.category,
        percent_of_parent,
        node.time_spent,
        time_per_day)
    for child in node.children:
        print_tree(child, spaces + 4, node.time_spent, total_time)
