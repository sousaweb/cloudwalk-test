const count = require("./separateKillsByMeans");

const testData = [
    `20:54 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT`,
    `22:06 Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH`,
    `1:08 Kill: 3 2 6: Isgalamido killed Mocinha by MOD_ROCKET`
]

describe('separateKillsByMeans', () => {


    it('Should fill the object with proper death causes', () => {

        expect(count.separateKillsByMeans(testData)).toHaveProperty('MOD_ROCKET_SPLASH');
        expect(count.separateKillsByMeans(testData)).toHaveProperty('MOD_ROCKET');

    });

    it('Should count the death cause properly', () => {

        expect(count.separateKillsByMeans(testData)['MOD_ROCKET_SPLASH']).toEqual(1);
        expect(count.separateKillsByMeans(testData)['MOD_ROCKET']).toEqual(1);

    });

    it('Should not fill the object with <world> death causes if only <world> caused', () => {

        expect(count.separateKillsByMeans(testData)).not.toHaveProperty('MOD_TRIGGER_HURT');

    });

})
