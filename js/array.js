let myArray = [1, 23, 523, 213, 90, 845, 289, 211, 98, 4, 15, 98, 140, 431, 436, 881, 671, 671, 23, 55, 671, 999, 17, 269, 254, 453, 290, 57, 198, 701, 764, 260, 774, 336, 190, 90, 126, 99, 134, 77, 90, 211, 198, 9, 199, 211, 900, 211];

/*
//find the product of all even elements of a given array
let r   = 1;
let sum = 0;
let evenArray = [];

for (let i = 0; i < myArray.length; i++) {
    //console.log(myArray[i]);
    if (myArray[i] % 2 === 0) {
        console.log(myArray[i]);
        r   = r * myArray[i];
        sum = sum +   [i];
        evenArray.push(myArray[i]);
        console.log(`r: ${r}`);
        console.log(`sum: ${sum}`);
    }
}
console.log(r);
console.log(evenArray.reduce( (a, b) => a * b ).toLocaleString());
*/

/*// find smaller element
let minSaved = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minSaved) {
        minSaved = myArray[i];
    }
}
console.log(`Min number: ${minSaved}`);
*/

/*//find bigger element
let maxSaved = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] > maxSaved) {
        maxSaved = myArray[i];
    }
}
console.log(`Max number: ${maxSaved}`);*/

/*
//find bigger element of remainder 5
let bigElRemainder = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 5 === 0) {
        console.log(myArray[i]);
        if (myArray[i] > bigElRemainder) {
            bigElRemainder = myArray[i];
        }
    }
}
console.log(bigElRemainder);
*/

//count how many even of elements
let evenEl = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        evenEl++;
    }
}
console.log(evenEl);
