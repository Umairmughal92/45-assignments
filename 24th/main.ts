//variables
let apple = "apple";
let bigapple ="APPLE";
let ten =10;
let fifty =50;
let fruits=["apple","orange","banana"];


//test
// for equality /inequality

console.log("\n Is apple is equal to apple?");
console.log(apple=="apple");

console.log("\n Is apple is not equal to apple?");
console.log(apple!="apple");

//by using lowercase function
console.log("\n Is APPLE is equal to apple after using lowercase function?");
console.log(bigapple.toLowerCase()=="apple");

console.log("\n Is APPLE is not equal to apple after using lowercase function?");
console.log(bigapple.toLowerCase()!="apple");

//for numericals(equality,greater or less than)

console.log("\n Is ten equal to fifty");
console.log(fifty==ten);

console.log("\n Is ten not equal to fifty");
console.log(fifty!=ten);

console.log("\n Is ten is greater than fifty");
console.log(ten>fifty);

console.log("\n Is ten is less than fifty");
console.log(ten<fifty);

console.log("\n Is ten greater than or equal to five");
console.log(ten>=5);

console.log("\n Is ten less than or equal to five");
console.log(ten<=5);

//by using and/or operator


console.log("\n Is ten equal to fifty and greater than -2");
console.log(fifty==ten && ten>-2); 

console.log("\n Is ten equal to ten and less than -2");
console.log(10==ten && ten<-2); 

console.log("\n Is ten equal to ten and greater than -2");
console.log(10==ten && ten>-2); 

console.log("\n Is ten equal to fifty or greater than -2");
console.log(fifty==ten || ten>-2);

console.log("\n Is ten equal to fifty or less than -2");
console.log(fifty==ten || ten<-2);  

console.log("\n Is ten equal to ten or greater than -2");
console.log(fifty==ten || ten>-2); 

//for array

console.log("\n is orange is present in my fruit array")
console.log(fruits.includes("orange"));

console.log("\n is orange is not present in my fruit array")
console.log(!fruits.includes("orange"));
