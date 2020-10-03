module.exports = function toReadable (number) {
  const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const deciArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   if (number <= 19) return numArr[number];

   if (number >= 20 && number <= 99) {
      if (number % 10 === 0) {
         return deciArr[number / 10 - 2]
      } else {
         let decimals = Math.trunc(number / 10);
         let units = number - decimals * 10;
         return `${deciArr[decimals - 2]} ${numArr[units]}`
      }
   }

   if (number >= 100 && number <= 999) {
       if (number % 100 === 0) {
            return `${numArr[number / 100]} hundred`
       } else {
           let hundreds = Math.trunc(number / 100);
           let decimals = number - hundreds * 100;
           if (decimals % 10 === 0) {
               return `${numArr[hundreds]} hundred ${deciArr[decimals / 10 - 2]}`
            } else if (decimals <= 19) {
               return `${numArr[hundreds]} hundred ${numArr[decimals]}`
            } else {
                let decimals = Math.trunc((number - hundreds * 100) / 10);
                let units = number - hundreds * 100 - decimals * 10;
                return `${numArr[hundreds]} hundred ${deciArr[decimals - 2]} ${numArr[units]}`
           }
       }
   }
}
