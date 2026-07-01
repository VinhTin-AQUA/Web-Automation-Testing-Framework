import { expect, test } from '../../../src/fixtures';
import {
	registerInvalidFirstNameData,
	registerInvalidLastNameData,
	registerInvalidMobileNumberData,
	registerInvalidPasswordData,
	registerRequiredFieldValidationData,
	registerWithoutCompanyData,
	registerWithoutDateOfBirthData,
    registerWithValidInfoData,
} from '../../../src/test-data/register-with-info-data';

test.describe('Register with Valid Info', () => {
	const list = [
        ...registerWithValidInfoData,
		...registerRequiredFieldValidationData,
		...registerInvalidPasswordData,
		...registerWithoutDateOfBirthData,
		...registerInvalidFirstNameData,
		...registerInvalidLastNameData,
		...registerWithoutCompanyData,
		...registerInvalidMobileNumberData,
	];

	for (let i = 0; i < list.length; i++) {
		list[i].id = i + 1;
	}

	for (const data of list) {
		test(`REGISTER-001 - ${data.id} `, async ({ loginPage }) => {
			await loginPage.goto();

			await loginPage.login(data.email, data.password);
			await expect(loginPage.page).toHaveURL('https://automationexercise.com/');

			await loginPage.deleteAccount();

			// assertions

			await expect(loginPage.page).toHaveURL(/delete_account/);
			await expect(loginPage.page.locator('[data-qa="account-deleted"]')).toHaveText(
				'Account Deleted!',
			);
		});
	}
});
