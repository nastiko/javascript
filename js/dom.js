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
      //showSum.textContent = sum.toString();
      showSum.append(sum.toString());
   }
}

//elementText4();

//--------------

function elementText5() {

}

//elementText1();

//--------------

function elementText6() {

}

//elementText1();

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

