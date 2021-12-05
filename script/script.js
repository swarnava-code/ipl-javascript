import fileSystem from 'fs';
var matchesFile = fileSystem.readFileSync("./csv/matches.csv", "utf8");
var matchesData = matchesFile.split("\r\n");
var matchesData2d = new Array(matchesData.length - 1);
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

function makingMatches() {
    for (var i = 1; i < matchesData.length - 1; i++)
        matchesData2d[i] = matchesData[i].split(',');
}

var deliveriesFile = fileSystem.readFileSync("./csv/deliveries.csv", "utf8");
var deliveriesData = deliveriesFile.split("\r\n");

var deliveriesData2d = new Array(deliveriesData.length - 1);
const MATCH_ID = 0,
    INNING = 1,
    BATTING_TEAM = 2,
    BOWLING_TEAM = 3,
    OVER = 4,
    BALL = 5,
    BATSMAN = 6,
    NON_STRIKER = 7,
    BOWLER = 8,
    IS_SUPER_OVER = 9,
    WIDE_RUNS = 10,
    BYE_RUNS = 11,
    LEGBYE_RUNS = 12,
    NOBALL_RUNS = 13,
    PENALTY_RUNS = 14,
    BATSMAN_RUNS = 15,
    EXTRA_RUNS = 16,
    TOTAL_RUNS = 17,
    PLAYER_DISMISSED = 18,
    DISMISSAL_KIND = 19,
    FIELDER = 20;

function makingDeliveries() {
    for (var i = 1; i < deliveriesData.length - 1; i++) {
        //let row2 = deliveriesData[i].split(',');
        deliveriesData2d[i] = deliveriesData[i].split(',')
    }
}


function printNumberOfMatchesPlayedPerYearOfAllTheYearsInIPL() {
    const numberOfMatchesPlayedPerYearMap = new Map();
    for (var i = 1; i < matchesData2d.length - 1; i++) {
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

function printNumberOfMatchesWonOfAllTeamsOverAllTheYearsOfIPL() {
    const trackNoOfMatchesWinByTeamMap = new Map();
    var winner = "";
    var count = 0;
    for (var i = 1; i < matchesData2d.length - 1; i++) {
        winner = matchesData2d[i][WINNER];
        if (trackNoOfMatchesWinByTeamMap.has(winner)) {
            trackNoOfMatchesWinByTeamMap.set(winner, trackNoOfMatchesWinByTeamMap.get(winner) + 1);
        } else {
            trackNoOfMatchesWinByTeamMap.set(winner, 1);
        }
    }
    console.log(trackNoOfMatchesWinByTeamMap);
}

function printTheExtraRunsConcededPerTeamForParticularYear(targetYear) {
    const listOfIdAndWinner = new Map();

    var winner = "";
    var countExtraRun = 0,
        extraRun = 0;
    var matchId;

    for (var rowNo = 1; rowNo < matchesData2d.length - 1; rowNo++) {
        var season = matchesData2d[rowNo][SEASON];
        if (season == (targetYear)) {
            listOfIdAndWinner.set(matchesData2d[rowNo][ID], matchesData2d[rowNo][WINNER]);
        }
    }

    const trackExtraRun = new Map();

    for (var rowNo = 1; rowNo < deliveriesData2d.length - 1; rowNo++) {
        const matchId = deliveriesData2d[rowNo][MATCH_ID];

        if (listOfIdAndWinner.has(matchId)) {
            winner = listOfIdAndWinner.get(matchId);
            extraRun = parseFloat(deliveriesData2d[rowNo][EXTRA_RUNS]);
            if (trackExtraRun.has(winner))
                var val = trackExtraRun.get(winner);
            trackExtraRun.set(winner, (val + extraRun));
        } else {
            trackExtraRun.set(winner, 0);
        }
        countExtraRun += extraRun;
    }

    console.log(trackExtraRun);



}


makingMatches();
makingDeliveries();
//printNumberOfMatchesPlayedPerYearOfAllTheYearsInIPL();
//printNumberOfMatchesWonOfAllTeamsOverAllTheYearsOfIPL();
//printTheExtraRunsConcededPerTeamForParticularYear(2016);