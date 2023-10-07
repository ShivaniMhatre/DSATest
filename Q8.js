let n = 6;
let flag=false
function isPrime(n) {
    for(let i=2;i<n;i++){
        if(n%i===0){
            // flag=true;
            console.log("Is Prime number")
        }
        else{
            console.log("Is Not Prime number")
        }
    }
    // if(flag==true){
        
    // }else{
    //     console.log("not A Prime Number")
    // }
}

console.log(isPrime(n))