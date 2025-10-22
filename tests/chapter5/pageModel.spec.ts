// Import playwright module
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
import {WRITEon} from '../pages/homepage';
import { Seeon } from '../pages/result';
import { Answers } from '../pages/playlist';
/**
 * Author Testers Talk
 */
test.setTimeout(180000);
test('TypeScript Test', async ({ page }) => {
    // homepg
const use = new WRITEon(page);
await use.gotourl();
await use.fanyags(`${process.env.searchterm}`);
await page.pause();

// result
const see = new Seeon(page);
await see.clickChoice(`${process.env.searchterm}`);

// asnsews
const anja = new Answers(page);
await anja.validateTT(`${process.env.searchterm}` + '☑️ - YouTube');

});