export const countPlayerKills = (player: string, lines: string[]): number => {

    const playerKills = lines.filter(line => {
        const playerKilledSomeone = line.match(`${player} killed `);
        const killedHimself = line.match(`${player} killed ${player}`);
        return playerKilledSomeone && !killedHimself
    }).length;

    const playerDeathsByWorld = lines.filter(line => line.match(`<world> killed ${player}`)).length;

    return playerKills - playerDeathsByWorld;

}
