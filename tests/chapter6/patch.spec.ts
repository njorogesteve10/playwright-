// Import playwright module
import { test, expect } from '@playwright/test';

import { getPOSTAPIRequestBody } from '../utils/APIHelper';
import { faker } from '@faker-js/faker';
import TokenKeys from "../testDatas/api_requests/Token_API_Request.json";

test.use({
  baseURL: process.env.BASE_API_URL,
});

/**
 * Author: Testers Talk
 */
test('Create TypeSafety POST API Request using dynamic API request body in Playwright & TypeScript', async ({ request }) => {

  // Step 1: Generate fake user data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int({ min: 1000, max: 10000 });

  const postAPIRequest = await getPOSTAPIRequestBody(
    firstName, 
    lastName, 
    totalPrice,
    true, 
    "breakfast", 
    "2025-01-25", 
    "2025-01-27"
  );

  // Step 2: Create booking
  const postAPIResponse = await request.post(`/booking`, {
    data: postAPIRequest
  });

  const jsonPOSTAPIResponse = await postAPIResponse.json();
  console.log('POST API Response:', JSON.stringify(jsonPOSTAPIResponse, null, 2));

  expect(postAPIResponse.status()).toBe(200);
  expect(postAPIResponse.statusText()).toBe('OK');
  expect(postAPIResponse.headers()['content-type']).toContain('application/json');

  expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
  expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');

  const bookingId = jsonPOSTAPIResponse.bookingid;

  // Step 3: Authenticate and get token
  const tokeninfo = await request.post('/auth', { data: TokenKeys });
  expect(tokeninfo.status()).toBe(200);
  expect(tokeninfo.statusText()).toBe('OK');

  const tokenjs = await tokeninfo.json();
  console.log('Your token is:', JSON.stringify(tokenjs));

  const token = tokenjs.token;

  // Step 4: PATCH request to update booking
  const patchPayload = {
    firstname: "UpdatedFirst",
    lastname: "UpdatedLast"
  };

  console.log('Sending PATCH data:', JSON.stringify(patchPayload, null, 2));

  const patchAPIResponse = await request.patch(`/booking/${bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
    data: patchPayload,
  });

  expect(patchAPIResponse.status()).toBe(200);
  expect(patchAPIResponse.statusText()).toBe('OK');

  const patchAPIJSONResponse = await patchAPIResponse.json();
  console.log('PATCH API Response:', JSON.stringify(patchAPIJSONResponse, null, 2));

  // Step 5: Validate PATCH response
  expect(patchAPIJSONResponse.firstname).toBe("UpdatedFirst");
  expect(patchAPIJSONResponse.lastname).toBe("UpdatedLast");

// delete api request
  const DeleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    },
  });

  expect(DeleteAPIResponse.status()).toBe(201);
  expect(DeleteAPIResponse.statusText()).toBe('Created');

  console.log('DELETE API Response : ' + await DeleteAPIResponse.body());

});
