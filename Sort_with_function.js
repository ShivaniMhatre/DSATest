let array = [4, 3, 1, 2, 5];

function sortArray(array) {
    let sortnum = array.sort((a, b) => { return a - b });
    return sortnum
}

console.log(sortArray(array))