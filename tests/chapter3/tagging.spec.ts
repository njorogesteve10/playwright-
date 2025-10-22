import {test,expect} from "@playwright/test";
// with tags you can use them to run the test when you want to exclude several tests
// you can run using tags and the tests with the similar tag names will run and exclude the 
// test with unique tags you use this command to run the test when you have several tests that 
// have similar tag names and some with unique ones you use the tag to exclude them
// npx playwright test --grep '@books register' in our case it will run two tests and exclude one
// to run the same test several times to either check the stability of the web app or whatever the reason you use this command
// npx playwright test chapter3/grouping,spec.ts --repeat-each=2
// you can do it many times bringing the idea of playwright paralled execution to life
    test('search and go to Playwright by Testers Talk', {tag:'@books register'},  async ({ page }) => {
        // Build absolute path to a "screenshots" folder next to this test file
        // Go to the YouTube playlist
        await page.goto('https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM', {
          waitUntil: 'domcontentloaded',
        });
      
})

  // Wait for the header to appear
    test( 'using things to get', {tag:['@books register', '@class attendance']}, async({page}) => {

        await page.goto('https://www.google.com/');
        await page.getByTitle('Search by image').click();
    
        
        
    });
  
    test('to see', {tag:'@chess champions attendance'}, async({page}) => {

        await page.goto('https://www.google.com/');
        await page.getByTitle('Search by image').click();
    
        await page.getByPlaceholder('ytSearchboxComponentInputBox').click();
        await page.locator('input[@name="search_query"]').fill('hello');
        await page.locator('input[name="search_query"]').press('Enter');
    
        
    });