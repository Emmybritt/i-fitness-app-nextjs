import { BellOutlined, RightOutlined, SettingOutlined } from "@ant-design/icons";
import { mySchedules } from "@app/app/common/constants/data";
import { Image } from "antd";
import React from "react";
import RightBarCard from "../molecules/RightBarCard";
interface RightBarProp {}

const RightBar: React.FC<RightBarProp> = ({}) => {
	return (
		<div className=" px-[0.5rem] lg:px-[1.5rem]">
			<div className="flex items-center justify-evenly mt-[2rem] mb-[5rem]">
				<BellOutlined className="text-[18px]" style={{ color: "#8B8C8C" }} />
				<SettingOutlined className="text-[18px]" style={{ color: "#8B8C8C" }} />
				<div className="bg-[#F7FBFF] flex items-center justify-center">
					<Image src="/images/Avatar.png" alt="avatar" style={{ height: 32, width: 32 }} />
				</div>
			</div>
			<RightBarCard age={"24"} name="Ogwu Emmanuel" country="Nigeria" height="186" state="Lagos" weight="65" />
			<div>
				<div className="flex items-center justify-between mt-[2rem] mb-[1rem]">
					<h3 className="text-[#59748A] font-semibold text-[15px]">My Schedules</h3>
					<h3 className="text-[#6938EF] font-[500] text-[14px]">
						View All
						<RightOutlined />
					</h3>
				</div>
				<div className="space-y-[1rem] bg-[#fefefe]">
					{mySchedules.map((data, _index: number) => (
						<div
							key={_index}
							className="flex items-center justify-between h-[66px] px-[0.6rem] lg:px-[1.5rem] rounded-[8px] py-[2rem] bg-white drop-shadow-2xl">
							<div className="flex items-center space-x-2">
								<Image preview={false} src={data.image} alt={data.title} />
								<div>
									<h3 className="text-[#1E293B] font-medium text-[14px]">{data.title}</h3>
									<p className="text-[12px]">{data.time}</p>
								</div>
							</div>
							<span className="text-[#6938EF] text-[12px] bg-[#F2FFFF] rounded-[30px] px-[1rem]">
								{data.round}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RightBar;
