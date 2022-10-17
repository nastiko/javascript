function cube(num) {
    console.log(num ** 3);
}

//cube(2);

//--------------

function findPositive(num) {
    if(num > 0) {
        console.log('The number is positive');
    } else {
        console.log('The number is negative');
    }
}

//findPositive(5);

//--------------

function findSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

//findSum(25, 32, 1);

//--------------

function getCarModelByColor(color) {
    let car = '';
    switch (color){
        case 'red':
            car = 'Mazda';
            break;
        case 'yellow':
            car = 'Alfa Romeo';
            break;
        case 'blue':
            car = 'Smart';
            break;
        default:
           car = 'Unknown';
    }

    return car;
}

//let carColour = 'yellow';
let carColour = 'red';
let carModel = getCarModelByColor(carColour);
console.log(carModel);


function calculateSquareArea(a){
    let area = a*a;
    return area;
}

let squareSide = 5;
let squareArea = calculateSquareArea(squareSide);
console.log(squareArea);


//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------