import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/register-page';
import { LoginPage } from '../pages/login-page';


type Fixtures = {
	registerPage: RegisterPage;
	loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
	registerPage: async ({ page }, use) => {
		const registerPage = new RegisterPage(page);

		await use(registerPage);
	},
    loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);

		await use(loginPage);
	},
});

export { expect } from '@playwright/test';
