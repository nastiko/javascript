//THEORY #1
function getElement1() {
    let paragraph = document.querySelector('#dom1-text');
    console.log(paragraph);
}

//getElement1();

//--------------

//THEORY #2
function getElement2() {
    let paragraph = document.querySelector('#dom2-second_number');
    console.log(paragraph);
}

//getElement2();

//--------------

//THEORY #3
function getElement3() {
    let paragraph = document.querySelector('#dom3 #dom3-third_number');
    console.log(paragraph);
}

//getElement3();

//--------------

//THEORY #4
function getElement4() {
    let paragraph = document.querySelector('#dom4 .www');
    console.log(paragraph);
}

//getElement4();

//--------------

//THEORY #5
function eventsHandlersBinding() {
    let buttonFirst = document.querySelector('#dom5-button1');
    buttonFirst.addEventListener('click', function () {
        alert(1);
    });

    let buttonSecond = document.querySelector('#dom5-button2');
    buttonSecond.addEventListener('click', function () {
        alert('Hello JavaScript!');
    });

    let buttonThird = document.querySelector('#dom5-button3');
    buttonThird.addEventListener('click', function () {
        alert('It\'s so fun to do that!');
    });
}

//eventsHandlersBinding();

//--------------

//THEORY #6
function namedEventHandlers() {
    let buttonFirst = document.querySelector('#dom6-button1');
    buttonFirst.addEventListener('click', func1);

    function func1() {
        console.log(1);
    }

    let buttonSecond = document.querySelector('#dom6-button2');
    buttonSecond.addEventListener('click', func2);

    function func2() {
        console.log(2);
    }
}

//namedEventHandlers();

//--------------

//THEORY #7
function manyElementsHandlers() {
    let paragraphFirst = document.querySelector('#dom7-elem1');
    paragraphFirst.addEventListener('click', func);

    let paragraphSecond = document.querySelector('#dom7-elem2');
    paragraphSecond.addEventListener('click', func);

    let paragraphThird = document.querySelector('#dom7-elem3');
    paragraphThird.addEventListener('click', func);

    let paragraphFourth = document.querySelector('#dom7-elem4');
    paragraphFourth.addEventListener('click', func);

    let paragraphFifth = document.querySelector('#dom7-elem5');
    paragraphFifth.addEventListener('click', func);

    function func() {
        console.log('You have a message');
    }
}

//manyElementsHandlers();

//--------------

//THEORY #8
function severalHandlers() {
    let paragraph = document.querySelector('#dom8-elem');
    paragraph.addEventListener('click', func1);
    paragraph.addEventListener('click', func2);
    paragraph.addEventListener('click', func3);

    function func1() {
        console.log('1');
    }

    function func2() {
        console.log('2');
    }

    function func3() {
        console.log('3');
    }
}

//severalHandlers();

//--------------

//THEORY #9
function differentEventsHandlers1() {
    let button = document.querySelector('#dom9-button');
    button.addEventListener('dblclick', func);

    function func() {
        alert('It was double click');
    }
}

//differentEventsHandlers1();

//--------------

//THEORY #10
function differentEventsHandlers2() {
    let button = document.querySelector('#dom10-button');
    button.addEventListener('mouseover', func);

    function func() {
        alert('Hello there!');
    }
}

//differentEventsHandlers2();

//--------------

//THEORY #11
function differentEventsHandlers3() {
    let button = document.querySelector('#dom11-button');
    button.addEventListener('mouseout', func);

    function func() {
        alert('See you soon!');
    }
}

//differentEventsHandlers3();

//--------------

//THEORY #12
function differentEventsHandlers4() {
    let button = document.querySelector('#dom12-button');
    button.addEventListener('mouseover', firstMessage);
    button.addEventListener('mouseout', secondMessage);

    function firstMessage() {
        alert('Hello');
    }

    function secondMessage() {
        alert('Bye');
    }
}

//differentEventsHandlers4();

//--------------

//THEORY #13
function elementText1() {
    let button = document.querySelector('#dom13-button');
    button.addEventListener('click', textButton);

    function textButton() {
        console.log(button.textContent);
    }
}

//elementText1();

//--------------

//THEORY #14
function elementText2() {
    let button = document.querySelector('#dom14-button');
    button.addEventListener('click', changeText);

    function changeText() {
        let paragraph = document.querySelector('#dom14-elem');
        paragraph.textContent = 'Look at this!';
    }
}

//elementText2();

//--------------

//THEORY #15
function elementText3() {
    let button = document.querySelector('#dom15-button');
    button.addEventListener('click', sumNumber);

    function sumNumber() {
        let paragraphFirst = document.querySelector('#dom15-elem1');
        let paragraphSecond = document.querySelector('#dom15-elem2');

        let firstNum = paragraphFirst.textContent;
        let secondNum = paragraphSecond.textContent;

        let sum = Number(firstNum) + Number(secondNum);

        console.log(sum);

    }
}

//elementText3();

//--------------

//THEORY #16
function elementText4() {
    let button = document.querySelector('.dom16-btn');
    button.addEventListener('click', findSum);

    function findSum() {
        let paragraphFirst = document.querySelector('.dom16-number_first');
        let paragraphSecond = document.querySelector('.dom16-number_second');
        let paragraphThird = document.querySelector('.dom16-number_third');

        let firstNum = paragraphFirst.textContent;
        let secondNum = paragraphSecond.textContent;
        let thirdNum = paragraphThird.textContent;
        let sum = Number(firstNum) + Number(secondNum) + Number(thirdNum);

        let showSum = document.querySelector('.block');
        showSum.textContent = sum.toString();
        //showSum.append(sum.toString());
    }
}

//elementText4();

//--------------

//THEORY #17
function elementText5() {
    let button = document.querySelector('.dom17-button');
    button.addEventListener('click', addOne);

    function addOne() {
        let findNumber = document.querySelector('#dom17-elem');
        let isNumber = findNumber.textContent;
        let sum = Number(isNumber) + 1;
        findNumber.textContent = sum.toString();
    }
}

//elementText5();

//--------------

//THEORY #18
function elementText6() {
    let button = document.querySelector('#dom18-button');
    button.addEventListener('click', addElement);

    function addElement() {
        let element = document.querySelector('#dom18-elem');
        element.textContent = element.textContent + '!';
    }
}

