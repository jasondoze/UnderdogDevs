const assert = require("assert");
const { Console } = require("console");
const { captureRejections } = require("events");
const fs = require("fs");
const { report } = require("process");
const { resourceLimits } = require("worker_threads");
const text = fs.readFileSync("countries.txt");
const textByLine = text.toString().toLowerCase().split("\n");


function getCountriesWithUnitedInName(input) {
    var result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes("united")) {
            result.push(input[i]);
        }
    }
    return result;
}
console.log(getCountriesWithUnitedInName(textByLine));

function tests() {
    // let test_input = textByLine;
    // let actual_test_output = getCountriesWithUnitedInName(test_input)
    // let expected_test_output = ['botswana', 'italy', 'south korea'];
    // assert.equal(actual_test_output.length, 3);
    // assert.deepEqual(actual_test_output, expected_test_output, "assert failed"); // fail
    // console.log("tests completed correctly");

    // assert.equal(actual, expected, message)
    let test_input = textByLine;
    let expected_test_output = ['united arab emirates', 'united kingdom', 'united states of america'];
    let actual_test_output = getCountriesWithUnitedInName(test_input);
    assert.equal(actual_test_output.length, 3);
    assert.deepEqual(actual_test_output, expected_test_output, "assert failed"); //pass
    console.log("tests completed correctly");
}
tests();
