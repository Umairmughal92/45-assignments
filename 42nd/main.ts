function magicians(magician:string[])
{
    magician.forEach(name => console.log(name))
}
function mag(magician:string[])
{
   return magician.map(name =>` the great ${name}`)
}

let magic = ["saamri","harry potter","junaid bangali"]

let great= mag(magic)
magicians(great)