function operatorsPractices1() {

    function func(num1, num2, num3, num4, num5) {
        return num1 + num2 + num3 + num4 + num5;
    }

    let arr = [1, 2, 3, 4, 5];
    let result = func(...arr);

    console.log(result);

}

//operatorsPractices1();

//--------------

function operatorsPractices2() {
    function func(n1, n2, n3, n4, n5, n6, n7, n8) {
        return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
    }

    console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );
}

//operatorsPractices2();

//--------------

function operatorsPractices3() {
    let arr = [5, -9, 6, 4, -78, 95];
    let min = Math.min(...arr);

    console.log(min);
}

//operatorsPractices3();

//--------------

function operatorsPractices4() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let arr  = ['a', ...arr1, 'b', 'c', ...arr2];
    console.log(arr);
}

//operatorsPractices4();

//--------------

function operatorsPractices5() {
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];
    let arr3 = [...arr2, 7, 8, 9];

    let arr  = [0, ...arr3];
    console.log(arr);
}

//operatorsPractices5();

//--------------

function operatorsPractices6() {
    let arr = [...'12345'];
    console.log(arr);
}

//operatorsPractices6();

//--------------

function operatorsPractices7() {

    function func(a, b, ...rest) {
        console.log(a);
        console.log(b);
        console.log(rest);
    }

    func(1, 2, 3, 4, 5);
}

//operatorsPractices7();

//--------------

function operatorsPractices8() {
    function func(...nums) {
        let main = 0;
        let sum = 0;

        for(let elem of nums) {
            sum += elem;
            main = sum / nums.length;
        }

        return main;
    }

    let result = func(53, 4, 28, 9, 34, 12, 1).toFixed(2);
    console.log(result);
}

//operatorsPractices8();

//--------------

function operatorsPractices9() {
    function unite(...arrs) {
        return arrs;
    }

    let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    console.log(result);
}

//operatorsPractices9();

//--------------

function operatorsPractices10() {
    function merge(...arrs) {
        return [].concat(...arrs);
    }

    let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    console.log(result);
}

//operatorsPractices10();

//--------------