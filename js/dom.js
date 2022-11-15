function getElement1() {
    let paragraphFirst = document.querySelector('#elem1');
    console.log(paragraphFirst);
}

//getElement1();

//--------------

function getElement2() {
    let isParagraph = document.querySelector('#block p');
    console.log(isParagraph);
}

//getElement2();

//--------------

function getElement3() {
    let isParagraph = document.querySelector('.block p');
    console.log(isParagraph);
}

//getElement3();

//--------------

function getElement4() {
    let isParagraph = document.querySelector('.www');
    console.log(isParagraph);
}

//getElement4();

//--------------

function eventsHandlersBinding() {
    let buttonFirst = document.querySelector('#button1');
    buttonFirst.addEventListener('click', function () {
        alert(1);
    });

    let buttonSecond = document.querySelector('#button2');
    buttonSecond.addEventListener('click', function () {
        alert('Hello JavaScript!');
    });

    let buttonThird = document.querySelector('#button3');
    buttonThird.addEventListener('click', function () {
        alert('It\'s so fun to do that!');
    });
}

//eventsHandlersBinding();

//--------------

function namedEventHandlers() {
    let buttonFourth = document.querySelector('#button4');
    buttonFourth.addEventListener('click', func1);

    function func1() {
        console.log(1);
    }

    let buttonFifth = document.querySelector('#button5');
    buttonFifth.addEventListener('click', func2);

    function func2() {
        console.log(2);
    }
}

//namedEventHandlers();

//--------------

function manyElementsHandlers() {
    let isParagraphFirst = document.querySelector('#elem4');
    isParagraphFirst.addEventListener('click', func);

    let isParagraphSecond = document.querySelector('#elem5');
    isParagraphSecond.addEventListener('click', func);

    let isParagraphThird = document.querySelector('#elem6');
    isParagraphThird.addEventListener('click', func);

    let isParagraphFourth = document.querySelector('#elem7');
    isParagraphFourth.addEventListener('click', func);

    let isParagraphFifth = document.querySelector('#elem8');
    isParagraphFifth.addEventListener('click', func);

    function func() {
        console.log('You have a message');
    }
}

//manyElementsHandlers();

//--------------

function severalHandlers() {
    let isParagraph = document.querySelector('#elem1');
    isParagraph.addEventListener('click', func1);
    isParagraph.addEventListener('click', func2);
    isParagraph.addEventListener('click', func3);

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

function differentEventsHandlers1() {
    let isButton = document.querySelector('#button1');
    isButton.addEventListener('dblclick', func);

    function func() {
        alert('It was double click');
    }
}

//differentEventsHandlers1();

//--------------

function differentEventsHandlers2() {
    let isButton = document.querySelector('#button2');
    isButton.addEventListener('mouseover', func);

    function func() {
        alert('Hello there!');
    }
}

//differentEventsHandlers2();

//--------------

function differentEventsHandlers3() {
    let isButton = document.querySelector('#button3');
    isButton.addEventListener('mouseout', func);

    function func() {
        alert('See you soon!');
    }
}

//differentEventsHandlers3();

//--------------

function differentEventsHandlers4() {
    let isButton = document.querySelector('#button4');
    isButton.addEventListener('mouseover', firstMessage);
    isButton.addEventListener('mouseout', secondMessage);

    function firstMessage() {
        alert('Hello');
    }

    function secondMessage() {
        alert('Bye');
    }
}

//differentEventsHandlers4();

//--------------

function elementText1() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', textButton);

    function textButton() {
        console.log(isButton.textContent);
    }
}

//elementText1();

//--------------

function elementText2() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', changeText);

    function changeText() {
        let paragraph = document.querySelector('#elem8');
        paragraph.textContent = 'Look at this!';
    }
}

//elementText2();

//--------------

function elementText3() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', sumNumber);


    function sumNumber() {
        let paragraphFirst = document.querySelector('#elem2');
        let paragraphSecond = document.querySelector('#elem3');

        let firstNum = paragraphFirst.textContent;
        let secondNum = paragraphSecond.textContent;

        let sum = Number(firstNum) + Number(secondNum);

        console.log(sum);

    }
}

//elementText3();

//--------------