//elementText6();

//--------------

//THEORY #19
function elementHTML1() {
    let button = document.querySelector('#dom19-button');
    button.addEventListener('click', readParagraph);

    function readParagraph() {
        let paragraph = document.querySelector('#dom19-elem');
        console.log(paragraph.innerHTML);
    }
}

//elementHTML1();

//--------------

//THEORY #20
function elementHTML2() {
    let button = document.querySelector('#dom20-button');
    button.addEventListener('click', changeParagraph);

    function changeParagraph() {
        let paragraph = document.querySelector('#dom20-elem');
        paragraph.innerHTML = '<b>Hey, hey! Your texts are bold.</b>';
    }
}

//elementHTML2();

//--------------

//THEORY #21
function attributesViaProperties1() {
    let button = document.querySelector('#dom21-button');
    button.addEventListener('click', showTypeAttribute);

    function showTypeAttribute() {
        let elem = document.querySelector('#dom21-elem');
        console.log(elem.type);
    }
}

//attributesViaProperties1();

//--------------

//THEORY #22
function attributesViaProperties2() {
    let button = document.querySelector('#dom22-button');
    button.addEventListener('click', changeTypeAttribute);

    function changeTypeAttribute() {
        let elem = document.querySelector('#dom22-elem');
        elem.type = 'submit';
        console.log(elem.type);
    }
}

//attributesViaProperties2();

//--------------

//THEORY #23
function attributesViaProperties3() {
    let button = document.querySelector('#dom23-link_btn');
    button.addEventListener('click', showTypeAttribute);

    function showTypeAttribute() {
        let elem = document.querySelector('#dom23-portfolio_link');
        let paragraph = document.querySelector('#dom23-text');
        paragraph.textContent = elem.href;
    }
}

//attributesViaProperties3();

//--------------

//THEORY #24
function attributesViaProperties4() {
    let button = document.querySelector('#dom24-link_btn');
    button.addEventListener('click', addHref);

    function addHref() {
        let elem = document.querySelector('#dom24-portfolio_link');
        elem.textContent += ' (https://anastasia.grinkevi.ch/)';
    }
}

//attributesViaProperties4();

//--------------

//THEORY #25
function attributesViaProperties5() {
    let button = document.querySelector('#dom25-button');
    button.addEventListener('click', findWayToImg);

    function findWayToImg() {
        let image = document.querySelector('#dom25-img');
        let paragraph = document.querySelector('.dom25-text');
        paragraph.textContent = image.src;
    }
}

//attributesViaProperties5();

//--------------

//THEORY #26
function attributesViaProperties6() {
    let button = document.querySelector('#dom26-button');
    button.addEventListener('click', updateWidth);

    function updateWidth() {
        let image = document.querySelector('#dom26-img');
        image.width = '250';
    }
}

attributesViaProperties6();

//--------------

//THEORY #27
function attributesViaProperties7() {
    let isButton = document.querySelector('#dom27-button');
    isButton.addEventListener('click', increaseWidthImg);

    function increaseWidthImg() {
        let isImage = document.querySelector('#dom27-img');
        isImage.width = Number(isImage.width) / 2;
    }
}

//attributesViaProperties7();

//--------------

//THEORY #28
function attributesViaProperties8() {
    let firstButton = document.querySelector('#dom28-support_btn');
    let secondButton = document.querySelector('#dom28-meeting_btn');
    firstButton.addEventListener('click', fundFirstToHolder);
    secondButton.addEventListener('click', fundSecondToHolder);

    function fundFirstToHolder() {
        let firstAttribute = document.querySelector('#dom28-img_support');
        let firstParagraph = document.querySelector('.dom28-first_text');
        firstParagraph.textContent = firstAttribute.src;
    }

    function fundSecondToHolder() {
        let secondAttribute = document.querySelector('#dom28-img_meeting');
        let secondParagraph = document.querySelector('.dom28-second_text');
        secondParagraph.textContent = secondAttribute.src;
    }
}

//attributesViaProperties8();

//--------------

//THEORY #29
function textFields1() {
    let button = document.querySelector('#dom29-btn');
    button.addEventListener('click', changeText);

    function changeText() {
        let elem = document.querySelector('#dom29-elem');
        elem.value = 'Your email';
    }
}

//textFields1();

//--------------

//THEORY #30
function textFields2() {
    let button = document.querySelector('#dom30-btn');
    button.addEventListener('click', duplicateText);

    function duplicateText() {
        let input = document.querySelector('#dom30-input');
        let paragraph = document.querySelector('#dom30-text');
        paragraph.textContent = input.value;
    }
}

//textFields2();

//--------------

//THEORY #31
function textFields3() {
    let button = document.querySelector('#dom31-btn');
    button.addEventListener('click', findSquare);

    function findSquare() {
        let inputNumber = document.querySelector('#dom31-number_input');
        let getSquare = Number(inputNumber.value) ** 2;
        let result = document.querySelector('#dom31-text');
        result.value = getSquare.toString();
    }
}

//textFields3();

//--------------

//THEORY #32
function textFields4() {
    let button = document.querySelector('#dom32-btn');
    button.addEventListener('click', changeValue);

    function changeValue() {
        let firstInput = document.querySelector('#dom32-input_first');
        let secondInput = document.querySelector('#dom32-input_second');
        let firstValue = firstInput.value;
        firstInput.value = secondInput.value;
        secondInput.value = firstValue;
    }
}

//textFields4();

//--------------

//THEORY #33
function textFields5() {
    let button = document.querySelector('#dom33-btn');
    button.addEventListener('click', findMean);

    function findMean() {
        let firstInput = document.querySelector('#dom33-input_first');
        let secondInput = document.querySelector('#dom33-input_second');
        let thirdInput = document.querySelector('#dom33-input_third');
        let fourthInput = document.querySelector('#dom33-input_fourth');
        let fifthInput = document.querySelector('#dom33-input_fifth');
        let result = (Number(firstInput.value) + Number(secondInput.value) + Number(thirdInput.value) + Number(fourthInput.value) + Number(fifthInput.value)) / 5;
        let paragraph = document.querySelector('#result');
        paragraph.textContent = result.toString();
    }
}

