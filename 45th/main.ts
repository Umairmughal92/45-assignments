function cars(manufacturer,model,...option){

    let car ={
        manufacturer :manufacturer,
        model:model,
    };

    option.forEach(option =>{
        let [key,value]=option.split(":")
car[key.trim()] = value.trim()
    })
    return car
}

let mycar = cars("suzuki","bolan","color:red","roof:true","year:2024")

console.log(mycar)

