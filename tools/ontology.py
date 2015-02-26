from tree import Node


def parse_ontology(inp):
    """
    Read the ontology and return it as a tree where labels are categories.
    """
    root = Node()
    root.label = 'root'
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
            child.label = categ
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
