function doSomething(a) {
    return [...a].reverse();;
}

let a1 = [1, 2, 3];
let a2 = doSomething(a1);
console.log(a1, a2);
