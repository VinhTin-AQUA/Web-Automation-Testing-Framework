// import { test, expect } from '@playwright/test';

import { test, expect } from '../../../src/fixtures';
import {
	RegisterExistEmailTestData,
	RegisterInvalidEmailTestData,
	RegisterInvalidNameTestData,
	RegisterRequiredEmailTestData,
	RegisterValidTestData,
} from '../../../src/test-data/register.test-data';

test.describe('Register with Valid Info', () => {
	for (const data of RegisterValidTestData) {
		test(`REGISTER-001 - ${data.id}`, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.register(data.name, data.email);

			// assertions
			await expect(loginPage.page).toHaveURL('/signup');
		});
	}
});

// test.describe('Register with Invalid email', () => {
// 	for (const data of RegisterInvalidEmailTestData) {
// 		test(`REGISTER-002 - ${data.id}`, async ({ loginPage }) => {
// 			await loginPage.goto();

// 			await loginPage.register(data.email, data.name);

// 			// assertions
// 			await expect(loginPage.emailSignupInput).toHaveJSProperty(
// 				'validity',
// 				expect.objectContaining({
// 					typeMismatch: true,
// 					valid: false,
// 				}),
// 			);
// 		});
// 	}
// });

// test.describe('Register with Invalid name', () => {
// 	for (const data of RegisterInvalidNameTestData) {
// 		test(`REGISTER-003 - ${data.id}`, async ({ loginPage }) => {
// 			await loginPage.goto();

// 			await loginPage.register(data.email, data.name);

// 			// assertions
// 			await expect(loginPage.nameSignupInput).toHaveJSProperty(
// 				'validity',
// 				expect.objectContaining({
// 					valueMissing: true,
// 				}),
// 			);
// 		});
// 	}
// });

// test.describe('Register with Required field validation', () => {
// 	for (const data of RegisterRequiredEmailTestData) {
// 		test(`REGISTER-004 - ${data.id} - ${data.name}`, async ({ loginPage }) => {
// 			await loginPage.goto();

// 			await loginPage.register(data.email, data.name);

// 			if (!data.email.trim()) {
// 				await expect(loginPage.emailSignupInput).toHaveJSProperty(
// 					'validity',
// 					expect.objectContaining({
// 						valueMissing: true,
// 						valid: false,
// 					}),
// 				);
// 			}

// 			if (!data.name.trim()) {
// 				await expect(loginPage.nameSignupInput).toHaveJSProperty(
// 					'validity',
// 					expect.objectContaining({
// 						valueMissing: true,
// 						valid: false,
// 					}),
// 				);
// 			}
// 		});
// 	}
// });

// test.describe('Register with Existing email', () => {
// 	for (const data of RegisterExistEmailTestData) {
// 		test(`REGISTER-005 - ${data.id} - ${data.name}`, async ({ loginPage }) => {
// 			await loginPage.goto();

// 			await loginPage.register(data.email, data.name);

// 			await expect(loginPage.emailSignupExistsError).toContainText('already exist');
// 		});
// 	}
// });
