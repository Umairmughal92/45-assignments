let mulk:string[] = ["china","bangladesh","pakistan","afghanistan"]
console.log("original order:",mulk);

console.log("alphabetical order:",[...mulk].sort());

console.log("still in original order:",mulk);

console.log("reverse order:",[...mulk].reverse());

console.log("still in original order:",mulk);

console.log("original array reversed:",mulk.reverse());

console.log("back to original order:",mulk.reverse());

console.log("sorted in alphabetical order:",mulk.sort());

console.log("original array reversed again:",mulk.reverse());


