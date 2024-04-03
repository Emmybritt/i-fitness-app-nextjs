import React from "react";
import RecommendedFood from "../../atoms/RecommendedFood/RecommendedFood";
import CircleSvg from "../../atoms/CircleSvg/CircleSvg";
import { Progress } from "antd";
interface MealCardProp {
	foodName?: string;
	calories?: number;
	addons?: string;
	time?: string;
	background?: string;
}

const MealCard: React.FC<MealCardProp> = ({ background, calories, foodName, time, addons }) => {
	return (
		<div className=" relative col-span-1 w-[320px] h-[195px]">
			<div className="absolute top-0 right-0 mb-2">
				<CircleSvg calories={calories} backgroundColor={background} />
			</div>
			<RecommendedFood
				className="mt-[1rem]"
				width="300px"
				addons={addons}
				foodName={foodName}
				time={time}
				backgroundColor={background}
			/>
		</div>
	);
};

export default MealCard;
