let bandey = ["ali","admin","jon","tom","cane"];
bandey.forEach(banda => {
  if(banda === "admin"){
    console.log(`hello ${banda},would you like to see a status report?`);
  }  
  else{
    console.log(`hello${banda},thank you for logging in again.`)
  }
});