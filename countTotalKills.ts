export const countTotalKills = (matchLines: string[]) => {

    const linesMatching = matchLines.filter((line) => line.match(' killed '));

    return linesMatching.length;

}
