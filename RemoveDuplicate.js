function removeDuplicate(arr) {
    
    let array = []
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false
        for (let j = 0; j < array.length; j++) {
            if (arr[i] == array[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            array.push(arr[i])
        }
    }
    return array
}

const arr = "adadd"
const RemoveDuplicate = removeDuplicate(arr)
console.log(RemoveDuplicate)