//textFields5();

//--------------

//THEORY #34
function textFieldsFocus1() {
    let elem = document.querySelector('#dom34-text');
    elem.addEventListener('focus', function () {
        console.log(elem.value);
    });
}

//textFieldsFocus1();

//--------------

//THEORY #35
function textFieldsFocus2() {
    let elem = document.querySelector('#dom35-text');

    elem.addEventListener('focus', function () {
        elem.value = 1;
    });

    elem.addEventListener('blur', function () {
        elem.value = 2;
    });
}

//textFieldsFocus2();

//--------------

//THEORY #36
function textFieldsFocus3() {
    let elem = document.querySelector('#dom36-number_input');

    elem.addEventListener('focus', function () {
        elem.value = '';
    });

    elem.addEventListener('blur', function () {
        let square = Number(elem.value) ** 2;
        elem.value = square.toString();
    });
}

//textFieldsFocus3();

//--------------

//THEORY #37
function textFieldsFocus4() {
    let elem = document.querySelector('#dom37-text_input');
    elem.addEventListener('focus', function () {
        elem.value = '';
    });
}

//textFieldsFocus4();

//--------------

//THEORY #38
function exceptionAttributes1() {
    let button = document.querySelector('#dom38-btn');
    button.addEventListener('click', getClassName);

    function getClassName() {
        let elem = document.querySelector('.dom38-text');
        console.log(elem.className);
    }
}

//exceptionAttributes1();

//--------------

//THEORY #39
function exceptionAttributes2() {
    let button = document.querySelector('#dom39-btn');
    button.addEventListener('click', addAttribute);

    function addAttribute() {
        let elem = document.querySelector('#dom39-elem');
        elem.className = 'style-block';
        console.log(elem);
    }
}

//exceptionAttributes2();

//--------------

//THEORY #40
function exceptionAttributes3() {
    let button = document.querySelector('#dom40-btn');
    button.addEventListener('click', getArrClass);

    function getArrClass() {
        let elem = document.querySelector('#dom40-elem');
        console.log(elem.className.split(' '));
    }
}

//exceptionAttributes3();

//--------------

//THEORY #41
function chaining1() {
    let image = document.querySelector('.dom41-img').src;
    console.log(image);
}

//chaining1();

//--------------

//THEORY #42
function this1() {
    let input = document.querySelector('#dom42-elem');
    input.addEventListener('focus', function () {
        this.value = '1';
    });
    input.addEventListener('blur', function () {
        this.value = '2';
    });
}

//this1();

//--------------

//THEORY #43
function this2() {
    let button = document.querySelector('#dom43-btn');
    button.addEventListener('click', changeValue);

    function changeValue() {
        this.value++;
        console.log(this.value);
    }
}

//this2();

//--------------

//THEORY #44
function thisAdvantage1() {
    let firstParagraph = document.querySelector('.www');
    let secondParagraph = document.querySelector('.www-2');
    let thirdParagraph = document.querySelector('#elem4');
    let fourthParagraph = document.querySelector('#elem5');
    let fifthParagraph = document.querySelector('#elem6');

    firstParagraph.addEventListener('click', func);
    secondParagraph.addEventListener('click', func);
    thirdParagraph.addEventListener('click', func);
    fourthParagraph.addEventListener('click', func);
    fifthParagraph.addEventListener('click', func);

    function func() {
        this.textContent = this.textContent + '!';
    }
}

//thisAdvantage1();

//--------------

//THEORY #41
function thisAdvantage2() {
    let firstInput = document.querySelector('#first-input');
    let secondInput = document.querySelector('#second-input');
    let thirdInput = document.querySelector('#third-input');
    let fourthInput = document.querySelector('#fourth-input');
    let fifthInput = document.querySelector('#fifth-input');

    firstInput.addEventListener('blur', findSquare);
    secondInput.addEventListener('blur', findSquare);
    thirdInput.addEventListener('blur', findSquare);
    fourthInput.addEventListener('blur', findSquare);
    fifthInput.addEventListener('blur', findSquare);

    function findSquare() {
        this.value = this.value ** 2;
    }
}

//thisAdvantage2();

//--------------

//THEORY #41
function elementsGroupGetting1() {
    let isButton = document.querySelector('#button4');
    isButton.addEventListener('click', findParagraphs);

    function findParagraphs() {
        let allParagraphs = document.querySelectorAll('.www');
        for (let elem of allParagraphs) {
            elem.textContent = 'text';
        }
    }
}

//elementsGroupGetting1();

//--------------

//THEORY #41
function elementsGroupGetting2() {
    let isButton = document.querySelector('#button4');
    isButton.addEventListener('click', findIndex);

    function findIndex() {
        let allParagraphs = document.querySelectorAll('.www');
        for (let i = 0; i < allParagraphs.length; i++) {
            allParagraphs[i].textContent = allParagraphs[i].textContent + ` ${i} is the index in loop`;
        }
    }
}

//elementsGroupGetting2();

//--------------

//THEORY #41
function elementsGroupGetting3() {
    let isButton = document.querySelector('#mean-btn');
    isButton.addEventListener('click', findSum);

    function findSum() {
        let findClasses = document.querySelectorAll('.find-sum');
        let result = document.querySelector('#result');
        let sum = 0;
        for (let i = 0; i < findClasses.length; i++) {
            sum += Number(findClasses[i].value);
            result.textContent = sum.toString();
        }
    }
}

//elementsGroupGetting3();

//--------------

//THEORY #41
function loopNamedHandlers1() {
    let isInputs = document.querySelectorAll('.find-sum');
    for (let i = 0; i < isInputs.length; i++) {
        isInputs[i].addEventListener('blur', func);
    }

    function func() {
        this.value = Number(this.value) + 1;
    }
}

//loopNamedHandlers1();

//--------------

//THEORY #41
function loopNamedHandlers2() {
    let isParagraph = document.querySelectorAll('.block p');
    for (let i = 0; i < isParagraph.length; i++) {
        isParagraph[i].addEventListener('click', findSquare);
    }

    function findSquare() {
        this.textContent = this.textContent ** 2;
    }
}

//loopNamedHandlers2();

//--------------

