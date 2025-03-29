//1////////////////////////////////////////////////////////////////////////

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const result = document.getElementById('sum');
const button = document.getElementById('button');

function getSum() {
   result.value = Number(num1.value) + Number(num2.value) + Number(num3.value);
}

button.addEventListener('click', getSum);

//2//////////////////////////////////////////////////////////

const inputs = document.getElementsByClassName('.num');
const btn = document.getElementById('btn');
const sum = document.getElementById('result');

function getSumOfInputs() {
   let sumResult = 0;
   for (let input of inputs) {
      sumResult += Number(input.value);
      console.log(sumResult);

   }
   sum.textContent = sumResult.toString();
}

btn.addEventListener('click', getSumOfInputs);

//3//////////////////////////////////////////////////////////

const order = document.getElementById('order');
const sumOfNumbers = document.querySelector('.sumResult');
const span = document.createElement('span');

order.addEventListener('keypress', function(e) {
   if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
   }
});

function getSumOfInputNumbers() {
   let orderArray = order.value.split('');
   let orderSum = 0;
   for (let i = 0; i < orderArray.length; i++) {
      orderSum += Number(orderArray[i]);

      console.log(orderSum);

   }
   span.textContent = orderSum.toString();
   sumOfNumbers.appendChild(span);
}

order.addEventListener('blur', getSumOfInputNumbers);

//4/////////////////////////////////////////////////////////////////

const mean = document.getElementById('mean');
const meanSum = document.querySelector('.meanSum');
const meanSumSpan = document.createElement('span');

mean.onclick = function() {
   mean.classList.remove('negative-value');
}

mean.addEventListener('keypress', function(e) {
   if (!/[\d,]/.test(e.key)) {
      e.preventDefault();
   }
})
//сначала нахожу сумму, потом делю ее на длину массива

function getMeanSum() {
   mean.value = mean.value.replace(/,+/g, ', ');
   let meanArray = mean.value.split(',').filter(Boolean);
   console.log(meanArray);
   if (!mean.value.includes(',') || meanArray.length <= 1) {
      mean.classList.add('negative-value');
      meanSumSpan.textContent = 'Введите числа через запятую';

   }
   else {
      let meanSumValue = 0;
      let meanSumResult = 0;
      for (let meanItem of meanArray) {
         meanSumValue += Number(meanItem);
         meanSumResult = meanSumValue / meanArray.length;
      }
      meanSumSpan.textContent = meanSumResult.toFixed(2);
   }
   meanSum.appendChild(meanSumSpan);
}

mean.addEventListener('blur', getMeanSum);

//5////////////////////////////////////////////////////////////

const fullName = document.getElementById('fullName');
const nameArray = document.querySelectorAll('.fullNameInputs > input');

//1)нахожу массив из всех инпутов внутри дива;
//2)создаю массив из ФИО
//3)присваиваю каждому элементу массива инпутов значение, которое соответствует каждому элементу в массиве ФИО(при каждой итерации цикла, индекс увеличивается на 1)

function getFullName() {
   let fullNameArray = fullName.value.split(' ');
   for (let i = 0; i < fullNameArray.length; i++) {
      if (fullNameArray.length === 3 && !fullNameArray.includes('')) {
         nameArray[i].value = fullNameArray[i];
      } else {
         nameArray.forEach((input) => {input.value = ''});
      }
      console.log(nameArray)
   }
}

fullName.addEventListener('blur', getFullName);

//6////////////////////////////////////////////////////////////

const lowerName = document.getElementById('lowerName');

//1)сначала получаю массив из ФИО
//2)затем из каждого элемента получаю массив букв (точнее, сразу получаю первую букву, которую и трансформирую в заглавную, потом к ней прибавляется остальная часть массива)
//3)собираю массив обратно, уже с изменениями

function getUpperName() {
   const upperName = lowerName.value.split(' ').map(item => item[0].toUpperCase() + item.slice(1));
   lowerName.value = upperName.join(' ');
   console.log(lowerName.value);
}

