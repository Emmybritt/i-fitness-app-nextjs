"use client";
import { useOpenAiApi } from "@app/app/(modules)/(dashboard)/infrastructure/hooks/useOpenAiApi";
import CloseByRestaurant from "../../../molecules/CloseByRestaurant";
import DashboardHeader from "../../../molecules/DashboardHeader";

const Restaurants = () => {
	const { restaurant } = useOpenAiApi();

	return (
		<div className="w-full px-[1.5rem] sm:px-[2rem] md:px-[4rem]">
			<DashboardHeader currentPage="Restaurants" pageTitle="Restaurants" />
			<CloseByRestaurant restaurant={restaurant && restaurant} showActionBtn={false} />
		</div>
	);
};

export default Restaurants;
