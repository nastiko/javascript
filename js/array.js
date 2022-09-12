/*let myArray = [1, 23, 523, 213, 90, 845, 289, 211, 98, 4, 15, 98, 140, 431, 436, 881, 671, 671, 23, 55, 671, 999, 17, 269, 254, 453, 290, 57, 198, 701, 764, 260, 774, 336, 190, 90, 126, 99, 134, 77, 90, 211, 198, 9, 199, 211, 900, 211];
myArray[4] ++;
console.log(myArray[4]);*/

//--------------

/*let arr = [1, 2, 3];
let arrSum = arr[0] + arr[1] + arr[2];

console.log(arrSum);*/

//--------------

/*let arr = ['a', 'b', 'c', 'd'];
let arrText = arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3];

console.log(arrText);*/

//--------------

/*let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = -2;
arr[2] = -3;

console.log(arr);*/

//--------------

/*let arr = [1, 2, 3];
arr[0] +=3;
arr[1] +=3;
arr[2] +=3;

console.log(arr);*/

//--------------

/*let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

console.log(arr);*/

//--------------

/*let arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;

console.log(arr);*/

//--------------

/*let arr = [];

arr[3] = 'a';
arr[8] = 'b';

console.log(arr.length);*/

//--------------

/*let arr = [];
arr.push(1);
arr.push('a');
arr.push(-2);

console.log(arr);*/

//--------------

/*let arr = [1, 2, 3];
arr.push(4);
arr.push(5);

console.log(arr);*/

//--------------

/*let arr = ['a', 'b', 'c'];
let key = 2;

console.log(arr[key]);*/

//--------------

/*let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;

console.log(arr[key1] + arr[key2]);*/

//--------------

/*let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[2];
delete arr[4];

console.log(arr);*/

//--------------

/*let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length-1]);*/

//--------------

/*let arr = [1, 2, 3, 4, 5];
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);*/

//--------------

/*let arr = [1, 2, 3, 4, 5];
console.log(arr.length);*/

//--------------

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

//--------------

/*// find smaller element
let minSaved = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minSaved) {
        minSaved = myArray[i];
    }
}
console.log(`Min number: ${minSaved}`);
*/

//--------------

/*//find bigger element
let maxSaved = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] > maxSaved) {
        maxSaved = myArray[i];
    }
}
console.log(`Max number: ${maxSaved}`);*/

//--------------

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

//--------------

//count how many even of elements
/*let evenEl = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        evenEl++;
    }
}
console.log(evenEl);*/

//--------------
