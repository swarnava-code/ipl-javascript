import fs from 'fs';
var matchesFile = fs.readFileSync("./csv/matches.csv", "utf8");
var matchesData = matchesFile.split("\r\n");
const ID = 0,
    SEASON = 1,
    CITY = 2,
    DATE = 3,
    TEAM1 = 4,
    TEAM2 = 5,
    TOSS_WINNER = 6,
    TOSS_DECISION = 7,
    RESULT = 8,
    DL_APPLIED = 9,
    WINNER = 10,
    WIN_BY_RUNS = 11,
    WIN_BY_WICKETS = 12,
    PLAYER_OF_MATCH = 13,
    VENUE = 14,
    UMPIRE1 = 15,
    UMPIRE2 = 16,
    UMPIRE3 = 17;
let match = new Array(10);
var matchesData2d = new Array(matchesData.length - 1);

function makingMatches() {
    for (var i = 1; i < matchesData.length - 1; i++) {
        let row = matchesData[i].split(',');
        matchesData2d[i] = new Array(3);
        for (var col = 0; col <= 17; col++) {
            matchesData2d[i][col] = row[col];
        }
    }
}

const numberOfMatchesPlayedPerYearMap = new Map();

function printNumberOfMatchesPlayedPerYearOfAllTheYearsInIPL() {
    for (var i = 1; i < matchesData.length - 1; i++) {
        //console.log(matchesData2d[i][CITY]);
        var key = matchesData2d[i][SEASON];
        if (numberOfMatchesPlayedPerYearMap.has(key)) {
            var val = numberOfMatchesPlayedPerYearMap.get(key);
            val++;
            numberOfMatchesPlayedPerYearMap.set(key, val);
        } else {
            numberOfMatchesPlayedPerYearMap.set(key, 1);
        }
    }
    console.log(numberOfMatchesPlayedPerYearMap);
}

makingMatches();
printNumberOfMatchesPlayedPerYearOfAllTheYearsInIPL();