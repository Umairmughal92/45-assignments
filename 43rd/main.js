function showmagician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function mag(magician) {
    return magician.map(function (name) { return " the great ".concat(name); });
}
var magic = ["saamri", "harry potter", "junaid bangali"];
var copy = magic.slice();
var copymag = mag(copy);
console.log("original");
showmagician(magic);
console.log("copy");
showmagician(copymag);
