import { Locator, Page } from "@playwright/test";


export class Seeon {
    readonly page:Page;
    


    constructor (page: Page){
        this.page = page;
       
    }
   
    async clickChoice(link: string) {
        const locator = this.page.getByRole('link', { name: link }).first();
      
        // Wait for the element to appear
        await locator.waitFor({ state: 'visible', timeout: 30000 });
      
        // Then click it
        await locator.click();
      }
      
}