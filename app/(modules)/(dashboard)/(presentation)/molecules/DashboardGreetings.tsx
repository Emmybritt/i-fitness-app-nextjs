import { Image } from "antd";
import React from "react";
interface DashboardGreetingsProp {
	name?: string;
}

const DashboardGreetings: React.FC<DashboardGreetingsProp> = ({ name }) => {
	return (
		<div className="bg-[#6938EF] rounded-[12px] px-[2rem] py-[2rem] mt-[1rem]">
			<div className="flex flex-wrap justify-between">
				<div>
					<div className="flex items-center gap-1 flex-wrap">
						<h3 className="text-[#CED5DC] text-[23px]">Hello</h3>
						<span className="text-[white] font-semibold text-[23px]">{name}</span>
					</div>
					<p className="text-white text-[13px] ">Have a nice day and don’t forget to take care of your health!</p>
				</div>
				<div>
					<Image src="/images/sport.png" preview={false} alt="Sport" />
				</div>
			</div>
		</div>
	);
};

export default DashboardGreetings;
