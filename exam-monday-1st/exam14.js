function createArray() {
    let arr = new Array(3);
    let arr2 = [1, 2, 3];
    for (let i = 0; i < 3; i++) {
        arr[i] = arr2;
    }
    return arr;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