lowerName.addEventListener('blur', getUpperName);

//7/////////////////////////////////////////////////////////////
const howMany = document.querySelector('#howManyWords');
const wordCount = document.querySelector('.wordCount');
const countValue = document.createElement('span');
//если инпут содержит значение, разбиваем строку на массив и считаем количество элементов
//выводим количество в параграф

function getWordsQuantity() {
   let wordCountResult = 0;
   if (howMany.value) {
   wordCountResult += howMany.value.split(' ').filter(Boolean).length;
   countValue.textContent = wordCountResult.toString();

   } else {
   countValue.textContent = '0';
}
   console.log(wordCountResult);
   wordCount.appendChild(countValue);
}

howMany.addEventListener('blur', getWordsQuantity);
//8////////////////////////////////////////////////////////////////

const theBiggest = document.getElementById('theBiggest');
const theBiggestResult = document.querySelector('.theBiggestResult');
const spanResult = document.createElement('span');

//разбиваем текст на массив, преобразуем массив строк в массив чисел, соответствующих длинам строк
//редьюс сравнивает числа  и записывает большее
//выводим в параграф результат

function getBiggestLength() {
   let lengthArray = theBiggest.value.split(' ').map(lengthItem => lengthItem.length);
   let maxLength = lengthArray.reduce((maxLength, currentLength) => Math.max(maxLength, currentLength), -Infinity);
   spanResult.innerText = maxLength.toString();
   theBiggestResult.appendChild(spanResult);
}

theBiggest.addEventListener('blur', getBiggestLength);
//9////////////////////////////////////////////////////////////
const dateInput = document.getElementById('dateInput');
let check;

dateInput.addEventListener('input', (date) => {
   date = dateInput.value;
   const pattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
   check = pattern.test(date);
   console.log(check);
});

function getCorrectDate() {
   if (check) {
      let dateReverse = dateInput.value.split('.').reverse().join('-');
      dateInput.value = dateReverse;
      console.log(dateReverse);
   } else {
      dateInput.value = 'wrong date format';
   }
}

dateInput.addEventListener('blur', getCorrectDate);

//10///////////////////////////////////////////////////////////////
const birthYear = document.getElementById('birthYear');
const getBirthYear = document.getElementById('getBirthYear');
const userAge = document.getElementById('userAge');
const userAgeResult = document.createElement('span');
//получаем год методом getFullYear()
//вычитаем из полученного года значение инпута -> получаем возраст
let date = new Date();

function getUserAge() {
   if (birthYear.value !== undefined && 1915 <= birthYear.value && birthYear.value <= date) {
      let resultAge = date.getFullYear() - birthYear.value;
      userAgeResult.innerText = `${resultAge - 1} или ${resultAge}`;
      userAge.appendChild(userAgeResult);
      console.log(resultAge);
   }
}

getBirthYear.addEventListener('click', getUserAge);
//11//////////////////////////////////////////////////////////////////
const userDate = document.getElementById('userDate');
const dayOfTheWeek = document.getElementById('dayOfTheWeek');
const dayOfWeekResult = document.createElement('span');

//получаем массив из значения инпута, приводим к аргументу для Date и получаем номер дня недели
//меняем формат чтобы день недели выводился словом

function getDayOfTheWeek() {
   const pattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
   let check = pattern.test(userDate.value);
   if (check) {
      let correctDate = userDate.value.split('.').reverse().join(', ');
      let date = new Date(correctDate);
      let options = {weekday: 'long'};
      let result = new Intl.DateTimeFormat('ru-RU', options).format(date);
      dayOfWeekResult.textContent = result.toString();
   } else {
      dayOfWeekResult.textContent = 'Введен неверный формат даты';
   }
   dayOfTheWeek.appendChild(dayOfWeekResult);
}

userDate.addEventListener('blur', getDayOfTheWeek);
//12/////////////////////////////////////////////////////////////////////
const mirrorWord = document.getElementById('mirrorWord');
const getMirrorWord = document.getElementById('getMirrorWord');
const resultMirror = document.getElementById('resultMirror');
const resultMirrorSpan = document.createElement('span')

