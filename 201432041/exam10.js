function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

let a = [123, 456];
swap(a, 0, 1);
console.log(a);
