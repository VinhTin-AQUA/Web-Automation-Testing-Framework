export interface RegisterEmailNameModel {
	id: number;
	email: string;
	name: string;
}

export interface RegisterWithInfoModel {
	id?: number;

	title: 'Mr' | 'Mrs';

	name: string;
	email: string;
	password: string;

	day: number;
	month: number;
	year: number;

	signUpForOurNewsletter: boolean;
	receiveSpecialOffersFromOurPartners: boolean;

	firstName: string;
	lastName: string;
	company?: string;

	address: string;
	address2?: string;

	country: string;
	state: string;
	city: string;
	zipcode: string;
	mobileNumber: string;
}
