// Import playwright module
import { test, expect } from '@playwright/test';

import { getPOSTAPIRequestBody } from '../utils/APIHelper';
import { faker } from '@faker-js/faker';
import TokenKeys from "../testDatas/api_requests/Token_API_Request.json";

test.use({
    baseURL: process.env.BASE_API_URL,
})

/**
 * Author Testers Talk
 */
test('Create TypeSafety POST API Request using dynamic api request body in playwright & typescript', async ({ request }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice,
        true, "breakfast", "2025-01-25", "2025-01-27");

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');

    const tokeninfo = await request.post('/auth', { data:TokenKeys});
    expect(tokeninfo.status()).toBe(200);
    expect(tokeninfo.statusText()).toBe('OK');

     const tokenjs = await tokeninfo.json();
     console.log('your token is here baby' + JSON.stringify(tokenjs));
});