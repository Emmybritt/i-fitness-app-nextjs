/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";
import MealCard from "@app/app/common/components/molecules/MealCard/MealCard";
import UserChoiceSection from "@app/app/common/components/molecules/UserChoiceSection/UserChoiceSection";
import { mealPlanData } from "@app/app/common/constants/data";
import { Spin } from "antd";
import DashboardGreetings from "../../molecules/DashboardGreetings";
import DashboardHeader from "../../molecules/DashboardHeader";
import RightBar from "../../organism/RightBar";
import { useGetTodaysMealRecommedationQuery } from "../../../infrastructure/providers/api/openaiRecommendationApiSlice";
import { useOpenAiApi } from "../../../infrastructure/hooks/useOpenAiApi";
import { useEffect, useState } from "react";
import { RecommendedMeal } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";

const Dashboard = () => {
	const user = useAppSelector((state) => state.userSlice);
	const [recommendedMeal, setRecommendedMeal] = useState<RecommendedMeal[] | null>(null);
	const { extractData } = useOpenAiApi();
	const { data, isLoading, isFetching } = useGetTodaysMealRecommedationQuery({
		model: "gpt-3.5-turbo-0125",
		messages: [
			{
				role: "assistant",
				content: "Diet Recommendation System:\nI need an array of 3 objects representing recommended meals, strictly following this array of object data structure without changing the properties to camel casing and stringify the array of objects: [{name: 'name of food', type: 'breakfast', addons: '+ Grilled Turkey and Salad'}]\nCriteria:\n- Age: 25\n- Gender: Male\n- Weight: 75kg\n- Height: 155cm\n- Diet: Vegetarian\n- Disease: None\n- Region: Nigeria\n- State: Lagos\n- Allergies: None",
			},
		],
		max_tokens: 2000,
	});
	useEffect(() => {
		if (data) {
			console.log(extractData(data?.choices[0]?.message?.content), "This is the content");
			const meal = extractData(data?.choices[0]?.message?.content);
			setRecommendedMeal(meal);
		}
	}, [data]);

	const getRandomColor = () => {
		const colors = ["#6938EF", "#3FBDF1", "#71DDB1"];
		let currentIndex = 0;
		const color = colors[currentIndex];
		currentIndex = (currentIndex + 1) % colors.length;
		return color;
	};

	if (user.loading) {
		return (
			<div className="flex items-center justify-center h-[80vh]">
				<Spin size="large" />
			</div>
		);
	}
	return (
		<div className=" w-full">
			<div className="flex">
				<div className="md:w-[75%] w-[100%] px-[1rem] lg:px-[2rem]">
					<DashboardHeader currentPage="Overview" pageTitle="Dashboard Overview" />
					<DashboardGreetings name={user.user?.name} />
					<UserChoiceSection />
					<div className="overflow-x-auto">
						<div className="flex items-center justify-between">
							{recommendedMeal &&
								recommendedMeal.map((meal, _index: number) => (
									<MealCard
										key={_index}
										foodName={meal.name}
										addons={meal.addons}
										calories={200}
										background={getRandomColor()}
										time={meal.type}
									/>
								))}
						</div>
					</div>
				</div>
				<div className="bg-white md:w-[25%] md:block hidden h-[100vh]">
					<RightBar />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
