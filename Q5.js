let array=[2,3,1,4,5,8];

function reversearray(array){
    let ReverseArray=[];
    for(let i=array.length-1;i>=0;i--){
        ReverseArray.push(array[i])
    }
    return ReverseArray
}

console.log(reversearray(array))