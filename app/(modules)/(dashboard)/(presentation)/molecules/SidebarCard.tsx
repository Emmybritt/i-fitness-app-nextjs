import { Image } from "antd";
import Link from "next/link";
import React from "react";

interface SidebarCardProp {
	nextPage: (value: string) => void;
	data?: any;
	currentPage: string;
}

const SidebarCard: React.FC<SidebarCardProp> = ({ nextPage, data, currentPage }) => {
	return (
		<Link
			href={data.to}
			className={`flex items-center space-x-[0.6rem] cursor-pointer p-[.5rem] rounded-md ${
				data.to === currentPage ? "bg-[#f2ecfe]" : ""
			}`}
			onClick={() => nextPage(data.to)}>
			<Image src={data.icon} preview={false} alt={data.text} />
			<p className="text-sm font-semibold">{data.text}</p>
		</Link>
	);
};

export default SidebarCard;
