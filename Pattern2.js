function Pattern2(num) {
    let str="";

    for (let i = num; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            // document.write("*")
            // document.write(i," ")
           str+="*"
        }
        str+="\n"
    }
    console.log(str)
}

let num=4;
Pattern2(num)