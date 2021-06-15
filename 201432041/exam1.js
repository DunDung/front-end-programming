function add(n) {
  var s = 0;
  for(i=1; i<=n; i++) {
    console.log(i)
    if (s % 2 == 0)
      continue;
    s += i;
    console.log(s)
  }
  return s;
}

console.log(add(7))