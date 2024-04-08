"use client";
import { RecommendedRestaurants } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";
import { useEffect, useState } from "react";
import { useGetRestaurantAroundYouRecommendationQuery } from "../providers/api/openaiRecommendationApiSlice";

export const useOpenAiApi = () => {
	const [restaurant, setRestaurant] = useState<RecommendedRestaurants[] | null>(null);
	const { data } = useGetRestaurantAroundYouRecommendationQuery({
		model: "gpt-3.5-turbo-0125",
		messages: [
			{
				role: "assistant",
				content: "Restaurant Recommendation System:\nI need you to provide an array of 10 objects containing recommended restaurants. Please use the following array of object data structure strictly without changing the properties to camel casing, and stringify the array of objects:\n[{name: 'name of restaurant', address: 'address of the store', ratings: 'restaurant ratings'}]\nThe recommendations should be based on the following criteria:\n- Person's age: 25\n- Person's gender: Male\n- Person's weight: 75 kg\n- Person's height: 155 cm\n- Is the person a vegetarian or non-vegetarian: Yes\n- Does the person have any specific dietary restrictions: None\n- Person's region: Nigeria\nPerson's state: Lagos\n- Any allergies: None\n\nPlease ensure that the recommended restaurants meet these criteria accurately. Thank you.",
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
