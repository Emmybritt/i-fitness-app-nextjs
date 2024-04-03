import Card from "@app/app/common/components/atoms/Card/Card";
import React from "react";
import DashboardHeader from "../../../../molecules/DashboardHeader";
import TodaysWorkout from "../../../../molecules/TodaysWorkout";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { Image } from "antd";

const page = () => {
	return (
		<div>
			<div className="w-full px-[1.5rem] sm:px-[4rem]">
				<DashboardHeader currentPage="Workout / pratice" pageTitle="" />
				<Card className="w-[100%] h-[351px]">
					<Button label="20:00" className="bg-[#F2ECFE] w-[113px] text-[#6938EF]" />
					<div className="flex items-center">
						<Image src="/images/backStretch.png" height={200} width={203.46} alt="back stretch icon" />
						<div>
							<h3>Yoga</h3>
							<p>Burn 200kCAL</p>
							<p>
								Wear comfortable clothing that allows for easy movement. You can practice yoga
								barefoot or wear non-slip socks. Choose Your Yoga Mat: Use a yoga mat to provide
								cushioning and stability during poses. Place it on a flat surface. Remain in this
								position for 20 minutes
							</p>
							<Button label="Next" className="w-[170px]" />
						</div>
					</div>
				</Card>
				<div className="mt-[2rem]">
					<TodaysWorkout showTitle={false} />
				</div>
			</div>
		</div>
	);
};

export default page;
