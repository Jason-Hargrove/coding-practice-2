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

// 6. Commas with spaces.
// let str = "Jason ,,,,,1976, Web Develper";
// 6. Regex grouping with space added to the group.
// let sp = str.split(/\s*,+\s*/); ---> [ 'Jason', '1976', 'Web Develper' ]

// 6. Second paramater of split(). The number of strings you get inside the resulting array.
let str = "Jason,, 1976, Web Develper";
// 6. The second paramater is the maximum number of retruned strings.
// let sp = str.split(/\s*,+\s*/, 2); ---> [ 'Jason', '1976' ]
// 6. Getting rid of the "+".
// let sp = str.split(/\s*,\s*/, 3); --> [ 'Jason', '', '1976' ]
let sp = str.split(/\s*,\s*/, 3);

console.log(sp);