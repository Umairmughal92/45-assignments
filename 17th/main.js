var dostkanaam = ["ali", "daniyal", "bilal"];
var topi = dostkanaam[0];
console.log(topi, "nhi aa sakta");
//changig value
dostkanaam.splice(0, 1, "hamza");
console.log("Good news! we have found a bigger table for dinner");
//adding first value
dostkanaam.unshift("shoaib");
//adding last value
dostkanaam.push("irfan");
//for middle value
var darmiyani = Math.floor(dostkanaam.length / 2);
//for adding middle value
dostkanaam.splice(darmiyani, 0, "saqib");
console.log("updated list");
dostkanaam.forEach(function (friend) { return console.log("Salam ".concat(friend, ",would you like to dinner with me?")); });
console.log("Unfortunetly,new dinner table won't so we are inviting only two guests");
while (dostkanaam.length > 2) {
    var panoti = dostkanaam.pop();
    console.log("Sorry ".concat(panoti, ",i can't invite you to dinner"));
}
dostkanaam.forEach(function (akhri) { return console.log("Salam ".concat(akhri, ",you are still invited.")); });
dostkanaam.pop();
dostkanaam.pop();
console.log("empty list:", dostkanaam);
