function magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function mag(magician) {
    return magician.map(function (name) { return " the great ".concat(name); });
}
var magic = ["saamri", "harry potter", "junaid bangali"];
var great = mag(magic);
magicians(great);
