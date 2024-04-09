"use client";
import { useOpenAiApi } from "@app/app/(modules)/(dashboard)/infrastructure/hooks/useOpenAiApi";
import ItemCard from "@app/app/common/components/molecules/ItemCard/ItemCard";
import { caloriesIntake } from "@app/app/common/constants/data";
import CloseByRestaurant from "../../../molecules/CloseByRestaurant";
import DashboardHeader from "../../../molecules/DashboardHeader";
import TodaysMeal from "../../../molecules/TodaysMeal";
import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";

const DietPlan = () => {
	const user = useAppSelector((state) => state.userSlice);

	const { restaurant } = useOpenAiApi(user.user);

	return (
		<div className="w-full px-[1.5rem] sm:px-[2rem] md:px-[4rem]">
			<DashboardHeader currentPage="Diet Plan" pageTitle="Diet Plan" />
			<div>
				<h3 className="py-[.7rem] font-semibold text-[16px]">Calories Intake</h3>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
					{caloriesIntake.map((food, _index: number) => (
						<ItemCard image={food.image} title={food.mg} content={food.foodClass} key={_index} />
					))}
				</div>
			</div>
			<TodaysMeal />
			<CloseByRestaurant restaurant={restaurant && restaurant?.slice(0, 2)} />
		</div>
	);
};

export default DietPlan;
