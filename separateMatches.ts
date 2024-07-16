import {readLines} from "./readLines";

export const separateMatches = async (): Promise<string[][]> => {
    const fileLines = await readLines();

    const separatedMatchesLines: string[][] = [];
    let temporaryMatch: string[] = [];
    let firstIndexMatch: number | undefined = undefined;

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
        }

    });

    return separatedMatchesLines;

}
