import { Image } from "antd";
import React from "react";

interface ItemCardProps {
	title?: string;
	content?: string;
	image?: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ content, title, image }) => {
	return (
		<div className="bg-white flex flex-wrap items-center px-[1rem] space-x-2 h-[135px] rounded-[10px]">
			<Image src={image} alt="itemcard png" preview={false} />
			<div className="">
				<h3 className="text-[#6E7191] font-semibold text-normal">{title}</h3>
				<p className="text-[14px] text-[#6E7191]">{content}</p>
			</div>
		</div>
	);
};

export default ItemCard;
