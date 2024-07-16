import {separateMatches} from "./separateMatches";
import {countTotalKills} from "./countTotalKills";
import {countPlayerKills} from "./countPlayerKills";
import {separateKillsByMeans} from "./separateKillsByMeans";
import {parseUniquePlayers} from "./parseUniquePlayers";

export type DeathCauses =
    'MOD_UNKNOWN' |
    'MOD_SHOTGUN' |
    'MOD_GAUNTLET' |
    'MOD_MACHINEGUN' |
    'MOD_GRENADE' |
    'MOD_GRENADE_SPLASH' |
    'MOD_ROCKET' |
    'MOD_ROCKET_SPLASH' |
    'MOD_PLASMA' |
    'MOD_PLASMA_SPLASH' |
    'MOD_RAILGUN' |
    'MOD_LIGHTNING' |
    'MOD_BFG' |
    'MOD_BFG_SPLASH' |
    'MOD_WATER' |
    'MOD_SLIME' |
    'MOD_LAVA' |
    'MOD_CRUSH' |
    'MOD_TELEFRAG' |
    'MOD_FALLING' |
    'MOD_SUICIDE' |
    'MOD_TARGET_LASER' |
    'MOD_TRIGGER_HURT' |
    'MISSIONPAC' |
    'MOD_NAIL' |
    'MOD_CHAINGUN' |
    'MOD_PROXIMITY_MINE' |
    'MOD_KAMIKAZE' |
    'MOD_JUICED' |
    'MOD_GRAPPL';

export interface MatchInfo {
    total_kills: number;
    players: string[];
    kills: { [key: string]: number };
    kills_by_means: { [key in DeathCauses]?: number };
}

type MatchInfoObject = { [key: string]: MatchInfo };


const mountAllMatchesInformation = (allMatches: string[][]) => {

    const allMatchesObject: MatchInfoObject = {};

    allMatches.forEach((match, index) => {

        const key = index + 1;
        const players = parseUniquePlayers(match);
        const total_kills = countTotalKills(match);
        const kills: { [key: string]: number } = {};

        players.forEach((player) => {
            kills[player] = countPlayerKills(player, match);
        });

        const kills_by_means = separateKillsByMeans(match);

        allMatchesObject[`game_${key}`] = {
            total_kills,
            players,
            kills,
            kills_by_means,
        };

    });

    return allMatchesObject;

}

separateMatches().then((allMatches) => {

    console.log(mountAllMatchesInformation(allMatches));

})
