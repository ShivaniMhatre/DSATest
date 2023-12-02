function SecondHighNumber(arr) {
    let max =arr[0];
    let secondMax = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i]
        }
        else if (arr[i] < max && (secondMax === null || arr[i] > secondMax)) {
            secondMax = arr[i]
        }
    }
    return secondMax
}

const number = [3,4,6,2,8,1]
const secHighNum = SecondHighNumber(number)
console.log(secHighNum)
// secHighNum()