let array=[1,2,2,3,4,5,5,6,7,8,8];

function removeDuplicate(array){
    for(let i=0;i<array.length;i++){
        if(array[i]===array[i+1]){
            array.splice(i,1)
        }
    }
    return array
}

console.log(removeDuplicate(array))