// pages/BasePage.ts

import { Page, Locator } from '@playwright/test';

export class BasePage {
	constructor(public page: Page) {}

	async click(locator: string) {
		await this.page.locator(locator).click();
	}

	async fill(locator: string, value: string) {
		await this.page.locator(locator).fill(value);
	}

	async waitForVisible(locator: string) {
		await this.page.locator(locator).waitFor({
			state: 'visible',
		});
	}

	async getText(locator: string) {
		return await this.page.locator(locator).textContent();
	}

	async screenshot(name: string) {
		await this.page.screenshot({
			path: `screenshots/${name}.png`,
		});
	}
}
