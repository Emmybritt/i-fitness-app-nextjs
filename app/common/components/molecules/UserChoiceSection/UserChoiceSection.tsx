import { Image, Progress } from "antd";
import ItemCard from "../ItemCard/ItemCard";
import Card from "../../atoms/Card/Card";

const UserChoiceSection = () => {
	return (
		<div className="mt-[2rem]">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] lg:gap-[2rem]">
				<ItemCard title="Calories" content="2000kcal per day" image="/images/itemcard.png" />
				<ItemCard title="Current Goal" content="Loose body fat" image="/images/itemcard.png" />
				<ItemCard title="Current Weight" content="77kg" image="/images/itemcard.png" />
			</div>
			<div className="grid grid-cols-4 lg:grid-cols-7 gap-[1rem] lg:gap-[2rem] mt-[2rem]">
				<Card title="Reminders" className="col-span-4 lg:col-span-3">
					<div className="flex items-center justify-evenly">
						<div className="flex items-center justify-center flex-col py-[1rem]">
							<div className="bg-[#EEF7FE] rounded-md h-[45px] w-[45px] flex items-center justify-center">
								<Image src="/images/musculation.png" alt="dun bell" preview={false} />
							</div>
							<h3 className="text-[#59748A] text-[14px] font-semibold  my-1">48 min</h3>
							<p className="text-[#59748A] text-[14px] font-[500]">Stretching</p>
						</div>
						<div className="flex items-center justify-center flex-col py-[1rem]">
							<div className="bg-[#EEF7FE] rounded-md h-[45px] w-[45px] flex items-center justify-center">
								<Image src="/images/Shape.png" alt="dun bell" preview={false} />
							</div>
							<h3 className="text-[#59748A] text-[14px] font-semibold my-1">32 min</h3>
							<p className="text-[#59748A] text-[14px] font-[500]">Mind Training</p>
						</div>
					</div>
				</Card>
				<Card title="Reports" className="col-span-4 sm:col-span-2">
					<div className="flex flex-col items-center justify-between w-full mt-[0.5rem]">
						<div className="flex items-center gap-4 w-full">
							<Progress type="circle" strokeColor="#71DDB1" percent={80} size={50} />
							<div>
								<h3 className="text-[#59748A] text-[13px] font-semibold">Weight Loss</h3>
								<p className="text-[#71DDB1] text-[12px] font-medium">82% Decrease</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-between w-full mt-[0.5rem]">
						<div className="flex items-center gap-4 w-full">
							<Progress type="circle" strokeColor="#7A40F2" percent={78} size={50} />
							<div>
								<h3 className="text-[#59748A] text-[13px] font-semibold">General Health</h3>
								<p className="text-[#7A40F2] text-[12px] font-medium">78% Increase</p>
							</div>
						</div>
					</div>
				</Card>
				<Card className="col-span-4 sm:col-span-2">
					<div className="flex flex-col items-center justify-center">
						<div className="flex items-center justify-center text-[26.35px] font-semibold text-[#59748A]">
							89%
						</div>
						<p className="text-center font-medium text-[#59748A] text-[14px] leading-[14.37px]">
							You have achieved 86% of your goals this month
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default UserChoiceSection;
