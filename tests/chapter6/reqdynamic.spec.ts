import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { formatAPIRequest } from "../utils/APIHelper";
import { faker } from '@faker-js/faker'; // Ensure installed

test.describe.configure({ mode: 'serial' });

test.describe('API Tests with Dynamic Request Body', () => {

  test.use({
    baseURL: process.env.BASE_API_URL // Make sure it's defined
  });

  test('POST /booking with static dynamic values', async ({ request }) => {
    const filePath = path.join(__dirname, '../testDatas/api_requests/Dynamic_POST_API_Request.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const values = ['testers', 'kazannaaaa', '1000'];
    const formattedRequest = await formatAPIRequest(fileContent, values);
    const requestBody = JSON.parse(formattedRequest);

    const response = await request.post('/booking', { data: requestBody });
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    console.log('API response:', JSON.stringify(responseBody, null, 2));

    expect(responseBody).toHaveProperty('booking');
    expect(responseBody.bookingid).toBeGreaterThan(0);
    expect(responseBody.booking.firstname).toBe('testers');
    expect(responseBody.booking.lastname).toBe('kazannaaaa');
  });

  test('POST /booking with faker-generated dynamic values', async ({ request }) => {
    const filePath = path.join(__dirname, '../testDatas/api_requests/Dynamic_POST_API_Request.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });

    const values = [firstName, lastName, totalPrice];
    const formattedRequest = await formatAPIRequest(fileContent, values);
    const requestBody = JSON.parse(formattedRequest);

    const response = await request.post('/booking', { data: requestBody });
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    console.log('Faker-based API response:', JSON.stringify(responseBody, null, 2));

    expect(responseBody).toHaveProperty('booking');
    expect(responseBody.bookingid).toBeGreaterThan(0);
    expect(responseBody.booking.firstname).toBe(firstName);
    expect(responseBody.booking.lastname).toBe(lastName);

    // Optional: add more validations if required
    expect(responseBody.booking.bookingdates).toHaveProperty('checkin');
    expect(responseBody.booking.bookingdates).toHaveProperty('checkout');
    expect(responseBody.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(responseBody.booking.bookingdates.checkout).toBe('2025-01-17');
  });

});
