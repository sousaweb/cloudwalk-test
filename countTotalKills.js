"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countTotalKills = void 0;
const countTotalKills = (matchLines) => {
    const linesMatching = matchLines.filter((line) => line.match(' killed '));
    return linesMatching.length;
};
exports.countTotalKills = countTotalKills;
