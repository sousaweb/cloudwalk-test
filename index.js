const fs = require('fs');
const readline = require('readline');

const readLines = async () => {
    const fileStream = fs.createReadStream('./qgames.log');

    const rl = readline.createInterface({
        input: fileStream,
    });

    const linesAsArray = [];

    for await (const line of rl) {
        linesAsArray.push(line);
    }

    return linesAsArray;

}


const separateMatches = async () => {
    const fileLines = await readLines();

    const separatedMatchesLines = [];
    let temporaryMatch = [];
    let firstIndexMatch = undefined;

    fileLines.forEach((line, index) => {

        if (line.match('InitGame')) {
            firstIndexMatch = index;
        } else if (firstIndexMatch !== undefined) {
            if (line.match('ShutdownGame')) {
                firstIndexMatch = undefined;
                separatedMatchesLines.push(temporaryMatch);
                temporaryMatch = [];
            } else {
                temporaryMatch.push(line)
            }
        } else {

        }

    });

    return separatedMatchesLines;

}


separateMatches().then( separated => {

    console.log(separated);

})
