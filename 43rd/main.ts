function showmagician(magician:string[])
{
    magician.forEach(name => console.log(name))
}
function mag(magician:string[])
{
   return magician.map(name =>` the great ${name}`)
}

let magic = ["saamri","harry potter","junaid bangali"]

let copy = magic.slice()

let copymag = mag(copy)

console.log("original")

showmagician(magic);

console.log("copy")

showmagician(copymag);
