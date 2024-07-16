import {DeathCauses, MatchInfo} from "./index";

export const separateKillsByMeans = (match: string[]): MatchInfo['kills_by_means'] => {

    const kills_by_means: MatchInfo['kills_by_means'] = {};

    match.forEach(line => {
        if (line.match(' killed ') && line.match(' by ') && !line.match('<world>')) {
            const cause = line.split(' by ')[1] as DeathCauses;
            const currentDeathNumber = kills_by_means[cause];
            kills_by_means[cause] = currentDeathNumber ? currentDeathNumber + 1 : 1;
        }
    });

    return kills_by_means;


}