//THEORY #41
function loopAnonymousHandlers() {
    let divs = document.querySelectorAll('div');

    for (let div of divs) {
        div.addEventListener('click', function () {
            this.textContent++;
        });
    }
}

//loopAnonymousHandlers();

//--------------

//THEORY #41
function handlersUnbinding1() {
    let isButton = document.querySelector('#link-btn');
    isButton.addEventListener('click', addHref);

    function addHref() {
        let isLink = document.querySelector('#portfolio-link');
        isLink.textContent = isLink.textContent + ` (${isLink.href})`;
        this.removeEventListener('click', addHref);
    }
}

//handlersUnbinding1();

//--------------

//THEORY #41
function handlersUnbinding2() {
    let isButton = document.querySelector('#button6');
    isButton.addEventListener('click', addNumbers);

    function addNumbers() {
        isButton.value++;
        if (this.value === '10') {
            this.removeEventListener('click', addNumbers);
        }
    }
}

//handlersUnbinding2();

//--------------

//THEORY #41
function loopHandlersUnbinding() {
    let isParagraph = document.querySelectorAll('.www');
    for (let i = 0; i < isParagraph.length; i++) {
        isParagraph[i].addEventListener('click', addText);
    }

    function addText() {
        this.textContent = this.textContent + '!';
        this.removeEventListener('click', addText);
    }
}

//loopHandlersUnbinding();

//--------------

//THEORY #41
function anonymousHandlersUnbinding1() {
    let isList = document.querySelectorAll('.list li');
    for (let i = 0; i < isList.length; i++) {
        isList[i].addEventListener('click', function addNumber() {
            isList[i].textContent++;
            this.removeEventListener('click', addNumber);
        });
    }
}

//anonymousHandlersUnbinding1();

//--------------

//THEORY #41
function anonymousHandlersUnbinding2() {
    let isList = document.querySelectorAll('.list li');
    for (let i = 0; i < isList.length; i++) {
        isList[i].addEventListener('click', function addNumber() {
            if (isList[i].textContent < 10) {
                isList[i].textContent++;
                this.removeEventListener('click', addNumber);
            }
        });
    }
}

//anonymousHandlersUnbinding2();

//--------------

//THEORY #41
function attributesViaMethods1() {
    let isValue = document.querySelector('#text-input');
    isValue.getAttribute('value');
}

//attributesViaMethods1();

//--------------

//THEORY #41
function attributesViaMethods2() {
    let isClass = document.querySelector('#elem-arr');
    isClass.getAttribute('class');
}

//attributesViaMethods2();

//--------------

//THEORY #41
function attributesViaMethods3() {
    let isParagraph = document.querySelector('#elem1');
    isParagraph.setAttribute('value', 'text');
}

//attributesViaMethods3();

//--------------

//THEORY #41
function attributesViaMethods4() {
    let isParagraph = document.querySelector('#elem1');
    isParagraph.setAttribute('class', 'valid');
}

//attributesViaMethods4();

//--------------

//THEORY #41
function attributesViaMethods5() {
    let isBlock = document.querySelector('#elem-arr');
    isBlock.removeAttribute('class');
}

//attributesViaMethods5();

//--------------

function attributesViaMethods6() {
    let isInput = document.querySelector('#button1');
    isInput.hasAttribute('type');
}

//attributesViaMethods6();

//--------------

function cssClassesManipulation1() {
    let isClass = document.querySelector('#elem-arr');
    isClass.classList.length;
}

//cssClassesManipulation1();

//--------------

function cssClassesManipulation2() {
    let isClass = document.querySelector('#elem-arr');
    for (let i = 0; i < isClass.classList.length; i++) {
        console.log(isClass.classList[i]);
    }
}

//cssClassesManipulation2();

//--------------

function cssClassesManipulation3() {
    let getClasses = document.querySelector('#elem-arr');
    getClasses.classList.add('xxx');
}

//cssClassesManipulation3();

//--------------

function cssClassesManipulation4() {
    let getClasses = document.querySelector('#elem-arr');
    getClasses.classList.remove('bbb');
}

//cssClassesManipulation4();

//--------------

function cssClassesManipulation5() {
    let getClasses = document.querySelector('#elem-arr');
    getClasses.classList.contains('aaa');
}

//cssClassesManipulation5();

//--------------

function cssClassesManipulation6() {
    let getClasses = document.querySelector('#elem-arr');
    getClasses.classList.toggle('www');
}

//cssClassesManipulation6();

//--------------

function attributeStyleStylization1() {
    let isButton = document.querySelector('#img-btn');
    isButton.addEventListener('click', changeSize);

    function changeSize() {
        let isBox = document.querySelector('#size-box');
        isBox.style.width = '500px';
        isBox.style.height = '500px';
        isBox.style.backgroundColor = 'green';
    }
}

//attributeStyleStylization1();

//--------------

function attributeStyleStylization2() {
    let isButton = document.querySelector('.btn-sum');
    isButton.addEventListener('click', addStyles);

    function addStyles() {
        let isElem = document.querySelector('.block');
        isElem.style.fontSize = '20px';
        isElem.style.marginTop = '1rem';
        isElem.style.backgroundColor = 'green';
    }
}

//attributeStyleStylization2();

//--------------

function attributeStyleStylization3() {
    let isButton = document.querySelector('#list-btn');
    isButton.addEventListener('click', floatList);

    function floatList() {
        let isLists = document.querySelectorAll('li');
        for (let i = 0; i < isLists.length; i++) {
            isLists[i].style.cssFloat = 'left';
            isLists[i].style.margin = '5px';
            isLists[i].style.listStyle = 'none';
        }
    }
}

//attributeStyleStylization3();

//--------------

function cssStylization1() {
    let isButtonFirst = document.querySelector('#mark-text');
    isButtonFirst.addEventListener('click', function markText() {
        let isTextMark = document.querySelector('#styling');
        isTextMark.classList.toggle('mark-text');
        isTextMark.removeEventListener('click', markText);
    });

    let isButtonSecond = document.querySelector('#bold-text');
    isButtonSecond.addEventListener('click', function boldText() {
        let isTextBold = document.querySelector('#styling');
        isTextBold.classList.toggle('bold-text');
        isTextBold.removeEventListener('click', boldText);
    });

    let isButtonThird = document.querySelector('#red-text');
    isButtonThird.addEventListener('click', function coloredText() {
        let isTextColored = document.querySelector('#styling');
        isTextColored.classList.toggle('colored');
        isTextColored.removeEventListener('click', coloredText);
    });
}

