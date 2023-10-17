// code your solution here

const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},  
];

function superbowlWin(record) {
    const found = record.find((element) => element.result === "W")
    if(found === undefined) {
        return undefined
    }
    return found.year
}
