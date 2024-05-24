var currentusers = ["jon", "tom", "jerry", "cane", "saad"];
var newusers = ["ali", "BILAL", "JON", "saad", "sami"];
newusers.forEach(function (newuser) {
    var cond = currentusers.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); });
    if (cond) {
        console.log("sorry ".concat(newuser, " is already taken."));
    }
    else {
        console.log("this username ".concat(newuser, " is available."));
    }
});
