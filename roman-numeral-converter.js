function convertToRoman(num) {
  let romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '-V-', '-X-'];
  
  let numeralPattern = {
    1 : "0",
    2 : "00",
    3 : "000",
    4 : "01",
    5 : "1",
    6 : "10",
    7 : "100",
    8 : "1000",
    9 : "02",
  } //the pattern which numerals take for each digit

  let str = "";
  for (let i = 1; i < 5; i++) {
    let relevantNumeral = romanNumerals.slice((i - 1) * 2, i * 2 + 1); //takes relevant numerals from romanNumeral array (only 3 numerals are relevant to create any 1 digit)
    let index = (num % (10 ** i) - num % (10 ** (i - 1))) / (10 ** (i - 1)); //converts to digit

    if (index != 0) { //if index exists,
      for (let j = numeralPattern[index].length - 1; j >= 0; j--) {
        str = relevantNumeral[numeralPattern[index][j]] + str; //adds relevant numerals to string
      }
    }
  }
 return str;
}
