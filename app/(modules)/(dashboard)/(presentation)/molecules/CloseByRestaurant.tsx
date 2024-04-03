import { nearestStore } from "@app/app/common/constants/data";
import { Image } from "antd";
import Link from "next/link";
import React from "react";

const CloseByRestaurant = () => {
	return (
		<div className="my-[2rem]">
			<div className="flex items-center justify-between">
				<h3 className="py-[.7rem] font-semibold text-[16px]">Restaurants around you</h3>
				<Link href="/restaurants">View all</Link>
			</div>
			<div className="grid md:grid-cols-2 gap-[2rem] lg:gap-[3rem]">
				{nearestStore.map((meal, _index: number) => (
					<div key={_index} className=" flex h-[121px] rounded-[2rem] bg-[#e0f2fc]">
						<Image height={121} width={108.47} src="/images/store.png" preview={false} alt="store" />
						<div className="py-[1rem] px-[1rem] w-[82%]">
							<div className="flex justify-between mb-[5px]">
								<h1 className="text-[20px] font-semibold">{meal.storeName}</h1>
								<p className="text-[#6938EF] text-[12px]">{meal.distance}</p>
							</div>
							<div className="flex items-center space-x-1 mb-3">
								<Image src="/images/locationIcon.png" alt="Location icon png" />
								<p className="text-[13px]">{meal.address}</p>
							</div>
							<div className="flex items-center flex-wrap gap-[1rem] text-[13px] text-[#2C2E2D]">
								<h3>Ratings {meal.ratings}/5</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CloseByRestaurant;
