var bandey = ["ali", "admin", "jon", "tom", "cane"];
bandey = [];
if (bandey.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    bandey.forEach(function (banda) {
        if (banda === "admin") {
            console.log("hello ".concat(banda, ",would you like to see a status report?"));
        }
        else {
            console.log("hello".concat(banda, ",thank you for logging in again."));
        }
    });
}
