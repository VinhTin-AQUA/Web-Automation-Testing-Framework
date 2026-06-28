import { RegisterEmailModel } from '../models/register-email.model';

export const RegisterValidTestData: RegisterEmailModel[] = [
	{
		id: 1,
		email: 'khoatrandang291@gmail.com',
		name: 'Tran Dang Khoa',
	},
];

export const RegisterInvalidEmailTestData: RegisterEmailModel[] = [
	{
		id: 1,
		email: '@gmail.com',
		name: 'Your Name',
	},
	{
		id: 2,
		email: 'test@',
		name: 'Your Name',
	},
	{
		id: 3,
		email: 'testgmail.com',
		name: 'Your Name',
	},
	{
		id: 4,
		email: 'test@@gmail.com',
		name: 'Your Name',
	},
	{
		id: 5,
		email: 'test @gmail.com',
		name: 'Your Name',
	},
	{
		id: 6,
		email: 'test@ gmail.com',
		name: 'Your Name',
	},
	{
		id: 7,
		email: 'test@gmail',
		name: 'Your Name',
	},
	{
		id: 8,
		email: '[.test@gmail.com](mailto:.test@gmail.com)',
		name: 'Your Name',
	},
	{
		id: 9,
		email: '[test.@gmail.com](mailto:test.@gmail.com)',
		name: 'Your Name',
	},
	{
		id: 10,
		email: '[test..user@gmail.com](mailto:test..user@gmail.com)',
		name: 'Your Name',
	},
	{
		id: 11,
		email: '[test@.gmail.com](mailto:test@.gmail.com)',
		name: 'Your Name',
	},
	{
		id: 12,
		email: '[test@gmail.com](mailto:test@gmail.com).',
		name: 'Your Name',
	},
	{
		id: 13,
		email: 'test@gmail..com',
		name: 'Your Name',
	},
	{
		id: 14,
		email: 'test<>@gmail.com',
		name: 'Your Name',
	},
	{
		id: 15,
		email: 'test()@gmail.com',
		name: 'Your Name',
	},
];

export const RegisterInvalidNameTestData: RegisterEmailModel[] = [
	{
		id: 1,
		email: 'test@gmail.com',
		name: 'A',
	},
	{
		id: 2,
		email: 'test@gmail.com',
		name: '123456',
	},
	{
		id: 3,
		email: 'test@gmail.com',
		name: '!@#$%^&*',
	},
	{
		id: 4,
		email: 'test@gmail.com',
		name: '<script>alert(1)</script>',
	},
	{
		id: 5,
		email: 'test@gmail.com',
		name: 'John 😀',
	},
	{
		id: 6,
		email: 'test@gmail.com',
		name: 'John123!@#',
	},
];

export const RegisterRequiredEmailTestData: RegisterEmailModel[] = [
	{
		id: 1,
		email: '',
		name: 'Your Name',
	},
	{
		id: 2,
		email: '    ',
		name: 'Your Name',
	},
	{
		id: 3,
		email: 'example123321@gmail.com',
		name: '',
	},
	{
		id: 4,
		email: 'example123321@gmail.com    ',
		name: '     ',
	},
];

export const RegisterExistEmailTestData: RegisterEmailModel[] = [
	{
		id: 1,
		email: 'abc@gmail.com',
		name: 'Your Name',
	},
];
