// Import playwright module
import {test} from "../fixture/testfixture";

/**
 * author Testers Talk
 */
test('Optimized Page Object Model Test in Playwright', async ({ page, homePage, result, playlist, testData }) => {

    // Go to URL & Search with keywords
    await homePage.gotourl();
await homePage.fanyags(`${process.env.searchterm}`);
    
    console.log(`Skill : ${String(testData.Module1TestData?.Skill1)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill2)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill3)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill4)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill5)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill6)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill7)}`);
});