function even(a) {
    for (let i = 0; i <a.length; i++) {
        if (a[i] % 2 === 1) {
            a.splice(i, 1);
            i--;
        }
    }
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
even(a);
console.log(a);
