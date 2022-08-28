
let indexOfSubString1 = 'Google'.indexOf('Goog');
console.log('index where substring is found:', indexOfSubString1);

let indexOfSubString2 = "In defense of one's principles".indexOf('e');
console.log('index where substring is first found:', indexOfSubString2);

let indexOfSubString3 = "In defense of one's principles".indexOf('e', 7);
console.log(
  'index where substring is found, after a certain point in string:',
  indexOfSubString3
);

let indexOfSubStringNotPresent = 'Oceanic'.indexOf('xyz');
console.log('index if substring is not present:', indexOfSubStringNotPresent);

console.log('===================================================');
let DNAStrand = "ATGCGCTAA";
let stopCodon = "TAA";
let indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log('index where stop codon is found with gene sequence:', indexOfStopCodon);

console.log('===================================================');
let DNAStrand1 = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
let stopCodon1 = "TAA";
let indexOfFirstStopCodon1 = DNAStrand1.indexOf(stopCodon1);

let indexOfSecondStopCodon1 = DNAStrand1.indexOf(stopCodon1, indexOfFirstStopCodon1 + 1)

console.log('index where second stop codon is found with gene sequence:', indexOfSecondStopCodon1);

console.log('===================================================');