//cssStylization1();

//--------------

function cssStylization2() {
    let isButton = document.querySelector('#button');
    let isElem = document.querySelector('#elem-hiding');

    isButton.addEventListener('click', function () {
        isElem.classList.toggle('active');
    });
}

//cssStylization2();

//--------------

function parentRelationshipSearching1() {
    let isElem = document.querySelector('.list');
    isElem.firstElementChild.classList.add('colored');
}

//parentRelationshipSearching1();

//--------------

function parentRelationshipSearching2() {
    let isElem = document.querySelector('.list');
    isElem.lastElementChild.classList.add('colored');
}

//parentRelationshipSearching2();

//--------------

function parentRelationshipSearching3() {
    let isElem = document.querySelector('.list');
    let childElements = isElem.children;

    for (let i = 0; i < childElements.length; i++) {
        childElements[i].textContent = childElements[i].textContent + '!';
    }
}

//parentRelationshipSearching3();

//--------------

function parentRelationshipSearching4() {
    let elem = document.querySelector('#elem-text');
    elem.parentElement.classList.add('border');
}

//parentRelationshipSearching4();

//--------------

function parentRelationshipSearching5() {
    let getElem = document.querySelector('#elem-header');
    console.log(getElem.closest('div'));
}

//parentRelationshipSearching5();

//--------------

function parentRelationshipSearching6() {
    let getElem = document.querySelector('#elem-header');
    console.log(getElem.closest('.www'));
}

//parentRelationshipSearching6();

//--------------

function parentRelationshipSearching7() {
    let findSibling = document.querySelector('#elem-text');
    findSibling.previousElementSibling.textContent = findSibling.previousElementSibling.textContent + '!';
}

//parentRelationshipSearching7();

//--------------

function parentRelationshipSearching8() {
    let findSibling = document.querySelector('#elem-text');
    findSibling.nextElementSibling.textContent = findSibling.nextElementSibling.textContent + '!';
}

//parentRelationshipSearching8();

//--------------

function parentRelationshipSearching9() {
    let isElem = document.querySelector('#elem-text');
    let findSibling = isElem.nextElementSibling;
    findSibling.nextElementSibling.textContent = findSibling.nextElementSibling.textContent + '!';
}

//parentRelationshipSearching9();

//--------------

function parentRelationshipSearching10() {
    let isChild = document.querySelector('#elem-text');
    let previousChild = isChild.previousElementSibling;
    let nextChild = isChild.nextElementSibling;
    let a = previousChild.textContent;
    let b = nextChild.textContent;
    nextChild.textContent = a;
    previousChild.textContent = b;
}

//parentRelationshipSearching10();

//--------------

function otherSearchMethods1() {
    let getElem = document.getElementById('elem-header');
    getElem.textContent = 'Hello there!';
}

//otherSearchMethods1();

//--------------

function otherSearchMethods2() {
    let findList = document.getElementsByTagName('li');
    for (let i = 0; i < findList.length; i++) {
        findList[i].classList.add('colored');
    }
}

//otherSearchMethods2();

//--------------

function otherSearchMethods3() {
    let getClasses = document.getElementsByClassName('www');
    for (let i = 0; i < getClasses.length; i++) {
        getClasses[i].classList.add('colored');
    }
}

//otherSearchMethods3();

//--------------

function insideElementSearching() {
    let parent = document.querySelector('#parent');
    let elem1 = parent.querySelectorAll('.xxx');
    let elem2 = parent.querySelectorAll('.ggg');

    console.log(elem1, elem2);
}

//insideElementSearching();

//--------------

function dataAttribute1() {
    let isBlock = document.getElementById('data-attribute');
    isBlock.addEventListener('click', function addText() {
        isBlock.textContent = isBlock.textContent + ` ${isBlock.dataset.text}`;
        this.removeEventListener('click', addText);
    });
}

//dataAttribute1();

//--------------

function dataAttribute2() {
    let getList = document.querySelectorAll('.list li');
    for (let i = 0; i < getList.length; i++) {
        getList[i].addEventListener('click', function addIndex() {
            this.textContent = this.textContent + `: ${this.dataset.num}`;
            this.removeEventListener('click', addIndex);
        });
    }
}

dataAttribute2();

//--------------

function dataAttribute3() {
    let isButton = document.getElementById('button5');
    let getButton = document.getElementById('button6');
    isButton.addEventListener('click', function countClick() {
        isButton.dataset.click++;
        getButton.value = isButton.dataset.click;
    });
}

//dataAttribute3();

//--------------

function dataAttribute4() {
    let isInput = document.getElementById('elem');
    isInput.addEventListener('blur', function getText() {
        if (isInput.id.length.toString() !== isInput.dataset.length) {
            isInput.value = 'Doesn\'t match the specified one';
        }
    });
}

//dataAttribute4();

//--------------

function dataAttribute5() {
    let getInput = document.getElementById('elem-data');
    getInput.addEventListener('blur', function getText() {
        if (getInput.id.length.toString() > getInput.dataset.min && getInput.id.length.toString() < getInput.dataset.max) {
            getInput.value = 'Doesn\'t match the specified one';
        } else {
            getInput.value = 'Does match the specified one';
        }
    });
}

//dataAttribute5();

//--------------

function dataAttribute6() {
    let isBlock = document.getElementById('elem-data');
    isBlock.addEventListener('click', function totalItem() {
        let total = Number(isBlock.dataset.productPrice) * Number(isBlock.dataset.productAmount);
        isBlock.textContent = `${isBlock.textContent} - their price: ${total}`;
    });
}

//dataAttribute6();

//--------------

function dataAttribute7() {
    let getElem = document.querySelectorAll('.www');
    for (let i = 0; i < getElem.length; i++) {
        getElem[i].setAttribute('data-num', `${i}`);
    }
}

//dataAttribute7();

//--------------

function nodes1() {
    let elem = document.getElementById('elem-childnodes');
    console.log(elem.firstChild);
    console.log(elem.firstElementChild);
}

//nodes1();

//--------------

