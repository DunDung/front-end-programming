function space5(s) {
    return s.replace(/(\s*)/g, "");
}

console.log(space5("a b c"));
console.log(space5("one  two"));
