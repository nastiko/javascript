//let arr = [90,23,523,213,90,845,289,211,98,4,260,15,98,140,431,436,881,260,671,671,23,55,671,999,17,269,254,453,290,57,198,671,701,764,260,774,336,190,90,126,99,134,77,90,211,198,9,199,211,900,211];

//--------------

function multiplier() {
    let x =1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            x = arr[i] * x;
        }
    }
    console.log(x);
}

//multiplier();

//--------------

function minNumber() {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min);
}

//minNumber();

//--------------

function evenNumbers() {
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            num++;
        }
    }
    console.log(num);
}

//--------------

function repeatNumbers() {
    let arr = [90,23,15,90,36,11,15,90];
    let num = arr[0];
    let cnt = 1;
    let dup = 0;

    for(let i = 0; i < arr.length; i++) {
        dup = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i]===arr[j]){
                dup++;
            }
        }
        if(dup>cnt){
            num = arr[i];
            cnt = dup;
        }
    }
    console.log(num+' -> '+cnt);
}

//repeatNumbers();

//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------