function elementText4() {
    let clickButton = document.querySelector('.block .btn-sum');
    clickButton.addEventListener('click', findSum);

    function findSum() {
        let paragraphFirst = document.querySelector('.block .first-number');
        let paragraphSecond = document.querySelector('.block .second-number');
        let paragraphThird = document.querySelector('.block .third-number');

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

function elementText5() {
    let clickButton = document.querySelector('#btn');
    clickButton.addEventListener('click', addOne);

    function addOne() {
        let findNumber = document.querySelector('#elem1');
        let isNumber = findNumber.textContent;
        let sum = Number(isNumber) + 1;
        findNumber.textContent = sum.toString();
    }
}

//elementText5();

//--------------

function elementText6() {
    let clickButton = document.querySelector('#btn');
    clickButton.addEventListener('click', addElement);

    function addElement() {
        let findElement = document.querySelector('#addElem');
        findElement.textContent = findElement.textContent + '?';
    }
}

//elementText6();

//--------------

function elementHTML1() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', readParagraph);

    function readParagraph() {
        let isParagraph = document.querySelector('#addElem');
        console.log(isParagraph.innerHTML);
    }
}

//elementHTML1();

//--------------

function elementHTML2() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', changeParagraph);

    function changeParagraph() {
        let isParagraph = document.querySelector('#addElem');
        isParagraph.innerHTML = '<b>Hey, hey! Your texts are bold.</b>';
    }
}

//elementHTML2();

//--------------

function attributesViaProperties1() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', showTypeAttribute);

    function showTypeAttribute() {
        let isElem = document.querySelector('#elem');
        console.log(isElem.type);
    }
}

//attributesViaProperties1();

//--------------

function attributesViaProperties2() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', changeTypeAttribute);

    function changeTypeAttribute() {
        let isElem = document.querySelector('#elem');
        isElem.type = 'submit';
        console.log(isElem.type);
    }
}

//attributesViaProperties2();

//--------------

function attributesViaProperties3() {
    let isButton = document.querySelector('#link-btn');
    isButton.addEventListener('click', showTypeAttribute);

    function showTypeAttribute() {
        let isElem = document.querySelector('.paragraph #portfolio-link');
        let isParagraph = document.querySelector('.paragraph');
        isParagraph.textContent = isElem.href;
    }
}

//attributesViaProperties3();

//--------------

function attributesViaProperties4() {
    let isButton = document.querySelector('#link-btn');
    isButton.addEventListener('click', addHref);

    function addHref() {
        let isElem = document.querySelector('.paragraph #portfolio-link');
        isElem.textContent = isElem.textContent + ' (https://anastasia.grinkevi.ch/)';
    }
}

//attributesViaProperties4();

//--------------

function attributesViaProperties5() {
    let isButton = document.querySelector('#img-btn');
    isButton.addEventListener('click', findWayToImg);

    function findWayToImg() {
        let isImage = document.querySelector('#img-coding');
        let isParagraph = document.querySelector('.text-change');
        isParagraph.textContent = isImage.src;
    }
}

//attributesViaProperties5();

//--------------

function attributesViaProperties6() {
    let isButton = document.querySelector('#img-btn');
    isButton.addEventListener('click', findWidthImg);

    function findWidthImg() {
        let isImage = document.querySelector('#img-coding');
        isImage.width = '250';
    }
}

//attributesViaProperties6();

//--------------

function attributesViaProperties7() {
    let isButton = document.querySelector('#img-btn');
    isButton.addEventListener('click', increaseWidthImg);

    function increaseWidthImg() {
        let isImage = document.querySelector('#img-coding');
        isImage.width = Number(isImage.width) / 2;
    }
}

//attributesViaProperties7();

//--------------

function attributesViaProperties8() {
    let isFirstButton = document.querySelector('.flex-container #support-btn');
    let isSecondButton = document.querySelector('.flex-container #meeting-btn');
    isFirstButton.addEventListener('click', fundFirstToHolder);
    isSecondButton.addEventListener('click', fundSecondToHolder);

    function fundFirstToHolder() {
        let isFirstAttribute = document.querySelector('#img-support');
        let isFirstParagraph = document.querySelector('.first-way');
        isFirstParagraph.textContent = isFirstAttribute.src;
    }

    function fundSecondToHolder() {
        let isSecondAttribute = document.querySelector('#img-meeting');
        let isSecondParagraph = document.querySelector('.second-way');
        isSecondParagraph.textContent = isSecondAttribute.src;
    }
}

//attributesViaProperties8();

//--------------

function textFields1() {
    let isButton = document.querySelector('#btn');
    isButton.addEventListener('click', changeText);

    function changeText() {
        let getText = document.querySelector('#elem');
        getText.value = 'Your email';
    }
}

//textFields1();

//--------------

function textFields2() {
    let isButton = document.querySelector('#text-field-1');
    isButton.addEventListener('click', duplicateText);

    function duplicateText() {
        let isInput = document.querySelector('#text-input');
        let textParagraph = document.querySelector('#change-text');
        textParagraph.textContent = isInput.value;
    }
}

//textFields2();

//--------------

function textFields3() {
    let isButton = document.querySelector('#square');
    isButton.addEventListener('click', findSquare);

    function findSquare() {
        let isNumber = document.querySelector('#number-input');
        let getSquare = Number(isNumber.value) ** 2;
        let result = document.querySelector('#text-field-2');
        result.value = getSquare.toString();
    }
}

