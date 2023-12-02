let array=[0,0,1,1,2,2,3,3,4];

function removeDuplicate(array){
    for(let i=0;i<array.length-1;i++){
        if(array[i]===array[i+1]){
            array.splice(i,1)
            array.push('_')
        }
    }
    return array
}

console.log(removeDuplicate(array))