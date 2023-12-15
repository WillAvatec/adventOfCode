import fs from "fs"

const example = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

function day2(data: string[]) {
  const digits = transformLines(data);

  return digits.reduce((acc, cur) => acc + cur, 0);
}

function transformLines(data: string[]) {
  const numbersArray = convertStringToNumbers(data);
  const digitsArray = convertNumbersToDigits(numbersArray);
  return digitsArray;
}

interface INumbers {
  [key: string]: string | undefined
}

const numbers: INumbers = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
};

const keys = Object.keys(numbers);

function convertStringToNumbers(data: string[]) {
  const digits = data.map((line) => {
        for(const key in numbers){
            line = line.replaceAll(key,numbers[key] as string)
        }
        return line
  });

  return digits;
}

function convertNumbersToDigits(data: string[]) {
  const mappedData = data.map((line) => {
    const letters = line.split("");
    const firstDigit = letters.find(v=>!Number.isNaN(Number(v)))!
    const lastDigit = letters.findLast(v=>!Number.isNaN(Number(v)))!

    return Number(firstDigit + lastDigit);
  });

  return mappedData;
}

const stream = fs.readFileSync('./data.txt',"utf-8").trim().split(/\r?\n/)

console.log(day2(stream))