import { test, expect } from '../../../src/fixtures';
import { registerRequiredFieldValidationData, registerWithValidInfoData } from '../../../src/test-data/register-with-info-data';

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

            
		});
	}
});

