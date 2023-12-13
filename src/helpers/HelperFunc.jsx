const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

export function convertToWords(number) {
  if (number === 0) {
    return 'zero';
  }

  return capitalizeAllWords(convertNumber(number));

  function capitalizeAllWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  function convertNumber(num) {
    if (num < 10) {
      return ones[num];
    } else if (num >= 11 && num <= 19) {
      return teens[num - 11];
    } else if (num >= 10 && num % 10 === 0 && num < 100) {
      return tens[num / 10];
    } else if (num >= 20 && num < 100) {
      return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
    } else if (num >= 100 && num < 1000) {
      return ones[Math.floor(num / 100)] + ' hundred ' + convertNumber(num % 100);
    } else if (num >= 1000 && num < 1000000) {
      return convertNumber(Math.floor(num / 1000)) + ' thousand ' + convertNumber(num % 1000);
    } else if (num >= 1000000 && num < 1000000000) {
      return convertNumber(Math.floor(num / 1000000)) + ' million ' + convertNumber(num % 1000000);
    } else {
      // Extend as needed
      return 'Number out of range for this function';
    }
  }
}

