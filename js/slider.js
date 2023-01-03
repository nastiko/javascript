function slider() {
    let elem = document.querySelector('#slider');
    let texts = ['text1', 'text2', 'text3'];

    for (let i = 0; i < texts.length; i++) {

    }
}

//slider();

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.querySelector('#slider').innerHTML = date.toLocaleTimeString();
}

