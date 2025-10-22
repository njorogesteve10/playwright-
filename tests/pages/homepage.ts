import { Locator, Page } from "@playwright/test";


export class WRITEon {
    readonly page:Page;
    readonly searchb:Locator;
    readonly searchword: Locator;


    constructor (page: Page){
        this.page = page;
        this.searchb = page.locator('#APjFqb');
        this.searchword = page.locator('playwright by testers talk');
    }
     async gotourl(){
    await this.page.goto(`${process.env.googleurl}`);
    }
    
    async fanyags(searchword:string){
        await this.searchb.click();
        await this.searchb.fill(searchword);
        await this.searchb.press('Enter');
    }
}