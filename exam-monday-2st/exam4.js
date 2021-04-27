
function deepCopy(persons) {
    let persons2 = [];
    for (let key in persons) {
        persons2.push(Object.assign({ }, persons[key]));
    }
    return persons2;

}

let persons1 = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 }
];
console.log(persons1);
let persons2 = deepCopy(persons1);
persons1[0].age = 20;
console.log(persons1);

