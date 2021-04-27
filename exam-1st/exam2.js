function space2(s) {
    let first = s.indexOf(" ");
    return s.indexOf(" ", first + 1);
}

console.log(space2("a b c d"));
console.log(space2("one two three four"));
