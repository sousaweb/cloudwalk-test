"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUniquePlayers = void 0;
const parseUniquePlayers = (matchLines) => {
    const linesMatchingPlayerJoined = matchLines.filter((line) => line.match('ClientUserinfoChanged'));
    const allPlayers = linesMatchingPlayerJoined.map(line => line.split('n\\')[1].split('\\t')[0]);
    const uniquePlayers = [...new Set(allPlayers)];
    return uniquePlayers;
};
exports.parseUniquePlayers = parseUniquePlayers;
