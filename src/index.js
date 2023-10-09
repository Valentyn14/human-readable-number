module.exports = function toReadable (number) {
  let firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let secondTen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function translateNumbersIntoLetters (n) {
    if (n === 0) {
      return '';
  
    } else if (n <= 10) {
      return firstTen[n];
  
    } else if (n < 20) {
      return secondTen[n - 10];
  
    } else if (n < 100 && n % 10 == 0) {
      return tens[Math.floor(n / 10) - 1];
  
    } else if (n < 100) {
      return tens[Math.floor(n / 10) - 1] + ' ' + firstTen[n.toString().slice(-1)];

    } else if (n < 1000 && n % 100 == 0) {
      return firstTen[Math.floor(n / 100)]  + ' hundred';

    } else {
      return firstTen[Math.floor(n / 100)] + ' hundred ' + translateNumbersIntoLetters (n % 100);
    }
  }

  if (number === 0){
    return 'zero';
  } else {
    return translateNumbersIntoLetters (number);
  } 
  
}
 
console.log(module.exports(90));