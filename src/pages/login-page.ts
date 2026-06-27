import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
	constructor(page: Page) {
		super(page);
	}

	async goto() {
		await this.page.goto('/login');
	}

	async login(username: string, password: string) {
		await this.page.getByRole('textbox', { name: 'Email Address' }).fill(username);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

		await this.page.getByRole('button', { name: 'Login' }).click();
	}

	async register(username: string, password: string) {
		await this.page.getByRole('textbox', { name: 'Name' }).fill(username);
		await this.page.getByRole('textbox', { name: 'Email Address' }).fill(password);

		await this.page.getByRole('button', { name: 'Signup' }).click();
	}
}
