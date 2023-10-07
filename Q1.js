let num = [3, 2, 2, 3];
let target = 3;

function array(num,target) {
    let final = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] === target) {
            num.splice(i, 1)
            num.push("_")
        } else {
            final.push(num[i])
        }
        return final;
    }
}

console.log(array(num,target));