function nodes2() {
    let elem = document.querySelector('b');
    console.log(elem.nextSibling);
    console.log(elem.nextElementSibling);
}

//nodes2();

//--------------

function nodes3() {
    let elem = document.querySelector('b');
    console.log(elem.previousSibling);
    console.log(elem.previousElementSibling);
}

//nodes3();

//--------------

function nodes4() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        console.log(node);
    }
}

//nodes4();

//--------------

function nodes5() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        console.log(node.nodeName);
    }
}

//nodes5();

//--------------

function nodes6() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        console.log(node.TEXT_NODE, node.ELEMENT_NODE);
    }
}

//nodes6();

//--------------

function nodes7() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        console.log(node.textContent);
    }
}

//nodes7();

//--------------

function nodes8() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        console.log(node.data);
    }
}

//nodes8();

//--------------

function nodes9() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let node of getElem.childNodes) {
        if (node.nodeType === 3 || node.nodeType === 1)
            console.log(node.textContent);
    }
}

//nodes9();

//--------------

function nodes10() {
    let getElem = document.querySelector('#elem-childnodes');
    for (let i = 0; i < getElem.childNodes.length; i++) {
        getElem.childNodes[i].textContent = getElem.childNodes[i].textContent + ` - ${getElem.childNodes[i].nodeType} `;
    }
}

//nodes10();

//--------------

function nodes11() {
    let getElem = document.querySelector('#elem-childnodes');
    getElem.removeChild(getElem.childNodes[3]);
}

//nodes11();

//--------------

function coding1() {
    let getElem = document.querySelectorAll('.list-years li');
    let sumYears = 0;
    for (let i = 0; i < getElem.length; i++) {
        let separateSmallArrs = getElem[i].textContent.split('');

        //after splitting, moved on every element in arr and find their sum.
        function findSumEveryNumber(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += Number(arr[i]);
            }
            return sum;
        }

        let sumEveryArr = findSumEveryNumber(separateSmallArrs);

        //comparing sum of every arr with 6 and get years
        function getResultYears(sumArr) {
            let result = '';
            if (sumArr === 6) {
                result = Number(separateSmallArrs.join(''));
            }
            return result;
        }

        let resultYears = getResultYears(sumEveryArr);
        sumYears += Number(resultYears);
    }
    console.log(sumYears);
}

//coding1();

//--------------

//how to make your code readable:
function coding2() {
    //after splitting, moved on every element in arr and find their sum.
    function getDigitsSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }
        return sum;
    }

    let getElem = document.querySelectorAll('.list-years li');
    let sumYears = 0;
    for (let i = 0; i < getElem.length; i++) {
        let yearDigits = getElem[i].textContent.split('');

        //comparing sum of every arr with 6 and get years
        if (getDigitsSum(yearDigits) === 6) {
            sumYears += Number(yearDigits.join(''));
        }
    }

    console.log(sumYears);
}

//coding2();

//--------------

//learning with mentor
function coding3() {
    function getDigitsSum(number = '') {
        let sum = 0;
        // adding "toString" so that getDigitsSum can work with numbers and strings parameter
        // and splitting string to individual chars
        number = number.toString().split('');

        // walk through the number digits and add them to sum
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }

        return sum;
    }

    function getSumYears(years) {
        let sumYears = 0;

        // walk through all years listed
        for (let i = 0; i < years.length; i++) {
            // extract year as text from DOM element
            let year = years[i].textContent;

            // check if sum of year digits is equal to six, then add this year to overall sum
            if (getDigitsSum(year) === 6) {
                sumYears += Number(year);
            }
        }

        return sumYears;
    }

    let years = document.querySelectorAll('.list-years li');
    console.log(getSumYears(years));
}

//coding3();

//--------------

function findMistakes1() {
    let elems = document.querySelectorAll('#find-mistakes p');
    for (let i = 0; i < elems.length; i++) {
        elems[i].textContent += '!';
    }
}

//findMistakes1();

//--------------

function findMistakes2() {
    let elems = document.querySelectorAll('#find-mistakes p');

    for (let elem of elems) {
        elem.addEventListener('click', function () {
            this.textContent = Number(this.textContent) + 1;
        });
    }
}

//findMistakes2();

//--------------

function findMistakes3() {
    let button = document.querySelector('#find-mistakes button');
    let elem = document.querySelector('#bold');

    button.addEventListener('click', function () {
        elem.innerHTML = '<b>text</b>';
    });
}

//findMistakes3();

//--------------

function findMistakes4() {
    let button = document.querySelector('#find-mistakes button');
    let elems = document.querySelectorAll('#find-mistakes p');

    button.addEventListener('click', function () {
        let sum = 0;
        for (let elem of elems) {
            sum += Number(elem.textContent);
        }
        console.log(sum);
    });
}

//findMistakes4();

//--------------

function findMistakes5() {
    let elems = document.querySelectorAll('#find-mistakes p');

    for (let elem of elems) {
        elem.addEventListener('click', () => {
            elem.textContent += '!';
        });
    }
}

//findMistakes5();

//--------------

function findMistakes6() {
    let button = document.querySelector('#find-mistakes button');
    let elems = document.querySelectorAll('#find-mistakes span');

    button.addEventListener('click', function () {
        for (let elem of elems) {
            elem.innerHTML = `<b>${elem.innerHTML}</b>`;
        }
    });
}

//findMistakes6();

//--------------

function findMistakes7() {
    let button = document.querySelector('#find-mistakes button');
    let elems = document.querySelectorAll('#find-mistakes p');
    let sum = 0;

    for (let elem of elems) {
        sum += Number(elem.textContent);

        button.addEventListener('click', function () {
            console.log(sum);
        });
    }
}

//findMistakes7();

//--------------

function findMistakes8() {
    let button = document.querySelector('#find-mistakes button');
    let elems = document.querySelectorAll('#find-mistakes input');
    button.addEventListener('click', function () {
        let sum = 0;
        for (let elem of elems) {
            sum += Number(elem.value);
        }
        console.log(sum);
    });
}

//findMistakes8();

//--------------

function findMistakes9() {
    let btn = document.querySelector('#find-mistakes button');
    let inp1 = document.querySelector('#inp1');
    let inp2 = document.querySelector('#inp2');
    let inp3 = document.querySelector('#inp3');

    btn.addEventListener('click', function () {
        inp3.value = Number(inp1.value) + Number(inp2.value);
    });
}

