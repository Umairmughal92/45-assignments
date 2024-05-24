let dostkanaam = ["ali","daniyal","bilal"];

let topi = dostkanaam[0];

console.log(topi,"nhi aa sakta");
//changig value
dostkanaam.splice(0,1,"hamza");

console.log("Good news! we have found a bigger table for dinner");
//adding first value
dostkanaam.unshift("shoaib");
//adding last value
dostkanaam.push("irfan");
//for middle value
let darmiyani :number = Math.floor(dostkanaam.length/2);
//for adding middle value
dostkanaam.splice(darmiyani,0,"saqib");

console.log("updated list");

dostkanaam.forEach(friend => console.log(`Salam ${friend},would you like to dinner with me?`));
    