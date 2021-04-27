function doSomething(a) {
    let b = [...a];
    b.shift();
    b.pop();
    return b;
}

let a1 = [3, 4, 5, 6];
let a2 = doSomething(a1);
console.log(a1, a2);