//findMistakes9();

//--------------

function findMistakes10() {
    let btn = document.querySelector('#find-mistakes button');
    let res = document.querySelector('#bold');
    let inp1 = document.querySelector('#inp1');
    let inp2 = document.querySelector('#inp2');

    btn.addEventListener('click', function () {
        let sum = Number(inp1.value) + Number(inp2.value);
        res.textContent = sum.toString();
    });
}

//findMistakes10();

//--------------

function findMistakes11() {
    let button = document.querySelector('#find-mistakes button');
    let inputs = document.querySelectorAll('#find-mistakes input');

    button.addEventListener('click', function () {
        for (let input of inputs) {
            if (input.value === input.dataset.text) {
                input.classList.add('right');
            } else {
                input.classList.add('wrong');
            }
        }
    });
}

//findMistakes11();

//--------------

function findMistakes12() {
    let button = document.querySelector('#find-mistakes button');
    let inputs = document.querySelectorAll('#find-mistakes input');

    let texts = ['text1', 'text2', 'text3'];

    button.addEventListener('click', function () {
        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j < texts.length; j++) {
                if (inputs[i].value === texts[j]) {
                    inputs[i].classList.add('right');
                    break;
                } else {
                    inputs[i].classList.add('wrong');
                }
            }
        }
    });
}

findMistakes12();

//--------------

function findMistakes13() {
    let inputs = document.querySelectorAll('#find-mistakes input');
    let btn = document.querySelector('#find-mistakes button');

    btn.addEventListener('click', function () {
        let sum = 0;
        for (let input of inputs) {
            sum += Number(input.value);
        }
        console.log(sum);
    });
}

//findMistakes13();

//--------------

function findMistakes14() {
    let btn = document.querySelector('#find-mistakes button');
    let inp1 = document.querySelector('#inp1');
    let inp2 = document.querySelector('#inp2');
    let inp3 = document.querySelector('#inp3');

    btn.addEventListener('click', function () {
        let sum = Number(inp1.value) + Number(inp2.value);
        inp3.value = sum;
    });
}

//findMistakes14();

//--------------

function findMistakes15() {
    let input = document.querySelector('#inp1');

    input.addEventListener('blur', function () {
        let digits = input.value.split('');
        let sum = 0;

        for (let digit of digits) {
            sum += Number(digit);
        }

        console.log(sum);
    });
}

//findMistakes15();

//--------------

function practicum1() {
    let input = document.getElementById('elem');
    input.addEventListener('blur', getValue);

    function getValue() {
        let paragraph = document.getElementById('addElem');
        paragraph.textContent = paragraph.textContent + `: his value is ${input.value}`;
    }
}

//practicum1();

//--------------

function practicum2() {

    function updateParSum() {
        let inputs = document.querySelectorAll('#numbers input'); // найди все элементы типа инпут относительно this на том же уровне
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += Number(inputs[i].value);
        }
        let paragraph = document.getElementById('result');
        paragraph.textContent = `The sum of numbers: ${sum}`;
    }

    let button = document.getElementById('mean-btn');
    button.addEventListener('click', updateParSum);
}

//practicum2();

//--------------

function practicum3() {
    function getDigitSum() {
        let digits = input.value.split('');
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i]);
        }
        this.value = sum;
    }

    let input = document.getElementById('number-input');
    input.addEventListener('blur', getDigitSum);
}

//practicum3();

//--------------

function practicum4() {
    function getMean() {
        let digits = input.value.split(',');
        let sum = 0;
        let mean = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i]);
            mean = sum / Number(digits.length);
        }
        this.value = mean;
    }

    let input = document.getElementById('text-field');
    input.addEventListener('blur', getMean);
}

//practicum4();


//--------------

function practicum5() {
    let input = document.getElementById('text-full_name');
    input.addEventListener('blur', getNames);

    function getNames() {
        let nameParts = input.value.split(' ');
        let classes = document.querySelectorAll('.name');
        for (let i = 0; i < nameParts.length; i++) {
            classes[i].value = nameParts[i];
        }
    }

    //or we can leave code like this because we only have 2 inputs
    function getNames_1() {
        let nameParts = input.value.split(' ');
        for (let i = 0; i < nameParts.length; i++) {
            document.getElementById('text-first_name').value = nameParts[0];
            document.getElementById('text-last_name').value = nameParts[1];
        }
    }
}

//practicum5();

//--------------

function practicum6() {
    let input = document.getElementById('text-full_name');
    input.addEventListener('blur', setUpperCase);

    function setUpperCase() {
        let nameParts = input.value.split(' ');
        for (let i = 0; i < nameParts.length; i++) {
            nameParts[i] = nameParts[i].split('');
            nameParts[i][0] = nameParts[i][0].toUpperCase();
            nameParts[i] = nameParts[i].join('');
        }
        input.value = nameParts.join(' ');
    }
}

//practicum6();

//--------------

function practicum7() {
    let input = document.getElementById('text-full_name');
    input.addEventListener('blur', getLength);

    function getLength() {
        let worldParts = input.value.split(' ');
        for (let i = 0; i < worldParts.length; i++) {
            input.value = worldParts.length;
        }
    }
}

//practicum7();

//--------------

function practicum8() {
    let input = document.getElementById('text-full_name');
    input.addEventListener('blur', reverseDate);

    function reverseDate() {
        let getDigits = input.value.split('.').reverse().join('-');
        input.value = getDigits;
    }
}

//practicum8();

//--------------

function practicum9() {
    let button = document.getElementById('square');
    button.addEventListener('click', getSameWord);

    function getSameWord() {
        let input = document.getElementById('text-field');
        let reverseWord = input.value.split('').reverse().join('');
        input.value = input.value === reverseWord;
    }
}

//practicum9();

//--------------
function practicum10() {
    let input = document.getElementById('number-input');
    input.addEventListener('blur', getNumber);

    function getNumber() {
        let digits = input.value.split('');
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] === '3') {
                alert('This number has 3');
                break;
            }
        }
    }
}

//practicum10();

//--------------

