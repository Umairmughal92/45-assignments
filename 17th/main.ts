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
//invitation
dostkanaam.forEach(friend => console.log(`Salam ${friend},would you like to dinner with me?`));
   //program warh gaya
console.log("Unfortunetly,new dinner table won't so we are inviting only two guests");
//dostoon ko katao
while(dostkanaam.length>2){
  let panoti =  dostkanaam.pop();
console.log(`Sorry ${panoti},i can't invite you to dinner`);
}

//inviting last two
dostkanaam.forEach(akhri => console.log(`Salam ${akhri},you are still invited.`));
//also removing them
dostkanaam.pop();
dostkanaam.pop();

console.log("empty list:",dostkanaam);   