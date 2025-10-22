// Import playwright module
import {test, expect} from "../fixture/testfixture";
import dotenv from 'dotenv';
dotenv.config();

test.setTimeout(180000);
test('fixtures', async ({playlist,result,homePage,}) => {
    console.log('🟡 Global before test is running...');

await homePage.gotourl();
await homePage.fanyags(`${process.env.searchterm}`);

// await result.clickChoice(`${process.env.searchterm}`);


// await playlist.validateTT(`${process.env.searchterm}` + '☑️ - YouTube');
console.log('🟢 Global after test is done running...');
});