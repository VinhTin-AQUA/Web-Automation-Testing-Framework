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

