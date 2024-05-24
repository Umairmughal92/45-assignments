let currentusers = ["jon","tom","jerry","cane","saad"];

let newusers = ["ali","BILAL","JON","saad","sami"];

newusers.forEach(newuser =>{
    let cond=currentusers.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase())
    if(cond){
        console.log(`sorry ${newuser} is already taken.`);
    }
    else{
        console.log(`this username ${newuser} is available.`);
    }
})







