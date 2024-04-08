import { RecommededWorkouts } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";
import { useEffect, useState } from "react";
import { useGetWorkoutRecommedationQuery } from "../providers/api/openaiRecommendationApiSlice";

export const useGetRecommendedWorkout = () => {
	const [workouts, setWorkout] = useState<RecommededWorkouts[] | null>(null);
	const { data, isFetching, isLoading } = useGetWorkoutRecommedationQuery({
		model: "gpt-3.5-turbo-0125",
		messages: [
			{
				role: "assistant",
				content: "Workout Recommendation System:\nI need an array of 16 objects representing recommended workout, strictly following this array of object data structure without changing the properties to camel casing and stringify the array of objects: [{name: 'Workout name', rounds: 'workout rounds', description: 'a very long Description and steps of what to do and how to go about the workout'}]\nCriteria:\n- Age: 25\n- Gender: Male\n- Weight: 75kg\n- Height: 155cm\n- Diet: Vegetarian\n- Disease: None\n- Region: Nigeria\n- State: Lagos\n- Allergies: None",
			},
		],
		max_tokens: 2000,
	});
	useEffect(() => {
		if (data) {
			setWorkout(extractData(data?.choices[0]?.message?.content));
		}
	}, [data]);
	function extractData(content: string) {
		const data = JSON.parse(content);
		return data;
	}

	return {
		workouts,
		isFetching,
		isLoading,
	};
};
