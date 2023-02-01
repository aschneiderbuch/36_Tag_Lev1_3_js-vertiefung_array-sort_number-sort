console.log("test");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort()

console.log(numArray1);
console.table(numArray1);  // nummern falsch,   10 , 2, 22, 24, 3

numArray1.sort((a, b) => a - b);

console.log(numArray1);
console.table(numArray1); 