
import fs from "fs";

const text = fs.readFileSync("./data.txt","utf-8").split(/\r?\n/)
const example = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
]

const rules = {
    red:12,
    green:13,
    blue:14
}

// only 12 red cubes, 13 green cubes, and 14 blue cubes

console.log(main(text))
function main(text:string[]){
    // Check if game passes test, if it does sum it to the final
    const reduced = text.reduce((sumOfIDs, line)=>{
        // Separate two parts
        const rounds = line.split(':')[1].split(';')
        const gameID = parseInt(line.split(':')[0].slice(5))

        // Check every round
        return rounds.every((rnd)=>{
            const differentColors = rnd.split(",");
            // Check by by color and ammount
            return differentColors.every(tuple=>{
                const [ _ , number, color ] = tuple.split(" ")
                return parseInt(number) <= rules[color as keyof typeof rules]
            })
        }) ? sumOfIDs + gameID : sumOfIDs
    }, 0)
    return reduced
}