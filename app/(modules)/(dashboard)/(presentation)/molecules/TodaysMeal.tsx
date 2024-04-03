import { todaysMeal } from "@app/app/common/constants/data";
import { Image, Rate } from "antd";
import Link from "next/link";
import React from "react";

const TodaysMeal = () => {
	return (
		<div className="my-[1rem]">
			<div className="flex items-center justify-between">
				<h3 className="py-[.7rem] font-semibold text-[16px]">Today&apos;s Meal</h3>
        <Link href="add-meal">Add Meal</Link>
			</div>
			<div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
				<div className="flex flex-row space-x-3">
					{todaysMeal.map((meal, _index: number) => (
						<div key={_index} className="w-[500px] flex h-[156px] rounded-[2rem] bg-[#e4e5fc]">
							<Image height={156} width={128} src="/images/meal.png" preview={false} alt="meal" />
							<div className="w-[340px] py-[1.5rem] px-[1rem]">
								<div className="flex justify-between mb-[5px]">
									<h1 className="text-[14px] font-semibold">{meal.mealTime}</h1>
									<p className="text-[#6938EF] text-[12px]">{meal.time}</p>
								</div>
								<h3 className="text-[20px] font-semibold text-[#212322] mb-[5px]">{meal.name}</h3>
								<div className="flex items-center justify-between text-[14px] text-[#9DACC1]">
									<p>{meal.carb}% Carb</p>
									<p>{meal.protein}% Protein</p>
									<p>{meal.fat}% Fat</p>
								</div>
								<div className="flex items-center gap-[1rem] text-[13px] text-[#2C2E2D] mt-[1rem]">
									<h3>Evaluation {meal.rating}/5</h3>
									<Rate allowHalf defaultValue={meal.rating} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TodaysMeal;
