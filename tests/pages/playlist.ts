import {Page,expect } from "@playwright/test";


export class Answers {
    readonly page:Page;
    


    constructor (page: Page){
        this.page = page;
       
    }
   
    async validateTT(title:string){
        await expect(this.page).toHaveTitle(title);
    }
}