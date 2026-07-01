import { test, expect } from '../../../src/fixtures';
import { InvalidCredentials, InvalidEmailData, RequiredFieldValidationData, ValidRegisterInformationData } from '../../../src/test-data/login.test-data';


test.describe('Valid register information', () => {
	for (const data of ValidRegisterInformationData) {
		test(`LOGIN-001 - ${data.id}`, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.login(data.email, data.password);

			// assertions
			await expect(loginPage.page).toHaveURL('/');
		});
	}
});

test.describe('Required field validation', () => {
	for (const data of RequiredFieldValidationData) {
		test(`LOGIN-002 - ${data.id}`, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.login(data.email, data.password);

			// assertions
			await expect(loginPage.page).not.toHaveURL('/');
		});
	}
});

test.describe('Invalid email', () => {
	for (const data of InvalidEmailData) {
		test(`LOGIN-003 - ${data.id}`, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.login(data.email, data.password);

			// assertions
			await expect(loginPage.page).not.toHaveURL('/');
		});
	}
});


test.describe('Invalid credentials', () => {
	for (const data of InvalidCredentials) {
		test(`LOGIN-004 - ${data.id}`, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.login(data.email, data.password);

			// assertions
			await expect(loginPage.page).not.toHaveURL('/');
		});
	}
});

// https://automationexercise.com/
// https://automationexercise.com/login