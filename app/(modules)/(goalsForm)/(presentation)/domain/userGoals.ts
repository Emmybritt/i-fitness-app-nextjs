export interface UserGoals {
	dob?: string;
	gender: string;
	weight: string;
	height: string;
	vegeterian: string;
	country: string;
	state: string;
	allergies: string;
	disease: string;
	goals: string;
}

export interface RecommendedMeal {
	name: string;
	type: string;
	addons: string;
}

export interface RecommendedRestaurants {
	name: string;
	address: string;
	ratings: number;
}

export interface RecommededWorkouts {
	name: string;
	rounds: string;
	description: string;
}
