//PRACTICE #1
function wrapElems() {
    $('#practice1 b').parent().wrap('<div></div>');
}

//wrapElems();

//--------------

//PRACTICE #2
function styleElems1() {
    let textAddBefore = $('#practice2 .www').prepend('!');
    textAddBefore.append('<h4>Text</h4>', '<h5>Text</h5>', '<h6>Text</h6>').css('color', 'red');
}

//styleElems1();

//--------------

//PRACTICE #3
function replaceTags() {
    $('#practice3 div p').each(function () {
        $(this).replaceWith('<div>' + $(this).text() + '</div>');
    });
}

replaceTags();

//--------------

//PRACTICE #4
function disabledCheckbox() {
    $('#practice4 div input:odd').prop('disabled', true);
    $('#practice4 div input:even').prop('checked', 'checked');
}

//disabledCheckbox();

//--------------

//PRACTICE #5
function addAppendPrependElem() {
    $('#practice5 div').append('<p>#test</p>').prepend('<p>#test</p>');
    $('#practice5 div p').parent().prepend('Parent:');
    $('#practice5 div p').first().append('<p>test1</p>').prepend('<p>test1</p>');
    $('#practice5 div p').last().append('<p>test2</p>').prepend('<p>test2</p>');
}

//addAppendPrependElem();

//--------------

//PRACTICE #6
function addWrapElem() {
    $('#practice6 li:nth-child(2)').addClass('www').wrapInner('<i></i>>').append('<li>Hello</li>');
    $('#practice6 li:nth-child(10)').parent().siblings().wrap('<div class="www"></div>');
}

//addWrapElem();

//--------------

//PRACTICE #7
function addIndex() {
    $('#practice7 div p').each(function (index) {
        $(this).append(` is index: ${index}`);
    });
}

//addIndex();

//--------------

//PRACTICE #8
function cloneElem() {
    $('#practice8 div p').css('color', 'green');
    $('#practice8 div p').each(function () {
        $(this).clone().insertBefore($(this)).css('color', 'red');
    });
}

//cloneElem();

//--------------

//PRACTICE #9
function prependElems() {
    $('#practice9 div h2').before($('#practice9 div p'));
}

//prependElems();

//--------------

//PRACTICE #10
function addText() {
    $('#practice10 div p:empty').html(`New text: ` + $('#practice10 div h2').text());
}

//addText();

//--------------

//PRACTICE #11
function styleElem2() {
    $('#practice11 i.www').css({color: 'red', fontSize: '30px'});
}

//styleElem2();

//--------------

//PRACTICE #12
function countSquares() {

    $('#practice12 input').each(function () {
        $(this).val(Number($(this).val()) ** 2);
    });
}

//countSquares();

//--------------

//PRACTICE #13
function styleElem3() {
    $('#practice13 div :not(:header)').css('color', 'red');
    $('#practice13 div p.www').append('!!!!').css('color', 'green');

}

//styleElem3();

//--------------

//PRACTICE #14
function cloneElems() {
    $('#practice14 div p').each(function (index) {
        $(this).clone().insertBefore($(this)).append(' - his index is: ' + index);
    });
}

//cloneElems();

//--------------

//PRACTICE #15
function multiplyNumber() {
    $('#practice15 ul').children().map(function (index) {
        let element = Number($(this).text() * index);
        $(this).append(' * ' + index + ' = ' + element);
    });

    $('#practice15 ul').children().on('click', (event) => {
        $(event.currentTarget).prev().remove();
        $(event.currentTarget).next().remove();
    });
}

//multiplyNumber();

//--------------

//PRACTICE #16
function removeElems() {
    $('#practice16 div p').on('click', (event) => {
        $(event.currentTarget).prev().not('h2').remove();
    });

    $('#practice16 div p').on('click', () => {
        $('p:nth-child(5)').remove();
    });
}

//removeElems();

//--------------

//PRACTICE #17
function swapElems() {
    let currentElem = $('#practice17 .aaa').css('color', 'red');
    let prevElem = currentElem.next();

    currentElem.before(prevElem);
    prevElem.after(currentElem);
}

//swapElems();

//--------------

//PRACTICE #18
function wrapElem2() {
    $('#practice18 :header').wrapAll('<div></div>');
    $('#practice18 :header').siblings().wrap('<div class="www"></div>');
    $('#practice18 :header').eq(2).unwrap();
}

//wrapElem2();

//--------------

//PRACTICE #19
function getParent() {
    $('#practice19 #bbb').parent().attr('class', 'parent').css({"color": "red", "border": "2px solid red"});
}

//getParent();

//--------------

//PRACTICE #20
function styleElem4() {
    $('#practice20 div p').append('!').closest('#practice20 .www').css('color', 'red');
    $('#practice20 div p').last().on('click', function() {
        $(this).append('<p>Added a new elem</p>');
    });

    $('#practice20 div').css({
        border: '1px solid red',
        height: '200px',
        width: '200px'
    });

    let height = $('#practice20 div').height();
    let width = $('#practice20 div').width();

    let increaseHeight = height * 2;
    let increaseWidth = width * 2;

    let total = increaseHeight + increaseWidth;
    console.log(total);

    $('#practice20 div').css({
        height: increaseHeight,
        width: increaseWidth
    });
}

//styleElem4();

//--------------

//PRACTICE #21
function checkCheckbox() {
    $('#practice21 input').on('click', () => {
        let checked = $('#practice21 input:checkbox:checked').length;
        if(checked >= 2) {
            $('#practice21 input:checkbox:not(:checked)').attr("disabled", true);
        }
    });
}

//checkCheckbox();

//--------------