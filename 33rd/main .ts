let numbers = [1,2,3,4,5,6,7,8,9];

for(let onenum of numbers){
    let ending:string;

    if(onenum === 1){
        ending="st"
    }
    else if(onenum === 2){
        ending="nd"
    }
    else if(onenum === 3){
        ending="rd"
    }
    else{
        ending="th"
    }

    console.log(`${onenum}${ending}`)
}








