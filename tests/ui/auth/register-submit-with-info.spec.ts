import { test, expect } from '../../../src/fixtures';
import {
	registerInvalidFirstNameData,
	registerInvalidLastNameData,
	registerInvalidMobileNumberData,
	registerInvalidPasswordData,
	registerRequiredFieldValidationData,
	registerWithoutCompanyData,
	registerWithoutDateOfBirthData,
	registerWithValidInfoData,
} from '../../../src/test-data/register-with-info.test-data';

test.describe('Valid register information', () => {
	for (const data of registerWithValidInfoData) {
		test(`REGISTER-WITH-INFO-001 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			// assertions
			await expect(registerPage.page).toHaveURL('/account_created');
		});
	}
});

test.describe('Required field validation', () => {
	for (const data of registerRequiredFieldValidationData) {
		test(`REGISTER-WITH-INFO-002 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			const fieldMap = {
				1: registerPage.passwordInput,
				2: registerPage.nameInput,
				3: registerPage.firstNameInput,
				4: registerPage.lastNameInput,
				5: registerPage.addressInput,
				6: registerPage.countrySelect,
				7: registerPage.cityInput,
				8: registerPage.zipcodeInput,
				9: registerPage.mobileNumberInput,
			};

			const locator = fieldMap[data.id as keyof typeof fieldMap];

			const validity = await locator.evaluate((el: HTMLInputElement | HTMLSelectElement) => ({
				valid: el.validity.valid,
				valueMissing: el.validity.valueMissing,
			}));

			expect(validity).toEqual({
				valid: false,
				valueMissing: true,
			});
		});
	}
});

test.describe('Invalid password', () => {
	for (const data of registerInvalidPasswordData) {
		test(`REGISTER-WITH-INFO-003 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});

test.describe('Date of birth fields left empty', () => {
	for (const data of registerWithoutDateOfBirthData) {
		test(`REGISTER-WITH-INFO-004 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});

test.describe('Invalid First name', () => {
	for (const data of registerInvalidFirstNameData) {
		test(`REGISTER-WITH-INFO-005 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});

test.describe('Invalid Last name', () => {
	for (const data of registerInvalidLastNameData) {
		test(`REGISTER-WITH-INFO-006 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});

test.describe('Company left empty', () => {
	for (const data of registerWithoutCompanyData) {
		test(`REGISTER-WITH-INFO-007 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});

test.describe('Invalid Mobile Number', () => {
	for (const data of registerInvalidMobileNumberData) {
		test(`REGISTER-WITH-INFO-008 - ${data.id}`, async ({ registerPage, page }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await registerPage.createAccountWithInfo(data);

			await expect(page).not.toHaveURL(/account_created/);
		});
	}
});
