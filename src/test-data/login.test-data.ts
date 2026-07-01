import { LoginModel } from '../models/login.model';

export const ValidRegisterInformationData: LoginModel[] = [
	{
		id: 1,
		email: 'trandangkhoa123@gmail.com',
		password: 'Abcdef@123',
	},
];

export const RequiredFieldValidationData: LoginModel[] = [
	{
		id: 1,
		email: '',
		password: 'Abcdef@123',
	},
	{
		id: 1,
		email: 'trandangkhoa123@gmail.com',
		password: '',
	},
	{
		id: 1,
		email: '',
		password: '',
	},
];

export const InvalidEmailData: LoginModel[] = [
	{ id: 1, email: 'nguyenvana', password: '123456' },
	{ id: 2, email: 'tranthib@', password: '123456' },
	{ id: 3, email: '@gmail.com', password: '123456' },
	{ id: 4, email: 'le.van.a@gmail', password: '123456' },
	{ id: 5, email: 'pham..minh@gmail.com', password: '123456' },
	{ id: 6, email: 'hoang anh@gmail.com', password: '123456' },
	{ id: 7, email: 'duong@@gmail.com', password: '123456' },
	{ id: 8, email: 'quoc#gmail.com', password: '123456' },
	{ id: 9, email: 'thu.nguyen@gmail..com', password: '123456' },
	{ id: 10, email: '.hien@gmail.com', password: '123456' },
	{ id: 11, email: 'khanh.@gmail.com', password: '123456' },
	{ id: 12, email: 'linh@.gmail.com', password: '123456' },
	{ id: 13, email: 'tuan@gmail.', password: '123456' },
	{ id: 14, email: 'mai@gmail,com', password: '123456' },
	{ id: 15, email: 'son@ gmail.com', password: '123456' },
	{ id: 16, email: 'vy@gmail .com', password: '123456' },
	{ id: 17, email: 'abc@', password: '123456' },
	{ id: 18, email: '@abc.com', password: '123456' },
	{ id: 19, email: 'abc.com', password: '123456' },
	{ id: 20, email: '', password: '123456' },
];

export const InvalidCredentials: LoginModel[] = [
	{ id: 1, email: 'khoa@gmail.com', password: '123456' },
	{ id: 2, email: 'trankhoadang@gmail.com', password: '123456' },
];
