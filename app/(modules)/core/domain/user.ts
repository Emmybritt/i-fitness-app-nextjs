import { UserRegisteration } from "../../(authentication)/domain/user";
import { UserGoals } from "../../(goalsForm)/(presentation)/domain/userGoals";

export interface User extends UserGoals, Omit<UserRegisteration, "password" | "full_name"> {
	name: string;
	age: string;
}

export interface UserSliceState {
	user: User | null;
	loading: boolean;
}
