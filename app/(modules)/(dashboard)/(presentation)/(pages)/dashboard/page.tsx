"use client";
import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";
import UserChoiceSection from "@app/app/common/components/molecules/UserChoiceSection/UserChoiceSection";
import DashboardGreetings from "../../molecules/DashboardGreetings";
import DashboardHeader from "../../molecules/DashboardHeader";
import RightBar from "../../organism/RightBar";
import MealCard from "@app/app/common/components/molecules/MealCard/MealCard";
import { mealPlanData } from "@app/app/common/constants/data";

const Dashboard = () => {
	const user = useAppSelector((state) => state.userSlice.user);
	const colors = ["#6938EF", "#3FBDF1", "#71DDB1"];
	let currentIndex = 0;

	const getRandomColor = () => {
		const color = colors[currentIndex];
		currentIndex = (currentIndex + 1) % colors.length;
		return color;
	};

	return (
		<div className=" w-full">
			<div className="flex">
				<div className="md:w-[75%] w-[100%] px-[1rem] lg:px-[2rem]">
					<DashboardHeader currentPage="Overview" pageTitle="Dashboard Overview" />
					<DashboardGreetings name={user?.name} />
					<UserChoiceSection />
					<div className="overflow-x-auto">
						<div className="flex items-center justify-between">
							{mealPlanData.map((meal, _index: number) => (
								<MealCard
									key={_index}
									foodName={meal.title}
									addons={meal.content}
									calories={meal.calories}
									background={getRandomColor()}
									time={meal.time}
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
