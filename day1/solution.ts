import fs from "fs"

const array = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

function day1(data: string[]) {
    const digits = convertToDigits(data);

    return digits.reduce((prev,curr)=>prev+curr,0)
}

const convertToDigits = (data: string[]) => {
  //  Read line by line
  const mappedData = data.map((line) => {
    const letters = line.split("");
    let digit = "";
    for (let i = 0; i < letters.length; i++) {
      if (!Number.isNaN(+letters[i])) {
        digit += letters[i];
        break;
      }
    }
    for (let i = letters.length - 1; i >= 0; i--) {
      if (!Number.isNaN(+letters[i])) {
        digit += letters[i];
        break;
      }
    }

    return Number(digit);
  });

  return mappedData
};


const stream = fs.readFileSync("./data.txt","utf-8")
const splittedContent = stream.split(/\r?\n/);

console.log(day1(splittedContent));
