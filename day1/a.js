"use strict";
const fs = require("fs")

const numbers = {
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

const example = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
];

function day2(data) {
    const digits = transformLines(data);
    return digits.reduce((acc, cur) => acc + cur, 0);
}

function transformLines(data) {
    const numbersArray = convertStringToNumbers(data);
    const digitsArray = convertNumbersToDigits(numbersArray);
    return digitsArray;
}

function convertStringToNumbers(data) {
    const numbersArray = data.map((line) => {
        for (const key in numbers){
            line = line.replace(key,numbers[key])
        }
        return line;
    });
    return numbersArray;
}

/*
    const numbersArray = data.map((line) => {
        for (let i = 0; i < keys.length; i++) {
            let substring = keys[i];
            let numberStr = numbers[substring];
            line = line.replace(substring, numberStr);
        }
        return line;
    });
    return numbersArray;
*/

function convertNumbersToDigits(data) {
    const mappedData = data.map((line) => {
        let firstDigit = line.split("").find(v=> !Number.isNaN(Number(v)))
        let lastDigit = line.split("").findLast(v=>!Number.isNaN(Number(v)))

        return Number(firstDigit + lastDigit);
    });
    return mappedData;
}

const stream = fs.readFileSync("./data.txt","utf8")
const splittedContent = stream.trim().split(/\r?\n/);

console.log(day2(splittedContent));
