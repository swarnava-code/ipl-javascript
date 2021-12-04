import fs from 'fs';
var matches = fs.readFileSync("./csv/matches.csv", "utf8");
var matches_data = matches.split("\r\n");

let match = new Array(10);

var x = new Array(matches_data.length - 1);
for (var i = 1; i < matches_data.length - 1; i++) {
    let row = matches_data[i].split(',');
    match.id = row[0];
    match.season = row[1];
    match.city = row[2];

    x[i] = new Array(3);
    x[i][0] = row[0];
    x[i][1] = row[1];
    x[i][2] = row[2];

    console.log(row[0] + ":" + row[1] + ":" + row[2] + ":");

}

console.log("print:\n" + x);



// console.log(myFunction());
// const reader = new FileReader();
// reader.onload = function(event) {
//     console.log(event.target.result); // the CSV content as string
// };
// reader.readAsText(file);