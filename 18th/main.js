var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mulk = ["china", "bangladesh", "pakistan", "afghanistan"];
console.log("original order:", mulk);
console.log("alphabetical order:", __spreadArray([], mulk, true).sort());
console.log("still in original order:", mulk);
console.log("reverse order:", __spreadArray([], mulk, true).reverse());
console.log("still in original order:", mulk);
console.log("original array reversed:", mulk.reverse());
console.log("back to original order:", mulk.reverse());
console.log("sorted in alphabetical order:", mulk.sort());
console.log("original array reversed again:", mulk.reverse());
