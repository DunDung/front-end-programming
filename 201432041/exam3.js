function number1(s) {
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(parseInt(s[i]))) {
            return i;
        }
    }
}

console.log(number1("a123a"));
console.log(number1("  345"));
console.log(number1("bbb9a8b"));
