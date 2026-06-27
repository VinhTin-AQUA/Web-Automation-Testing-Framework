// src/config/env.ts

import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'dev';

dotenv.config({
	path: `.env.${environment}`,
});

function requireEnv(name: string): string {
	const value = process.env[name];

	if (!value) {
		throw new Error(`Missing environment variable: ${name}`);
	}

	return value;
}

export const env = {
	environment,

	baseUrl: requireEnv('UI_URL'),

	apiUrl: requireEnv('API_URL'),

	adminUsername: requireEnv('ADMIN_USERNAME'),

	adminPassword: requireEnv('ADMIN_PASSWORD'),
};
