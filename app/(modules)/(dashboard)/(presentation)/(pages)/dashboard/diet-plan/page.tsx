import ItemCard from "@app/app/common/components/molecules/ItemCard/ItemCard";
import { caloriesIntake } from "@app/app/common/constants/data";
import CloseByRestaurant from "../../../molecules/CloseByRestaurant";
import DashboardHeader from "../../../molecules/DashboardHeader";
import TodaysMeal from "../../../molecules/TodaysMeal";

const DietPlan = () => {
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
			<CloseByRestaurant />
		</div>
	);
};

export default DietPlan;
