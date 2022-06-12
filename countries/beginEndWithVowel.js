const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");

//  What countries both begin and end with a vowel?
function vowel(input) {
    // create an empty arr varible
    let countries = [];
    // iterate throught the array
   for (let i = 0; i < input.length; i++) {
         // if the first letter is a vowel
         if (input[i].startsWith("a") || input[i].startsWith("e") || input[i].startsWith("i") || input[i].startsWith("o") || input[i].startsWith("u")) {
                // if the last letter is a vowel
                if (input[i].endsWith("a") || input[i].endsWith("e") || input[i].endsWith("i") || input[i].endsWith("o") || input[i].endsWith("u")) {
                    // push the country to the array
                    countries.push(input[i]);
                }
            }
        }
    return countries;
}
console.log(vowel(textByLine));