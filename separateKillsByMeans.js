"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separateKillsByMeans = void 0;
const separateKillsByMeans = (match) => {
    const kills_by_means = {};
    match.forEach(line => {
        if (line.match(' killed ') && line.match(' by ') && !line.match('<world>')) {
            const cause = line.split(' by ')[1];
            const currentDeathNumber = kills_by_means[cause];
            kills_by_means[cause] = currentDeathNumber ? currentDeathNumber + 1 : 1;
        }
    });
    return kills_by_means;
};
exports.separateKillsByMeans = separateKillsByMeans;
