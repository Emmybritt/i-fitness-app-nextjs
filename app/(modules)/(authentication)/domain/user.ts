export interface UserRegisteration {
	email: string;
	userName: string;
	full_name: string;
	phoneNumber: string;
	password: string;
}

export type LoginUser = Pick<UserRegisteration, "email" | "password">;

