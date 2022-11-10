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
   buttonFirst.addEventListener('click', function() {
      alert(1);
   });

   let buttonSecond = document.querySelector('#button2');
   buttonSecond.addEventListener('click', function() {
      alert('Hello JavaScript!');
   });

   let buttonThird = document.querySelector('#button3');
   buttonThird.addEventListener('click', function() {
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
   elem.addEventListener('focus', function() {
      console.log(elem.value);
   });
}

//textFieldsFocus1();

//--------------

function textFieldsFocus2() {
   let elem = document.querySelector('#text-input');

   elem.addEventListener('focus', function() {
      elem.value = 1;
   });

   elem.addEventListener('blur', function() {
      elem.value = 2;
   });
}

//textFieldsFocus2();

//--------------

function textFieldsFocus3() {
   let elem = document.querySelector('#number-input');

   elem.addEventListener('focus', function() {
      elem.value = '';
   });

   elem.addEventListener('blur', function() {
      let square = Number(elem.value) ** 2;
      elem.value = square.toString();
   });
}

//textFieldsFocus3();

//--------------

function textFieldsFocus4() {
   let elem = document.querySelector('#text-input');
   elem.addEventListener('focus', function() {
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

}

//exceptionAttributes1();

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
