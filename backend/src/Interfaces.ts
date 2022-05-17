export interface Shop {
	name: string;
	owner: string;
}

export interface FetchConfig{
	method:string,
	body?:object
	headers?:object
}
