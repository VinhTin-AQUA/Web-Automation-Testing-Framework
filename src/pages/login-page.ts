import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
	readonly emailLoginInput: Locator;
	readonly passwordLoginInput: Locator;
	readonly loginButton: Locator;

	constructor(page: Page) {
		super(page);

		const loginForm = page.locator('form[action="/login"]');

		this.emailLoginInput = loginForm.getByRole('textbox', { name: 'Email Address' });
		this.passwordLoginInput = page.getByRole('textbox', { name: 'Password' });
		this.loginButton = page.getByRole('button', { name: 'Login' });
	}

	async goto() {
		await this.page.goto('/login');
	}

	async login(email: string, password: string) {
		await this.emailLoginInput.fill(email);
		await this.passwordLoginInput.fill(password);

		await this.loginButton.click();
	}

	async deleteAccount() {
		const deleteAccountButton = this.page.getByRole('link', { name: ' Delete Account' });
        await deleteAccountButton.click();
	}
}
