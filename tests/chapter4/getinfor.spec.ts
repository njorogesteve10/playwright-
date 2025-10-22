import {test,expect} from "@playwright/test";

test('get infor', async({page}) =>{
    await page.goto('https://github.com/BakkappaN');
    const  name = await page.locator('[itemprop ="name"]').textContent();
    const finalname = name?.trim();
    console.log(`name is : ${finalname}`);

    const infor = await page.getByTestId('i1repositories-tab').first().hover();
    console.log(`name is : ${infor}`);



    // <a id="repositories-tab" href="/BakkappaN?tab=repositories" data-tab-item="i1repositories-tab" data-selected-links="repositories /BakkappaN?tab=repositories" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:22426896,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:151736045,&quot;originating_url&quot;:&quot;https://github.com/BakkappaN&quot;}}" data-hydro-click-hmac="3f82903d4216e4e4e24ea3677020e02ba280a58c7121542be3c9c747df7074c2" data-turbo-frame="user-profile-frame" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
//     <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo UnderlineNav-octicon">
//     <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
// </svg>
    //   <span data-view-component="true">Repositories</span>
    // <span title="29" data-view-component="true" class="Counter">29</span>
// </a>
})