//textFields3();

//--------------

function textFields4() {
    let isButton = document.querySelector('#text-field-1');
    isButton.addEventListener('click', changeValue);

    function changeValue() {
        let firstInput = document.querySelector('#text-input');
        let secondInput = document.querySelector('#text-field-2');
        let firstValue = firstInput.value;
        firstInput.value = secondInput.value;
        secondInput.value = firstValue;
    }
}

//textFields4();

//--------------

function textFields5() {
    let isButton = document.querySelector('#mean-btn');
    isButton.addEventListener('click', findMean);

    function findMean() {
        let isFirstInput = document.querySelector('#first-input');
        let isSecondInput = document.querySelector('#second-input');
        let isThirdInput = document.querySelector('#third-input');
        let isFourthInput = document.querySelector('#fourth-input');
        let isFifthInput = document.querySelector('#fifth-input');
        let result = (Number(isFirstInput.value) + Number(isSecondInput.value) + Number(isThirdInput.value) + Number(isFourthInput.value) + Number(isFifthInput.value)) / 5;
        let isParagraph = document.querySelector('#result');
        isParagraph.textContent = result.toString();
    }
}

//textFields5();

//--------------

function textFieldsFocus1() {
    let elem = document.querySelector('#text-input');
    elem.addEventListener('focus', function () {
        console.log(elem.value);
    });
}

//textFieldsFocus1();

//--------------

function textFieldsFocus2() {
    let elem = document.querySelector('#text-input');

    elem.addEventListener('focus', function () {
        elem.value = 1;
    });

    elem.addEventListener('blur', function () {
        elem.value = 2;
    });
}

//textFieldsFocus2();

//--------------

function textFieldsFocus3() {
    let elem = document.querySelector('#number-input');

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

function textFieldsFocus4() {
    let elem = document.querySelector('#text-input');
    elem.addEventListener('focus', function () {
        elem.value = '';
    });
}

//textFieldsFocus4();

//--------------

function exceptionAttributes1() {
    let isButton = document.querySelector('.btn-sum');
    isButton.addEventListener('click', getClassName);

    function getClassName() {
        let findClass = document.querySelector('.first-number');
        console.log(findClass.className);
    }
}

//exceptionAttributes1();

//--------------

function exceptionAttributes2() {
    let isButton = document.querySelector('#elem-btn');
    isButton.addEventListener('click', addAttribute);

    function addAttribute() {
        let isBlock = document.querySelector('#elem-div');
        isBlock.className = 'style-block';
    }
}

exceptionAttributes2();

//--------------

function exceptionAttributes3() {
    let isButton = document.querySelector('#elem-btn');
    isButton.addEventListener('click', getArrClass);

    function getArrClass() {
        let getClass = document.querySelector('#elem-arr');
        console.log(getClass.className.split(' '));
    }
}

//exceptionAttributes3();

//--------------

function chaining1() {
    let image = document.querySelector('.block-meeting_img').src;
    console.log(image);
}

//chaining1();

//--------------

function this1() {
    let isInput = document.querySelector('#elem');
    isInput.addEventListener('focus', function () {
        this.value = '1';
    });
    isInput.addEventListener('blur', function () {
        this.value = '2';
    });
}

//this1();

//--------------

function this2() {
    let isButton = document.querySelector('#value-btn');
    isButton.addEventListener('click', changeValue);

    function changeValue() {
        this.value++;
        console.log(this.value);
    }
}

//this2();

//--------------

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

function attributesViaMethods1() {
    let isValue = document.querySelector('#text-input');
    isValue.getAttribute('value');
}

//attributesViaMethods1();

//--------------

function attributesViaMethods2() {
    let isClass = document.querySelector('#elem-arr');
    isClass.getAttribute('class');
}

attributesViaMethods2();

//--------------

function attributesViaMethods3() {
    let isParagraph = document.querySelector('#elem1');
    isParagraph.setAttribute('value', 'text');
}

//attributesViaMethods3();

//--------------

function attributesViaMethods4() {
    let isParagraph = document.querySelector('#elem1');
    isParagraph.setAttribute('class', 'valid');
}

//attributesViaMethods4();

//--------------

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
        for(let i = 0; i < isLists.length; i++) {
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

    isButton.addEventListener('click', function() {
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

    for(let i = 0; i < childElements.length; i++) {
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
    let findSibling = document. querySelector('#elem-text');
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
    for(let i = 0; i < findList.length; i++) {
        findList[i].classList.add('colored');
    }
}

//otherSearchMethods2();

//--------------

function otherSearchMethods3() {
    let getClasses = document.getElementsByClassName('www');
    for(let i = 0; i < getClasses.length; i++) {
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
