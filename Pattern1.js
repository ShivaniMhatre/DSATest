function Pattern1(num) {
    let str = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            str += "-"
        }
        str += "\n"
    }
    console.log(str)
}

let num = 4
Pattern1(num)

