var secondsInADay = 86400.0;

// Build a color scheme for the given tree of categories.
// Returns a function color that can be called like color(category) or
// color(category, depth).
function makeColorFunc(categories) {
    var topLevelCategs = _.map(categories.children, function(node) {
        return node.name;
    });
    console.log(topLevelCategs);
    var categToTopLevelCateg = {};
    _.map(getRootToLeafPaths(categories), function(path) {
        for (var i = 1; i < path.length; i++) {
            categToTopLevelCateg[path[i].name] = path[1].name;
        }
    });
    console.log(categToTopLevelCateg);

    var hueScale = d3.scale.ordinal()
        .domain(topLevelCategs)
        .rangePoints([0, 360], 1);
    var saturation = 0.5;
    var lightness = 0.5;

    return function(category, depth) {
        if (category == "untracked" || category == "root") {
            return "#000000";
        }
        category = categToTopLevelCateg[category];
        if (depth === undefined) {
            depth = 1;
        }
        var color = d3.hsl(hueScale(category), saturation, lightness);
        for (var i = 1; i < depth; i++) {
            color = color.brighter(0.5);
        }
        return color.toString();
    };
}

function main() {
    // Parse ISO-8601 datetimes into Moment objects.
    for (var i = 0; i < data.events.length; i++) {
        data.events[i].begin = moment(data.events[i].begin);
        data.events[i].end = moment(data.events[i].end);
    }

    // Build color scheme.
    var categoryColor = makeColorFunc(data.categories);

    // Build sunburst visualization.
    var sunburst1 = makeSunburst(
        data.categories, data.events,
        $("#sunburst1"), categoryColor);
    var sunburst2 = makeSunburst(
        data.categories, data.events,
        $("#sunburst2"), categoryColor);

    // After createSunburst runs, the nodes in partitionData are ordered by
    // size. We take advantage of this to display the categories in the
    // streamgraph in the same order.
    var orderedLeafCategories = _.map(
        getLeaves(sunburst1.partitionData),
        function(leaf) { return leaf.name; });
    orderedLeafCategories.push("untracked");

    // Build streamgraph visualization.
    var streamgraph1 = makeStreamgraph(
        data.categories, data.events,
        $("#streamgraph1"), orderedLeafCategories, categoryColor);
    var streamgraph2 = makeStreamgraph(
        data.categories, data.events,
        $("#streamgraph2"), orderedLeafCategories, categoryColor);
}

main();