//разбиваем значение инпута на массив, меняем порядок элементов в массиве и соединяем, делаем проверку
//делаем нечувствительным к регистру (toLowerCase())

function isMirror(str) {
   str = mirrorWord.value
       .toString() //если проверяем, является ли палиндромом число
       .toLowerCase() //убираем чувствительность к регистру
       .replace(/\s|[,.!?"/-]/g, ''); //заменяем в строке пробелы или знаки препинания пустотой, чтобв проверить предложения и словосочетания
   console.log(str);
  if (str.split('').reverse().join('') === str) {
     resultMirrorSpan.textContent = 'Да';
  }else{
     resultMirrorSpan.textContent = 'Нет';
  }
   resultMirror.appendChild(resultMirrorSpan);
}

getMirrorWord.addEventListener('click', isMirror);

//
//13/////////////////////////////////////////////////////////////////////
const includesThree = document.getElementById('includesThree');
const resultThree = document.getElementById('resultThree');
const resultThreeSpan = document.createElement('span')
resultThree.append(resultThreeSpan);

const isThree = function () {
   if (includesThree.value === '') {
      resultThreeSpan.textContent = 'Введите любое число';
   }else {
      return includesThree.value.includes(3) ? resultThreeSpan.textContent = 'yes' : resultThreeSpan.textContent = 'no';
   }
}

includesThree.addEventListener('change', isThree);
//14//////////////////////////////////////////////////////////////////////
const serialNumber = document.getElementsByClassName('serialNumber');
const getSerialNumbers = document.getElementById('getSerialNumbers');
const serialNumberResult = document.getElementsByClassName('serialNumberResult')

function getSerialSubsequence() {
   for (let i = 0; i < serialNumber.length; i++) {
      serialNumberResult[i].textContent = (i + 1).toString();
   }
}

getSerialNumbers.addEventListener('click', getSerialSubsequence);
//15///////////////////////////////////////////////////////////////////////
const paragraphWithNumber = document.querySelectorAll('.paragraphWithNumber');
const printNumber = document.getElementById('printNumber');
const ascendingOrder = document.getElementById('ascendingOrder');

//paragraphWithNumber - array-like объект, получаем из него array
//сортируем и выводим

function getAscendingOrder() {
   const array = Array.from(paragraphWithNumber, (number) => number.textContent);
   let sorted = array.sort();
   ascendingOrder.value = sorted.join(', ');
}

printNumber.addEventListener('click', getAscendingOrder);
//16///////////////////////////////////////////////////////////////////////
const hrefLink = document.querySelectorAll('.hrefLink');

//как в предыдущем задании используем Array.from(), но теперь сразу добавляем к каждому айтему содержимое атрибута href и скобочки

function addBraces() {
   Array.from(hrefLink, (item) => item.append(`(${item.getAttribute('href')})`));
}

window.addEventListener('load', addBraces);
//17///////////////////////////////////////////////////////////////////////
const httpLink = document.querySelectorAll('.httpLink');

function addArrow() {
   let array = Array.prototype.slice.call(httpLink);
   for (let link of array) {
      if (link.getAttribute('href').includes('http://')) {
         link.append('--->');
      }else{
         link.append('');
      }
   }

}

window.addEventListener('load', addArrow);
//18///////////////////////////////////////////////////////////////////////
const numberSquare = document.querySelectorAll('.numberSquare');
let squareArray = Array.from(numberSquare);
for(let squareItem of squareArray) {
   squareItem.onclick = () => squareItem.innerHTML = Math.pow(+squareItem.innerText, 2).toString();
}
//19//////////////////////////////////////////////////////////////////////
const imageSizeInfinity = document.querySelectorAll('.imageSizeInfinity');

for (let img of imageSizeInfinity) {
   function changeSizeInfinity() {
      let width = (+img.getAttribute('width') * 2).toString()
      img.setAttribute('width', width)
      console.log(img)
   }
   img.addEventListener('click', changeSizeInfinity);
}
//20//////////////////////////////////////////////////////////////////////
const imageReturningSize = document.querySelectorAll('.imageSize');
for (let img of imageReturningSize) {

   function changeSize() {
      img.classList.toggle('width__2x');
      console.log(img);
   }
   img.addEventListener('click', changeSize);
}
//21//////////////////////////////////////////////////////////////////////
const imageDuplicate = document.querySelectorAll('.imageDuplicate');
const output = document.querySelector('.output');
const imageOut = document.createElement('img');

for (let img of imageDuplicate) {
   img.onclick = function (event) {
      console.log(output);
      imageOut.src = event.target.src;
      output.appendChild(imageOut);
   }
}
//22////////////////////////////////////////////////////////////////////
const positiveNumber = document.querySelector('#positiveNumber');
const plusOne = document.querySelector('#plusOne');
const minusOne = document.querySelector('#minusOne');

   plusOne.addEventListener('click', () => {
      positiveNumber.value = +positiveNumber.value + 1;
      console.log(positiveNumber.value);
   });

   minusOne.addEventListener('click', () => {
      if(positiveNumber.value > 0) {
         positiveNumber.value = +positiveNumber.value - 1;
      }else {
         positiveNumber.value = 0;
      }
   });
//23/////////////////////////////////////////////////////////////////////
const numberIncluding = document.querySelector('#numberIncluding');

numberIncluding.addEventListener('input', numberValidation)
function numberValidation() {
   let num = numberIncluding.value;
   console.log(num);
   return num >= 1 && num <= 100;
}

   function checkNumber() {
      console.log(numberIncluding);
      if (numberValidation()) {
         numberIncluding.classList.add('positive-value');
         numberIncluding.classList.remove('negative-value');
      } else {
         numberIncluding.classList.add('negative-value');
      }
   }

numberIncluding.addEventListener('blur', checkNumber);
//24//////////////////////////////////////////////////////////////////
const copied = document.querySelector('#copied');

function addCopiedText() {
   copied.value = window.getSelection().toString();
}

window.addEventListener('mouseup', addCopiedText);
//25////////////////////////////////////////////////////////////////////
const resultButton = document.querySelector('#changeColor');
const sequenceOfNumbers = document.getElementsByClassName('sequenceOfNumbers');

function  changeNumbersColor() {
   let arr = Array.from(sequenceOfNumbers, (num) => num.innerText);
   let maxNum = arr.reduce((maxNum, currentNum) => Math.max(maxNum, currentNum), -Infinity);
   console.log(arr);
   for (let para of sequenceOfNumbers) {
      console.log(para);
      if (+para.textContent === maxNum) {
         para.classList.add('max-num');
      }
   }
}

resultButton.addEventListener('click', changeNumbersColor);
//26//////////////////////////////////////////////////////////////////
const paragraphs = document.querySelectorAll('.paragraphs');
const counter = document.querySelector('#counter');
let quantity = 1;

for (let paragraph of paragraphs) {
   paragraph.addEventListener('click', function() {
      counter.value = quantity++;
   });
}
//27/////////////////////////////////////////////////////////////////////
const square = document.querySelector('#square');

function getSquarePerSecond() {
   let value = square.value;
   if (value !== 1 && value !== 0 && value !==  -1) {
      setTimeout(function run() {
         square.value *= value;
         setTimeout(run, 1000);
      }, 1000);
   }
}
square.addEventListener('change', getSquarePerSecond);
//28/////////////////////////////////////////////////////////////////////
const randomString = document.querySelector('#randomString');
const generateRandomString = document.querySelector('#generateRandomString');

generateRandomString.addEventListener('click', function () {
   let result = '';
   const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
   for (let i = 1; i <= 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   randomString.value = result;
});
//29///////////////////////////////////////////////////////////////////
const randomSymbol = document.querySelector('#randomSymbols');
const generateRandomSymbols = document.querySelector('#generateRandomSymbols');
const stringLength = document.querySelector('#stringLength');

generateRandomSymbols.addEventListener('click', function () {
   let result = '';
   let length = +stringLength.value;
   const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
   for (let i = 1; i <= length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   randomSymbol.value = result;
});
//30//////////////////////////////////////////////////////////////////////
const numberOfSymbols = document.querySelector('#numberOfSymbols');
const symbolsSubsequence = document.querySelector('#symbolsSubsequence');
const generateString = document.querySelector('#generateString');
const resultString = document.querySelector('#resultString');

function validation() {
   if (symbolsSubsequence.value === '' || symbolsSubsequence.value.includes(' ')) {
      symbolsSubsequence.classList.add('negative-value');
      return false;
   } else {
      symbolsSubsequence.classList.remove('negative-value');
      return true;
   }

}

symbolsSubsequence.addEventListener('input', validation);

generateString.addEventListener('click', function () {
   console.log(symbolsSubsequence.value);
   if (validation(symbolsSubsequence.value)) {
      let result = '';
      let length = +numberOfSymbols.value;
      let characters = symbolsSubsequence.value;
         for (let i = 1; i <= length; i++) {
               result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
         resultString.value = result;
   } else {
      resultString.value = 'Введите символы без пробелов';
   }
})
//31///////////////////////////////////////////////////////////////////
const colorChanging = document.querySelector('#colorChanging');
colorChanging.style.color = 'red';

function changeColor() {
     setInterval(function run() {
        return colorChanging.style.color === 'red' ? colorChanging.style.color = 'green' : colorChanging.style.color = 'red';
     }, 1000);
}

window.addEventListener('load', changeColor);
//32////////////////////////////////////////////////////////////////////
const countdown = document.querySelector('#countdown');

function startCountdown() {
  let i = +countdown.value;
   setInterval(function run() {
      if (i >= 0) {
            result.textContent = `${i--}`;
         }
      },1000)
   let result = document.createElement('p');
   countdown.after(result);
}

countdown.addEventListener('blur', startCountdown);
//33///////////////////////////////////////////////////////////////////////
const colorChangingArray = document.querySelector('#colorChangingArray');

function changeColorFromArray() {
   colorChangingArray.style.color = 'blue';
   const arr = ['red', 'green', 'blue'];
   let index = 0;
   setInterval(function run() {
      colorChangingArray.style.color = arr[index++];
      index %= arr.length;
   }, 1000)
}

window.addEventListener('load', changeColorFromArray);
//34//////////////////////////////////////////////////////////////////////
const numberFromArray = document.querySelector('#numberFromArray');
const nextString = document.querySelector('#nextString');
const arrayOfNumbers = ['один', 'два', 'три'];
let elemIndex = 0;

window.addEventListener('load', function () {
   numberFromArray.textContent = arrayOfNumbers[0];
});

function getElementFromArray(event) {
   event.preventDefault();
   elemIndex = (elemIndex + 1) % arrayOfNumbers.length;
   numberFromArray.textContent = arrayOfNumbers[elemIndex];
}

nextString.addEventListener('click', getElementFromArray);
//35/////////////////////////////////////////////////////////////////
const counterArray = document.querySelectorAll('.counter');
let i = 0;
let num = 0;

function startCount() {
setInterval(function run() {
   counterArray[i].value = num + 1;
   num++;
   i++;
   i %= counterArray.length;
   }, 1000)

}

window.addEventListener('load', startCount);
//36//////////////////////////////////////////////////////////////////
const checkboxChecked = document.querySelector('#checkboxChecked');
const changeCheckbox = document.querySelector('#changeCheckbox');

function changeState (e) {
   e.preventDefault();
   return checkboxChecked.checked ? checkboxChecked.removeAttribute('checked') : checkboxChecked.setAttribute('checked', 'checked');
}

changeCheckbox.addEventListener('click', changeState);
//37/////////////////////////////////////////////////////////////////
const checkboxes = document.querySelectorAll('.checkboxUnchecked');
const addChecked = document.querySelector('#addChecked');

addChecked.addEventListener('click', function () {
   checkboxes.forEach(checkbox => checkbox.checked = true);
});
//38////////////////////////////////////////////////////////////////////
const radios = document.querySelectorAll('.radios');
const reply = document.querySelector('#reply');
const spanRadios = document.createElement('span');
reply.append(spanRadios);
let spanArr = [];

radios.forEach(radio => radio.addEventListener('click', function (e) {
   let result = e.target.getAttribute('id');
   this.checked=!this.isChecked;
   console.log(e.target);
   if (this.checked && !spanArr.includes(result)) {
      spanArr.push(result);
   } else {
      let i = spanArr.indexOf(result);
      if (i === -1) i = 4;
      spanArr.splice(i, 1);
   }
   spanRadios.textContent = spanArr.join(', ');
}));
//39//////////////////////////////////////////////////////////////
const checks = document.querySelectorAll('.checks');
const replyCheck = document.querySelector('#replyCheck');
let spanCheck = document.createElement('span');

let array = [];

checks.forEach(check => check.addEventListener('change', function () {
   let checked = check.getAttribute('name');
   if(check.checked && !array.includes(checked)) {
      array.push(checked);
      console.log(array);

   } else if (!check.checked && array.includes(checked)) {
      let i = array.indexOf(checked);
      array.splice(i, 1);
   }
   spanCheck.textContent = array.join(', ');
   replyCheck.append(spanCheck);
}))
//40///////////////////////////////////////////////////////////////
const whatLang = document.querySelector('#whatLang');
const visibleInput = document.querySelector('#visibleInput');

whatLang.addEventListener('change', function () {
   if (whatLang.checked) {
      visibleInput.style.display = 'inline-block';
   } else {
      visibleInput.style.display = 'none';
   }
})
//41////////////////////////////////////////////////////////////////////
const hiddens = document.querySelectorAll('.hidden');
const labels = document.querySelectorAll('.visible');

hiddens.forEach(hidden => hidden.addEventListener('change', function () {

   if (hidden.checked) {
      let attr = hidden.getAttribute('id');
      console.log(attr);
      Array.prototype.forEach.call(labels, function (label) {
         if(label.getAttribute('for') === attr) {
            label.style.display = 'inline-block';
         }
      })
   } else {
      let attr = hidden.getAttribute('id');
      console.log(attr);
      Array.prototype.forEach.call(labels, function (label) {
         if(label.getAttribute('for') === attr) {
            label.style.display = 'none';
         }
      })
   }
}))
//42/////////////////////////////////////////////////////////////////
const liNumber = document.querySelector('#liNumber');
const ol = document.querySelectorAll('.ol');
let errorTrack = document.createElement('p');
liNumber.after(errorTrack);

liNumber.addEventListener('keyup', function (e) {
   if (!/(?<!-)\d+/g.test(e.key)) {
      e.preventDefault();
   }
   const olArr = Array.from(ol);
   let index = +liNumber.value - 1;
   let liValue = liNumber.value;
   if (liValue > 5 || liValue <= 0 && liValue !== '') {
      errorTrack.textContent = 'Введите число от 1 до 5';
   } else {
      errorTrack.textContent = '';
   }
   for (let li of ol) {
      if (olArr.indexOf(li) === index) {
         li.style.color = 'red';
      } else {
         li.style.color = 'black';
      }
   }
})
//43///////////////////////////////////////////////////////////////////
const manipulatedParagraph = document.querySelector('#manipulatedParagraph');
const manipulations = document.querySelectorAll('.manipulations');

manipulations.forEach(manipulation => {
   manipulation.addEventListener('change', function () {
      let name = manipulation.getAttribute('name');
      if (manipulation.checked) {
         console.log(name);
         switch (name) {
            case 'red' :
               manipulatedParagraph.style.color = 'red';
               break;
            case 'bold' :
               manipulatedParagraph.style.fontWeight = 'bold';
               break;
            case 'crossOut' :
               manipulatedParagraph.style.textDecoration = 'line-through';
               break;
         }
      }  else {
         switch (name) {
            case 'red' :
               manipulatedParagraph.style.removeProperty('color');
               break;
            case 'bold' :
               manipulatedParagraph.style.fontWeight = 'normal';
               break;
            case 'crossOut' :
               manipulatedParagraph.style.textDecoration = 'none';
               break;
         }
      }
   })
})
//44//////////////////////////////////////////////////////////////////
const close = document.querySelectorAll('.close');

close.forEach(button => {
   button.addEventListener('click', function () {
      button.closest('div').style.display = 'none';
   })
})
//45/////////////////////////////////////////////////////////////////
const countriesString = document.querySelector('#countriesString');
const getList = document.querySelector('#getList');
const ul = document.querySelector('.ul');

countriesString.addEventListener('keypress', function (e) {
   if (!/[\sa-zа-яё,-]/i.test(e.key)) {
      e.preventDefault();
   }
})

getList.addEventListener('click', function () {
   let values = countriesString.value.split(',').filter(Boolean);
   if(ul.childNodes.length !== 0) {
      let children = document.querySelectorAll('.li');
      children.forEach(child => child.remove());
   }
   for (value of values) {
      let li = document.createElement('li');
      li.setAttribute('class', 'li');
      li.textContent = value;
      ul.append(li);
   }
})
//46////////////////////////////////////////////////////////////////
const countriesList = document.querySelector('#countriesList');
const createList = document.querySelector('#createList');

countriesList.addEventListener('keypress', function (e) {
   if (e.which === 13 && countriesList.value.length !== 0) {
      createListOfCountries();
   } else if(!/[\sa-zа-яё,-]/i.test(e.key)) {
      e.preventDefault();
   }
})

function createListOfCountries() {
  let country = countriesList.value;
  if (createList.childNodes.length === 0) {
     createList.append(country);
  }else {
     createList.append(', ' + country);
  }
  countriesList.value = '';
   console.log(country)
}
//47///////////////////////////////////////////////////////////
const textDiv = document.querySelectorAll('.textDiv');
const cut = document.querySelector('#cut');

cut.addEventListener('click', function () {
   let cropped = '';
   Array.from(textDiv, function (el) {
      cropped = el.textContent.trim().slice(0, 10);
      console.log(cropped);
      el.textContent = cropped + '...';
   });
})
//48///////////////////////////////////////////////////////////
const tableNumbers = document.querySelectorAll('.tableNumber > td');
const colorNumbers = document.querySelector('#colorNumber');

colorNumbers.addEventListener('click', function () {
   // let max = 0;
   // let num = [];
   // tableNumbers.forEach(el => {
   //    let num = el.textContent;
   // });
   // console.log(num);
   let numbers = Array.from(tableNumbers, el => el.textContent);

   let max = numbers.reduce((a, b) => a > b ? a : b);
   console.log(max);

   let resultMax =  Math.max.apply(null, numbers);
   //применяем стиль к ячейке
   tableNumbers.forEach(td => {
      if (td.textContent === resultMax.toString()) {
         td.style.backgroundColor = 'red';
   }})
})
//49///////////////////////////////////////////////////////
const tableCells = document.querySelectorAll('.tableCells > td');
const getString = document.querySelector('#getString');
const numbersFromTable = document.querySelector('#numbersFromTable');

getString.addEventListener('click', function () {
   const cells = Array.from(tableCells, cell => cell.textContent);
   console.log(cells);
   numbersFromTable.value = cells.sort((a, b) => a - b).join(', ');
})
//50//////////////////////////////////////////////////////////////
const tableSum = document.querySelectorAll('.tableSum');
let table = document.querySelector('#table > tbody');
const getTableSum = document.querySelector('#getTableSum');

getTableSum.addEventListener('click', function () {
   if (table.children.length <= 3) {
      let newArr = [];
      let oldArr = Array.from(tableSum, el => el.textContent.match(/\d+/g));
      let num = 0;
      for (let i = 0; i < oldArr.length; i++) {
         console.log(oldArr[i]);
         for (let j = 0; j < oldArr.length; j++) {
            num = +oldArr[i][j];
            console.log(num);
         }
      }
      // let row = table.insertRow();
      // row.classList.add('tableSum');
      // row.style.backgroundColor = 'lightgreen';
      // let array = Array.from(tableSum, el => el.textContent.match(/\d+/g));
      // let resultArr = [];
      // for (let i = 0; i < array.length; i++) {
      //    for (let j = 0; j < array[i].length; j++) {
      //       if (resultArr[j] === undefined) {
      //          resultArr[j] = [];
      //       }
      //       resultArr[j][i] = array[i][j];
      //
      //    }
      // }
      //
      // for (let column of resultArr) {
      //    let cell = row.insertCell();
      //    let sum = column.reduce(function (currentSum, currentNumber) {
      //       return +currentSum + +currentNumber;
      //    }, 0)
      //    cell.textContent = sum.toString();
      // }
      // console.log(row);

   }
})
//51/////////////////////////////////////////////////////////////
const tableActivated = document.querySelectorAll('.tableActivated > td');
const activatedCells = document.querySelector('#activatedCell');
const activatedCellsSpan = document.createElement('span');
const remove = document.querySelector('#remove');
activatedCells.append(activatedCellsSpan);

remove.addEventListener('click', () => {
   tableActivated.forEach(td => td.classList.remove('activeTd'));
   activatedCellsSpan.textContent = '';
})
tableActivated.forEach(td => td.addEventListener('click', function () {
   td.classList.toggle('activeTd');
   let arr = Array.from(tableActivated)
   let filtered = arr.filter(el => el.classList.contains('activeTd'));
   console.log(filtered.length);
   activatedCellsSpan.textContent = filtered.length.toString();
}))
//52/////////////////////////////////////////////////////////////
let tdNode = document.getElementById('tableInputs');
const save = document.querySelector('#save');

tdNode.addEventListener('mouseup', (event) => {
   save.style.display = 'block';
   if (event.target.classList.contains('td')) {
      event.target.outerHTML = `<input type="number" class="inputOut" value="${event.target.textContent}">`
   }
})

save.addEventListener('click', () => {
   let inputs = document.querySelectorAll('.inputOut');
   if (inputs.length > 0) {
      for(let input of inputs) {
         input.outerHTML = `<td class="td">${input.value.length > 0 ? input.value : 0}</td>`
      }
      console.log(inputs)
   }
})
//53/////////////////////////////////////////////////////////////
const countryList = document.querySelectorAll('.countryList > li');

countryList.forEach(country => {
   country.addEventListener('click', function () {
      console.log(country.firstElementChild);
      country.firstElementChild.classList.toggle('show');
   })
})
//54////////////////////////////////////////////////////////////////
const countriesSelect = document.querySelector('#countriesSelect');
const citiesSelect = document.querySelector('#citiesSelect');
const displayData = document.querySelector('#displayData');
let spanSelectCountry = document.createElement('span');
let spanSelectCity = document.createElement('span');

const data = {
   0: ['Брянск', 'Москва', 'Санкт-Петербург'],
   1: ['Париж', 'Марсель', 'Бордо'],
   2: ['Рим', 'Милан', 'Флоренция'],
}

countriesSelect.addEventListener('change', function (e) {
   citiesSelect.length = 0;
   spanSelectCity.textContent = '';
   spanSelectCountry.textContent = e.target.value + ', ';
   displayData.append(spanSelectCountry);
   let key = e.target.selectedIndex;
   let cities = data[key];
   console.log(cities);
   for (let i = 0; i < cities.length; i++) {
      citiesSelect.add(new Option(cities[i]));
   }
})
citiesSelect.addEventListener('change', function (e) {
   console.log(e.target.value);
   spanSelectCity.textContent = e.target.value;
   displayData.append(spanSelectCity);
})