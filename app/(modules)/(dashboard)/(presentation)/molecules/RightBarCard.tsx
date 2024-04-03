"use client";

import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";
import { Image } from "antd";
import React from "react";

interface RightBarCardProp {
	name: string;
	age: string;
	state: string;
	country: string;
	height: string;
	weight: string;
}
const RightBarCard: React.FC<RightBarCardProp> = ({}) => {
	const user = useAppSelector((state) => state.userSlice.user);
	return (
		<div className="bg-[#F7FBFF] flex flex-col items-center justify-center py-[2rem] rounded-[2rem]">
			<Image src="/images/Avatar.png" alt="avatar" />
			<div>
				<h1 className="text-[#7A40F2] text-[18px] font-semibold text-center">{user?.name}</h1>
				<div className="flex items-center flex-row divide-x-2 gap-[1rem]">
					<p className="text-sm text-[#A3AED0]">{user?.age} years old</p>
					<div className="flex items-center space-x-1 pl-[1rem]">
						<Image src="/images/Location.png" alt="location" />
						<p className="text-sm text-[#A3AED0]">{user?.country}</p>
					</div>
				</div>
				<div className="flex flex-row items-center justify-around mt-[1rem]">
					<div>
						<h3 className="text-sm text-[#85A5C2] font-medium">Height</h3>
						<p className="text-[16px] text-[#85A5C2] font-bold">{user && user?.height}cm</p>
					</div>
					<div>
						<h3 className="text-sm text-[#85A5C2] font-medium">Weight</h3>
						<p className="text-[16px] text-[#85A5C2] font-bold">{user?.weight}kg</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightBarCard;
