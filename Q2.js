let val = "mam";

function palindrome(val) {
    let myRevVal = val.toString().split("").reverse().join("");
    let myStrVal = val.toString();
    if (myStrVal == myRevVal) {
        console.log("Palindrome")
    } else {
        console.log("Not A Palindrome")
    }
}

palindrome(val)