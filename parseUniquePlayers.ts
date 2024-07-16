export const parseUniquePlayers = (matchLines: string[]) => {

    const linesMatchingPlayerJoined = matchLines.filter((line) => line.match('ClientUserinfoChanged'));
    const allPlayers = linesMatchingPlayerJoined.map(line => line.split('n\\')[1].split('\\t')[0]);

    const uniquePlayers = [...new Set(allPlayers)];

    return uniquePlayers;

}
