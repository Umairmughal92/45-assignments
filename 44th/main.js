function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with following item :");
    items.forEach(function (single) { return console.log("-" + single); });
    console.log(" enjoy sandwich");
}
makesandwich("beef", "tommato", "mayo");
makesandwich("egg", "tommato", "cheese");
makesandwich("beef", "tommato", "mayo", "egg", "kettchup", "cheese");
