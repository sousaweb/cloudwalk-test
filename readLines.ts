import fs from "fs";
import readline from "readline";

export const readLines = async (): Promise<string[]> => {
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
