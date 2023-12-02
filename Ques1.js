let nums = [3,2,4];
let output = []
let target = 6;
// let sum = 0;
function Ques(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length;j++) {
            if (nums[i] + nums[j] === target) {
                output.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
                // console.log(nums.indexOf(nums[i]),nums.indexOf(nums[j]))
                console.log(output)
            }
        }
    }
}
Ques(nums)