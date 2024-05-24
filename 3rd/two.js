var naam = "Umair mughal";
console.log(naam.toLowerCase());
console.log(naam.toUpperCase());
console.log(naam.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
