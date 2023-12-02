let n = 5;
var isPrimeNum = true
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrimeNum = false;
            // console.log("Is Prime number")
        }
    }
    if (isPrimeNum == true) {
        console.log(`${n} is Prime Number` )
    } else {
        console.log(`${n} is not a Prime Number`)
    }
}

isPrime(n)