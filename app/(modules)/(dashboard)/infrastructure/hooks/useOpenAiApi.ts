"use client";
import { RecommendedRestaurants, UserGoals } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";
import { useEffect, useState } from "react";
import { useGetRestaurantAroundYouRecommendationQuery } from "../providers/api/openaiRecommendationApiSlice";

export const useOpenAiApi = (goals: UserGoals | null) => {
	const [restaurant, setRestaurant] = useState<RecommendedRestaurants[] | null>(null);

	const { data } = useGetRestaurantAroundYouRecommendationQuery({
		model: "gpt-3.5-turbo-0125",
		messages: [
			{
				role: "assistant",
				content: `Restaurant Recommendation System:\nI need you to provide an array of 10 objects containing recommended restaurants. Please use the following array of object data structure strictly without changing the properties to camel casing, and stringify the array of objects:\n[{name: 'name of restaurant', address: 'address of the store', ratings: 'restaurant ratings'}]\nThe recommendations should be based on the following criteria:\n- Person's age: ${goals?.dob}\n- Person's gender: ${goals?.dob}\n- Person's weight: ${goals?.weight}kg\n- Person's height: ${goals?.height} cm\n- Is the person a vegetarian or non-vegetarian: ${goals?.vegeterian}\n- Does the person have any specific dietary restrictions: ${goals?.disease}\n- Person's region: ${goals?.country}\nPerson's state: ${goals?.state}\n- Any allergies: ${goals?.allergies}\n\nPlease ensure that the recommended restaurants meet these criteria accurately. Thank you.`,
			},
		],
		max_tokens: 2000,
	});
	useEffect(() => {
		if (data) {
			setRestaurant(extractData(data?.choices[0]?.message?.content));
		}
	}, [data]);
	function extractData(content: string) {
		const data = JSON.parse(content);
		return data;
	}

	return {
		extractData,
		restaurant,
	};
};
