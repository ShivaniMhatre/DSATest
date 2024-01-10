function CamelCase(str) {
    const sentence = str.split(/\W+/)
    let res = sentence[0].toLowerCase();
    for (let i = 1; i < sentence.length; i++) {
        res += sentence[i][0].toUpperCase() + sentence[i].slice(1).toLowerCase();
    }
    return res
}

console.log(CamelCase(readline()))