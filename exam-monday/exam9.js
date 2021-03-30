function createArray(count) {
    let start = 1;
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(start);
        start += 2;
    }
    return arr;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