function practicum11() {
    let button = document.querySelector('.btn-sum');
    button.addEventListener('click', getIndexs);

    function getIndexs() {
        let paragraphs = document.querySelectorAll('.block p');
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent += `- its index is: ${i}`;
        }
    }
}

//practicum11();

//--------------

function practicum12() {
    let links = document.querySelectorAll('.paragraph a');
    for (let i = 0; i < links.length; i++) {
        links[i].textContent += ` (${links[i].href})`;
    }
}

//practicum12();

//--------------
function practicum13() {
    let links = document.querySelectorAll('.paragraph a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('https://') === 0) {
            links[i].innerHTML += '&rarr;';
        }
    }
}

//practicum13();

//--------------

function practicum14() {
    let paragraphs = document.querySelectorAll('.block p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', countSquare);
    }

    function countSquare() {
        this.textContent = Number(this.textContent) ** 2;
    }
}

//practicum14();

//--------------

function practicum15() {
    let input = document.getElementById('elem');
    input.addEventListener('blur', getDayWeek);

    function getDayWeek() {
        let dayMonthYear = input.value.split('.').reverse().join(' ');
        let date = new Date(dayMonthYear);
        let day = date.getDay();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        input.value = days[day];
    }
}

//practicum15();

//--------------

function practicum16_1() {
    document.querySelectorAll('.p16-cls').forEach(element => element.addEventListener('click', sumNumber));

    function sumNumber() {
        let resultEl = document.getElementById('p16-input-result');
        let resultVal = Number(resultEl.value) + Number(this.value);
        resultEl.value = resultVal < 0 ? 0 : resultVal.toString();
    }
}

function practicum16_2() {
    function sumNumber(element) {
        let value = Number(element.value) + Number(this.value);
        element.value = value < 0 ? 0 : value.toString();
    }

    let result = document.getElementById('p16-input-result');
    let buttons = document.querySelectorAll('.p16-cls');
    buttons.forEach(function (element) {
        element.addEventListener('click', function () {
            sumNumber(result)
        })
    });
}

function practicum16_3() {
    let classes = document.querySelectorAll('.p16-cls');
    let input = document.getElementById('p16-input-result');
    let sum = Number(input.value);

    for (let i = 0; i < classes.length; i++) {
        classes[i].addEventListener('click', function changeNumber() {
            sum += Number(classes[i].textContent);
            if (sum >= 0) {
                input.value = sum.toString();
            } else if (sum < 0) {
                input.value = 0;
            }
        });
    }
}

//practicum16_3();

//--------------

function practicum17() {
    let input = document.getElementById('p17-input-result');
    let paragraphs = document.querySelectorAll('#p17 p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', countClick);
    }

    let count = 0;

    function countClick() {
        count++;
        input.value = count;
    }
}

//practicum17();

//--------------

function practicum18() {
    let paragraphs = document.querySelectorAll('.style-block .text-lorem');
    let str = '';
    for (let i = 0; i < paragraphs.length; i++) {
        str = paragraphs[i].textContent.slice(0, 350) + '...';
        paragraphs[i].textContent = str;
    }
}

//practicum18();

//--------------
function practicum19() {
    let input = document.getElementById('p19-input_number');
    input.addEventListener('blur', checkNumber);

    function checkNumber() {
        let inputNumber = input.value;
        inputNumber > 1 && inputNumber < 100 ? input.classList.add('right') : input.classList.add('wrong');
    }
}

//practicum19();

//--------------

function practicum20() {
    function randomSymbols() {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            input.value = result;
        }
    }

    let input = document.getElementById('p20-text');
    let button = document.getElementById('p20-button');
    button.addEventListener('click', randomSymbols);
}

//practicum20();

//--------------

function practicum21() {
    function mixLetters() {
        let arr = input.value.split('');
        for (let i = 0; i <= arr.length - 1; i++) {
            let rnd = Math.floor(Math.random() * arr.length);
            let temp = arr[rnd];
            arr[rnd] = arr[i];
            arr[i] = temp;
        }
        input.value = arr.join('');
    }

    let button = document.getElementById('p21-button');
    button.addEventListener('click', mixLetters);

    let input = document.getElementById('p21-text');
}

//practicum21();

//--------------

function practicum22() {
    let button = document.getElementById('p22-button');
    button.addEventListener('click', convertDegrees);

    function convertDegrees() {
        let input = document.getElementById('p22-text');
        let paragraph = document.getElementById('p22-paragraph');
        let value = input.value;
        paragraph.textContent = `${paragraph.textContent} ` + (Number(value) - 32) * (5 / 9);
    }
}

//practicum22();

//--------------
function practicum23() {
    function processClickEvent() {
        function factorial(n) {
            return (n !== 1) ? n * factorial(n - 1) : 1;
        }

        let value = input.value;
        paragraph.textContent += Number(value) > 1 ? ` ${Number(factorial(value))}` : 'error';
    }

    let paragraph = document.getElementById('p23-paragraph');
    let button = document.getElementById('p23-button');
    let input = document.getElementById('p23-text');

    button.addEventListener('click', processClickEvent);
}

//practicum23();

//--------------

function practicum24() {

    function calculateRoot() {
        function resultDiscriminant(num1, num2, num3) {
            return (num2 ** 2) - (4 * num1 * num3);
        }

        let inputs = document.querySelectorAll('#p24 input');
        let a = Number(inputs[0].value);
        let b = Number(inputs[1].value);
        let c = Number(inputs[2].value);
        let result = resultDiscriminant(a, b, c);
        let denom = 2 * a;
        let oneRoot = '';
        let twoRoots = '';
        if (result === 0) {
            oneRoot = (-b / denom).toFixed(2);
            paragraph.textContent += oneRoot;
        } else if (result > 0) {
            oneRoot = ((-b - Math.sqrt(result)) / denom).toFixed(2);
            twoRoots = ((-b + Math.sqrt(result)) / denom).toFixed(2);
            paragraph.textContent += ` the first root is ${oneRoot} and the second root is ${twoRoots}`;
        } else {
            paragraph.textContent += ' Equation has no roots';
        }
    }

    let button = document.getElementById('p24-button');
    let paragraph = document.getElementById('p24-paragraph');

    button.addEventListener('click', calculateRoot);

}

practicum24();

//--------------

