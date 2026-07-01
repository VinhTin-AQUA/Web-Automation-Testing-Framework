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
		test(`REGISTER-001 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			// assertions
			await expect(registerPage.page).toHaveURL('/signup');
		});
	}
});

test.describe('Register with Invalid email', () => {
	for (const data of RegisterInvalidEmailTestData) {
		test(`REGISTER-002 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();
			await registerPage.register(data.email, data.name);

			const validity = await registerPage.emailSignupInput.evaluate((el: HTMLInputElement) => ({
				valid: el.validity.valid,
				typeMismatch: el.validity.typeMismatch,
			}));

			expect(validity).toEqual({
				valid: false,
				typeMismatch: true,
			});
		});
	}
});

test.describe('Register with Invalid name', () => {
	for (const data of RegisterInvalidNameTestData) {
		test(`REGISTER-003 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			// assertions

			const validity = await registerPage.nameSignupInput.evaluate((el: HTMLInputElement) => ({
				valid: el.validity.valid,
				typeMismatch: el.validity.typeMismatch,
			}));

			expect(validity).toEqual({
				valid: false,
				typeMismatch: true,
			});
		});
	}
});

test.describe('Register - Required field validation', () => {
	for (const data of RegisterRequiredEmailTestData) {
		test(`REGISTER-004 - ${data.id}`, async ({ registerPage }) => {
			await registerPage.goto();
			await registerPage.register(data.email, data.name);

			const emailValidity = await registerPage.emailSignupInput.evaluate(
				(el: HTMLInputElement) => ({
					valid: el.validity.valid,
					valueMissing: el.validity.valueMissing,
				}),
			);

			const nameValidity = await registerPage.nameSignupInput.evaluate(
				(el: HTMLInputElement) => ({
					valid: el.validity.valid,
					valueMissing: el.validity.valueMissing,
				}),
			);

			// Email required
			if (data.email.trim() === '') {
				expect(emailValidity.valid).toBeFalsy();
			}

			// Name required
			if (data.name.trim() === '') {
				expect(nameValidity.valid).toBeFalsy();
			}
		});
	}
});

test.describe('Register with Existing email', () => {
	for (const data of RegisterExistEmailTestData) {
		test(`REGISTER-005 - ${data.id} - ${data.name}`, async ({ registerPage }) => {
			await registerPage.goto();

			await registerPage.register(data.email, data.name);

			await expect(registerPage.emailSignupExistsError).toContainText('already exist');
		});
	}
});
