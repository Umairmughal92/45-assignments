var bandey = ["ali", "admin", "jon", "tom", "cane"];
bandey.forEach(function (banda) {
    if (banda === "admin") {
        console.log("hello ".concat(banda, ",would you like to see a status report?"));
    }
    else {
        console.log("hello".concat(banda, ",thank you for logging in again."));
    }
});
