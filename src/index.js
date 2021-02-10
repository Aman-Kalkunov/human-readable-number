module.exports = function toReadable(number) {

  let array = number.toString().split('').map((item) => +item);
  if (!number) {
    return "zero"
  } else if (number >= 1 && number <= 19) {
    return units[number]
  } else if (number % 100 >= 10 && number % 100 <= 19) {
    return `${units[array[0]]} hundred ${units[number % 100]}`
  } else if (number % 100 === 0) {
    return `${units[array[0]]} hundred`
  } else if (number % 100 >= 1 && number % 100 <= 9) {
    return `${units[array[0]]} hundred ${units[array[2]]}`
  } else if (number % 10 === 0 && number < 99) {
    return `${tens[array[0]]}`
  } else if (number % 10 === 0 && number > 99) {
    return `${units[array[0]]} hundred ${tens[array[1]]}`
  } else if (number >= 20 && number <= 99) {
    return `${tens[array[0]]} ${units[array[1]]}`
  } else if (number >= 100 && number <= 999) {
    return `${units[array[0]]} hundred ${tens[array[1]]} ${units[array[2]]}`
  }
}

const units = [
  "", "one", "two",
  "three", "four", "five",
  "six", "seven", "eight",
  "nine", "ten", "eleven",
  "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen"
];

const tens = ["", 1,
  "twenty", "thirty", "forty",
  "fifty", "sixty", "seventy",
  "eighty", "ninety"
]