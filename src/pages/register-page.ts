import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { RegisterWithInfoModel } from '../models/register.model';

export class RegisterPage extends BasePage {
	readonly emailSignupInput: Locator;
	readonly nameSignupInput: Locator;
	readonly signupButton: Locator;
	readonly emailSignupExistsError: Locator;

	// info
	readonly mrRadio: Locator;
	readonly mrsRadio: Locator;

	readonly nameInput: Locator;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;

	readonly daySelect: Locator;
	readonly monthSelect: Locator;
	readonly yearSelect: Locator;

	readonly newsletterCheckbox: Locator;

	readonly specialOffersCheckbox: Locator;

	readonly firstNameInput: Locator;
	readonly lastNameInput: Locator;
	readonly companyInput: Locator;

	readonly addressInput: Locator;
	readonly address2Input: Locator;

	readonly countrySelect: Locator;

	readonly stateInput: Locator;
	readonly cityInput: Locator;
	readonly zipcodeInput: Locator;
	readonly mobileNumberInput: Locator;

	readonly createAccountButton: Locator;

	constructor(page: Page) {
		super(page);

		const signupForm = page.locator('form[action="/signup"]');

		this.emailSignupInput = signupForm.getByRole('textbox', { name: 'Email Address' });
		this.nameSignupInput = page.getByRole('textbox', { name: 'Name' });
		this.signupButton = page.getByRole('button', { name: 'Signup' });
		this.emailSignupExistsError = page.getByText('Email Address already exist!');

		// info
		this.mrRadio = page.getByLabel('Mr.');
		this.mrsRadio = page.getByLabel('Mrs.');

		this.nameInput = page.getByLabel('Name');
		this.emailInput = page.getByLabel('Email');
		this.passwordInput = page.getByLabel('Password');

		this.daySelect = page.locator('#days');
		this.monthSelect = page.locator('#months');
		this.yearSelect = page.locator('#years');

		this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');

		this.specialOffersCheckbox = page.getByLabel('Receive special offers from our partners!');

		this.firstNameInput = page.getByLabel('First name');
		this.lastNameInput = page.getByLabel('Last name');
		this.companyInput = page.getByLabel('Company');

		this.addressInput = page.locator('[data-qa="address"]');
		this.address2Input = page.locator('[data-qa="address2"]');

		this.countrySelect = page.getByLabel('Country');

		this.stateInput = page.getByLabel('State');
		this.cityInput = page.getByLabel('City');
		this.zipcodeInput = page.getByLabel('Zipcode');
		this.mobileNumberInput = page.getByLabel('Mobile Number');

		this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
	}

	async goto() {
		await this.page.goto('/login');
	}

	async register(email: string, name: string) {
		await this.emailSignupInput.fill(email);
		await this.nameSignupInput.fill(name);

		await this.signupButton.click();
		// await Promise.all([this.page.waitForURL('**/signup'), this.signupButton.click()]);
	}

	async registerWithInfo(email: string, name: string) {
		await this.emailSignupInput.fill(email);
		await this.nameSignupInput.fill(name);

		await this.signupButton.click();
		// await Promise.all([this.page.waitForURL('**/signup'), this.signupButton.click()]);
	}

	async fillRegisterForm(data: RegisterWithInfoModel): Promise<void> {
		// Title
		if (data.title === 'Mr') {
			await this.mrRadio.check();
		} else {
			await this.mrsRadio.check();
		}

		// Account info
		await this.nameInput.fill(data.name);

		// Email đang disabled trong HTML
		// chỉ fill nếu field cho phép nhập
		if (await this.emailInput.isEditable()) {
			await this.emailInput.fill(data.email);
		}

		await this.passwordInput.fill(data.password);

		// Date of birth
		await this.daySelect.selectOption(data.day.toString());
		await this.monthSelect.selectOption(data.month.toString());
		await this.yearSelect.selectOption(data.year.toString());

		// Checkboxes
		await this.newsletterCheckbox.setChecked(data.signUpForOurNewsletter);

		await this.specialOffersCheckbox.setChecked(data.receiveSpecialOffersFromOurPartners);

		// Address info
		await this.firstNameInput.fill(data.firstName);
		await this.lastNameInput.fill(data.lastName);

		if (data.company) {
			await this.companyInput.fill(data.company);
		}

		await this.addressInput.fill(data.address);

		if (data.address2) {
			await this.address2Input.fill(data.address2);
		}

		await this.countrySelect.selectOption({
			label: data.country,
		});

		await this.stateInput.fill(data.state);
		await this.cityInput.fill(data.city);
		await this.zipcodeInput.fill(data.zipcode);
		await this.mobileNumberInput.fill(data.mobileNumber);
	}
}
