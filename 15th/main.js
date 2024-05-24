var dostkanaam = ["ali", "daniyal", "bilal"];
var topi = dostkanaam[0];
console.log(topi, "nhi aa sakta");
dostkanaam.splice(0, 1, "hamza");
dostkanaam.forEach(function (friend) { return console.log("Salam ".concat(friend, ",would you like to dinner wit me?")); });
