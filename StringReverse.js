function StrReverse(str) {
    let strArr = str.split('')
    let start = 0;
    let end = strArr.length - 1;

    while (start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;

        start++;
        end--
    }
    return strArr.join('')
}

const originalstr="asas"
const StringReverse=StrReverse(originalstr)
console.log(StringReverse)