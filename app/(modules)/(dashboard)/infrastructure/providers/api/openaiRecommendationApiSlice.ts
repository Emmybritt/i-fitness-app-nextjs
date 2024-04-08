import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OpenaiRecomendationApiSlice = createApi({
	reducerPath: "DietAndWorkoutRecommendationApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.openai.com/v1",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_TOKEN}`,
		},
	}),
	endpoints: (builder) => {
		return {
			getTodaysMealRecommedation: builder.query({
				query: (params) => ({
					url: "/chat/completions",
					method: "POST",
					body: params,
				}),
			}),
			getWorkoutRecommedation: builder.query({
				query: (params) => ({
					url: "/chat/completions",
					method: "POST",
					body: params,
				}),
			}),
			getRestaurantAroundYouRecommendation: builder.query({
				query: (params) => ({
					url: "/chat/completions",
					method: "POST",
					body: params,
				}),
			}),
		};
	},
});

export const { useGetRestaurantAroundYouRecommendationQuery, useGetTodaysMealRecommedationQuery, useGetWorkoutRecommedationQuery } =
	OpenaiRecomendationApiSlice;
