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

//сначала нахожу сумму, потом делю ее на длину массива

function getMeanSum() {
   let meanArray = mean.value.split(',');
   let meanSumValue = 0;
   let meanSumResult = 0;
   for(let meanItem of meanArray) {
      meanSumValue += Number(meanItem);
      meanSumResult = meanSumValue / meanArray.length;
   }
   meanSum.append(meanSumResult.toFixed(2));
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
      nameArray[i].value = fullNameArray[i];
   }
   console.log(fullNameArray);
}

fullName.addEventListener('blur', getFullName);

//6////////////////////////////////////////////////////////////

const lowerName = document.getElementById('lowerName');

//1)сначала получаю массив из ФИО
//2)затем из каждого элемента получаю массив букв (точнее, сразу получаю первую букву, которую и трансформирую в заглавную, потом к ней прибавляется остальная часть массива)
//3)собираю массив обратно, уже с изменениями

function getUpperName() {
   const upperName = lowerName.value.split(' ').map(item => item.split('')[0].toUpperCase() + item.slice(1));
   lowerName.value = upperName.join(' ');
   console.log(lowerName.value);
}

lowerName.addEventListener('blur', getUpperName);

//7/////////////////////////////////////////////////////////////
const howMany = document.querySelector('#howManyWords');
const wordCount = document.getElementsByClassName('wordCount');

//если инпут содержит значение, разбиваем строку на массив и считаем количество элементов
//выводим количество в параграф

function howManyWords() {
   let wordCountResult = 0;
if (howMany.value) {
   wordCountResult += howMany.value.split(' ').length;
   wordCount[0].append(`${wordCountResult}`);
 }
   console.log(wordCountResult);
}

howMany.addEventListener('blur', howManyWords);
//8////////////////////////////////////////////////////////////////

const theBiggest = document.getElementById('theBiggest');
const theBiggestResult = document.querySelector('.theBiggestResult');

//разбиваем текст на массив, преобразуем массив строк в массив чисел, соответствующих длинам строк
//редьюс сравнивает числа  и записывает большее
//выводим в параграф результат

function getBiggestLength() {
   let lengthArray = theBiggest.value.split(' ').map(lengthItem => lengthItem.length);
   let maxLength = lengthArray.reduce((maxLength, currentLength) => Math.max(maxLength, currentLength), -Infinity);
   theBiggestResult.append(maxLength);
}

theBiggest.addEventListener('blur', getBiggestLength);
//9////////////////////////////////////////////////////////////
const wrongDate = document.getElementById('wrongDate');

//создаем массив с разделителем "."
//реверсим и вновь собираем с разделителем "-"

function getCorrectDate() {
   let correctDate = wrongDate.value.split('.').reverse();
   wrongDate.value = correctDate.join('-');
   if (correctDate.length > 3) {
      wrongDate.value = 'wrong format';
   }
}

wrongDate.addEventListener('blur', getCorrectDate);
//10///////////////////////////////////////////////////////////////
const birthYear = document.getElementById('birthYear');
const getBirthYear = document.getElementById('getBirthYear');
const userAge = document.getElementById('userAge');

//получаем год методом getFullYear()
//вычитаем из полученного года значение инпута -> получаем возраст

function getUserAge() {
   let date = new Date();
   let resultAge = date.getFullYear() - birthYear.value;
   userAge.append(resultAge.toString());
}

getBirthYear.addEventListener('click', getUserAge);
//11//////////////////////////////////////////////////////////////////
const userDate = document.getElementById('userDate');
const dayOfTheWeek = document.getElementById('dayOfTheWeek');

//получаем массив из значения инпута, приводим к аргументу для Date и получаем номер дня недели
//меняем формат чтобы день недели выводился словом

function getDayOfTheWeek() {
   let correctDate = userDate.value.split('.').reverse().join(', ');
   let date = new Date(correctDate);
   let options = {weekday: 'long'};
   let result = new Intl.DateTimeFormat('ru-RU', options).format(date);
   dayOfTheWeek.append(result);
}

userDate.addEventListener('blur', getDayOfTheWeek);
//12/////////////////////////////////////////////////////////////////////
const mirrorWord = document.getElementById('mirrorWord');
const getMirrorWord = document.getElementById('getMirrorWord');
const resultMirror = document.getElementById('resultMirror');

//разбиваем значение инпута на массив, меняем порядок элементов в массиве и соединяем, делаем проверку
//делаем нечувствительным к регистру (toLowerCase())

function isMirror() {
  if (mirrorWord.value.split('').reverse().join('').toLowerCase() === mirrorWord.value.toLowerCase()) {
     resultMirror.append('да')
  }else{
     resultMirror.append('нет')
  }
}

getMirrorWord.addEventListener('click', isMirror);
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

function getSerialSubsequence() {
   for (let i = 0; i < serialNumber.length; i++) {
      serialNumber[i].append((i + 1).toString());
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
   let array = Array.from(hrefLink, (item) => item.append(`(${item.getAttribute('href')})`));
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

