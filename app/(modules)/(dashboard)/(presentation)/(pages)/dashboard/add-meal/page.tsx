import React from "react";
import DashboardHeader from "../../../molecules/DashboardHeader";
import CustomSelect from "@app/app/common/components/atoms/CustomSelect/CustomSelect";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import { Button } from "@app/app/common/components/atoms/Button/Button";

const page = () => {
	return (
		<div className="w-full px-[1rem] sm:px-[2rem] md:px-[4rem] h-[100vh]">
			<DashboardHeader currentPage="Add Meal" pageTitle="" />
			<div className="bg-[#FFFFFF] md:w-[45%] px-[2rem] space-y-[1rem] py-[2rem] rounded-2xl">
				<CustomSelect
					label="Meal"
					placeholder="Select Meal Period"
					options={[
						{ label: "Breakfast", value: "breakfast" },
						{ label: "Launch", value: "launch" },
						{ label: "Dinner", value: "dinner" },
					]}
				/>
				<CustomInput label="Dish" placeholder="Enter Dish name" />
				<Button label="Save" className="text-white" />
			</div>
		</div>
	);
};

export default page;
