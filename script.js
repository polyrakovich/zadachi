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

//сначала нахожу сумму, потом делю ее на длину массива

function getMeanSum() {
   let meanArray = mean.value.split(',');
   let meanSumValue = 0;
   let meanSumResult = 0;
   for(let meanItem of meanArray) {
      meanSumValue += Number(meanItem);
      meanSumResult = meanSumValue / meanArray.length;
   }
   meanSumSpan.textContent = meanSumResult.toFixed(2);
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
      userAgeResult.innerText = resultAge.toString();
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

const isThree = function () {
   return includesThree.value.includes(3) ? resultThree.append('yes') : resultThree.append('no');
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
//20//////////////////////////////////////////////////////////////////////
function changeSize() {
   // document.querySelectorAll('.imageSize').forEach((item) => {item.setAttribute('width', '260')});
   document.querySelectorAll('.imageSize').forEach((item) => {item.getAttribute('width');});
   console.log();
}

