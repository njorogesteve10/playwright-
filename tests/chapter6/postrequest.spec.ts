import {test,expect} from "@playwright/test";
import PostApiRequest from "../testDatas/api_requests/POST_REQUEST_API.json";

test.use({
    baseURL: process.env.BASE_API_URL
})
test('post request', async({request}) =>{
    const postRenponse = await request.post('/booking', {data:PostApiRequest});
    const jsonPostResponse = await postRenponse.json();
    console.log(`the test response is: `+JSON.stringify(jsonPostResponse,null,2))

    // expect(postRenponse.status()).toBe(200);
    // expect(postRenponse.statusText()).toBe('OK');
    // expect(postRenponse.headers()['content-type']).toContain('application/json');
    expect(jsonPostResponse).toHaveProperty('booking');
    expect(jsonPostResponse.booking).toHaveProperty('bookingdates');
    expect(jsonPostResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPostResponse.booking.bookingdates).toHaveProperty('checkout');

  expect(jsonPostResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPostResponse.booking.firstname).toBe('steve');
  expect(jsonPostResponse.booking.lastname).toBe('mwenda');
  expect(jsonPostResponse.booking.bookingdates.checkin).toBe('2018-01-01');


})