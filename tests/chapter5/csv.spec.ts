import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import path from 'path';
import fs from 'fs';

// 1️⃣ Define the expected structure of each CSV row
type themm = {
  id: string;
  skill1: string;
  skill2: string;
};

// 2️⃣ Read the CSV file text using fs
const csvFilePath = path.join(__dirname, '../../../test data/qa/testdata.csv');
const csvContent = fs.readFileSync(csvFilePath, 'utf8');

// 3️⃣ Parse the text into JavaScript objects
const csvData = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
}) as themm[];

// 4️⃣ Simple test to verify CSV data reading and structure
test('CSV parsing test - verify data structure and content', async () => {
  console.log('✅ Parsed CSV data:', csvData);

  // Ensure we got some data
  expect(csvData.length).toBeGreaterThan(0);

  // Ensure each object has all required keys
  for (const record of csvData) {
    expect(record).toHaveProperty('id');
    expect(record).toHaveProperty('skill1');
    expect(record).toHaveProperty('skill2');
    console.log(`Row -> id: ${record.id}, skill1: ${record.skill1}, skill2: ${record.skill2}`);
  }
});
