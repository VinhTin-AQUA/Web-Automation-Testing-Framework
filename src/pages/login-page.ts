import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
	readonly emailSignupInput: Locator;
	readonly nameSignupInput: Locator;
	readonly signupButton: Locator;
	readonly emailSignupExistsError: Locator;

	readonly emailLoginInput: Locator;
	readonly passwordLoginInput: Locator;
	readonly loginButton: Locator;

	constructor(page: Page) {
		super(page);

		const signupForm = page.locator('form[action="/signup"]');
		const loginForm = page.locator('form[action="/login"]');

		this.emailSignupInput = signupForm.getByRole('textbox', { name: 'Email Address' });
		this.nameSignupInput = page.getByRole('textbox', { name: 'Name' });
		this.signupButton = page.getByRole('button', { name: 'Signup' });
		this.emailSignupExistsError = page.getByText('Email Address already exist!');

		this.emailLoginInput = loginForm.getByRole('textbox', { name: 'Email Address' });
		this.passwordLoginInput = page.getByRole('textbox', { name: 'Password' });
		this.loginButton = page.getByRole('button', { name: 'Login' });
	}

	async goto() {
		await this.page.goto('/login');
	}

	async login(username: string, password: string) {
		await this.page.getByRole('textbox', { name: 'Email Address' }).fill(username);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

		await this.page.getByRole('button', { name: 'Login' }).click();
	}

	async register(name: string, email: string) {
		await this.nameSignupInput.fill(name);
		await this.emailSignupInput.fill(email);

		await this.signupButton.click();
		// await Promise.all([this.page.waitForURL('**/signup'), this.signupButton.click()]);
	}
}
