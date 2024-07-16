"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const separateMatches_1 = require("./separateMatches");
const countTotalKills_1 = require("./countTotalKills");
const countPlayerKills_1 = require("./countPlayerKills");
const separateKillsByMeans_1 = require("./separateKillsByMeans");
const parseUniquePlayers_1 = require("./parseUniquePlayers");
const mountAllMatchesInformation = (allMatches) => {
    const allMatchesObject = {};
    allMatches.forEach((match, index) => {
        const key = index + 1;
        const players = (0, parseUniquePlayers_1.parseUniquePlayers)(match);
        const total_kills = (0, countTotalKills_1.countTotalKills)(match);
        const kills = {};
        players.forEach((player) => {
            kills[player] = (0, countPlayerKills_1.countPlayerKills)(player, match);
        });
        const kills_by_means = (0, separateKillsByMeans_1.separateKillsByMeans)(match);
        allMatchesObject[`game_${key}`] = {
            total_kills,
            players,
            kills,
            kills_by_means,
        };
    });
    return allMatchesObject;
};
(0, separateMatches_1.separateMatches)().then((allMatches) => {
    console.log(mountAllMatchesInformation(allMatches));
});
