import { Image } from "antd";
import React from "react";
interface AchievementCardProp {
	image: string;
	type: string;
	value: string;
	className: string;
}

const AchievementCard: React.FC<AchievementCardProp> = ({ image, type, value, className }) => {
	return (
		<div
			className={`h-[180.25px] px-[1rem] py-[1.5rem] rounded-[91.49px] items-center w-[103px] ${className}  text-[#FFFFFF] flex flex-col justify-between`}>
			<Image src={image} preview={false} alt={type} />
			<h3 className="text-[16.8px]">{type}</h3>
			<h4 className="text-[33.6px]">{value}</h4>
		</div>
	);
};

export default AchievementCard;
