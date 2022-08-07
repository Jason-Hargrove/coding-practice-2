// 1 - 3
// let str = "Jason,1976,Web Develper";
// 1. Just turns it into an array.
// let sp = str.split(); ---> [ 'Jason,1976,Web Develper' ]

// 2. Will split at the letter 'a', and remove 'a'.
// let sp = str.split('a'); ---> [ 'J', 'son,1976,Web Develper' ]

// 3. Will split at the commas, and remove the commas.
// let sp = str.split(','); ---> [ 'Jason', '1976', 'Web Develper' ]


// 4. Double commas. 
// let str = "Jason,,1976,Web Develper";
// 4. let sp = str.split(','); ---> [ 'Jason', '1976', '', 'Web Develper' ]


// 5. 5 commas. 
// let str = "Jason,,,,,1976,Web Develper";
// 5. Use regex to split at every grouping of commas.
// Finding one or more commas in a sequence.
// "+"" means one or more, of what ever was before.
// let sp = str.split(/,+/); ---> [ 'Jason', '1976', 'Web Develper' ]


// console.log(sp);

let myName = "Jason";
const reverseName = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseName(myName));