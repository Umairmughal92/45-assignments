let dostkanaam = ["ali","daniyal","bilal"];
let topi = dostkanaam[0];
console.log(topi,"nhi aa sakta");
dostkanaam.splice(0,1,"hamza");
dostkanaam.forEach(friend => console.log(`Salam ${friend},would you like to dinner with me?`));
    