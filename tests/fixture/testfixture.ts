import {test as base, expect} from '@playwright/test';
import { WRITEon as homePage } from '../pages/homepage';
import { Answers as playlistPage } from '../pages/playlist';
import { Seeon as resultPage } from '../pages/result';
import { TestData } from '../fixture/interface/Module1TestData.interface';
import { loadTestData } from '../utils/JsonHelper';

export const test = base.extend<{
    savelog: void;
    homePage: homePage;
    playlist: playlistPage;
    result: resultPage;
}>
({
savelog: [async({}, use) =>{
    console.log('🔹 Setting up custom fixture');
    await use();
    console.log('🔸 Tearing down custom fixture');
   },
{auto: true}],
homePage: async({page}, use)=>{
const homepage =  new homePage(page);
await use(homepage);
},
result: async({page}, use)=>{
    const result = new resultPage(page);
    await use(result);
},
playlist: async({page}, use)=>{
    const playlist = new playlistPage(page);
    await use(playlist);
}
})

export {expect} 
// "@playwright/test";