let num = 5;
let fac = 1;
var i = 1;

function factorial() {
    // for (let i = num; i >= 1; i--) {
    //     fac = fac * i;
    // }
    // console.log(fac)
    while (i <= num) {
        fac = fac * i;
        i++
    }
    console.log(fac)
}
factorial(num)