let nums=[1,2,3,4,5];

function addition(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}

console.log(addition(nums))