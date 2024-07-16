const count2 = require("./countTotalKills");

const testData2 = [
    `20:54 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT`,
    `22:06 Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH`,
    `1:08 Kill: 3 2 6: Isgalamido killed Mocinha by MOD_ROCKET`
]

describe('countTotalKills', () => {

    test('Should match the total kills length', () => {

        expect(count2.countTotalKills(testData2)).toEqual(3);

    })

})
