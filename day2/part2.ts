import fs from "fs";
const text = fs.readFileSync("./data.txt","utf-8").split(/\r?\n/)

const example = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
]

console.log(main(text))
function main(text:string[]){
    const reduced = text.reduce((acc, line)=>{
        // Get rounds
        const rounds = line.split(':')[1].split(';')
        // Get the max val of every round
        const maxVal = { red: 0, green: 0, blue:0}

        rounds.forEach((rnd)=>{
            const differentColors = rnd.split(",");
            // Check colors and ammount
            differentColors.forEach(tuple=>{
                const data = tuple.split(" ")
                const number = data[1];
                const color = data[2] as keyof typeof maxVal;
                let possibleN = maxVal[color]
                if(parseInt(number) >possibleN) maxVal[color] = +number 
            })
        })
        return acc + Object.values(maxVal).reduce((sum, n)=> sum * n, 1)
    }, 0)
    return reduced
}