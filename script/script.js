import fs from 'fs';

var matches = fs.readFileSync("script/csv/matches.csv");
var matches_data = matches.split("\r\n");
console.log(matches_data);


// console.log(myFunction());

// const reader = new FileReader();

// reader.onload = function(event) {
//     console.log(event.target.result); // the CSV content as string
// };

// reader.readAsText(file);