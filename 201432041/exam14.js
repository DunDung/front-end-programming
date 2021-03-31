function doSomething(a) {
    for (let i = 0; i < a.length; i++) {
        let x = a[i];
        let type = typeof x;
        if (type === "object") {
            console.log("index=" + i + ", type=" + type + ", value=" + JSON.stringify(x))
        } else {
            console.log("index=" + i + ", type=" + type + ", value=" + x)
        }
    }
}

let a = [3, "hello", true, []];
doSomething(a);
