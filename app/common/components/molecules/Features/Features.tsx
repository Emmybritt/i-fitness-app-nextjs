import { Image } from "antd";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import { features, moreData } from "@app/app/common/constants/data";
import Card from "../../atoms/Card/Card";
import { ArrowRightOutlined } from "@ant-design/icons";

const Features = () => {
	return (
		<div>
			<div className="flex md:flex-row flex-col items-center justify-between px-[2rem] max-w-[95%] md:max-w-[80%] mx-auto">
				<div className="space-y-[1.5rem]">
					<h3 className="text-featureText text-center md:text-left mt-[2rem] font-extrabold lg:max-w-[522px] leading-tight">
						Stay fit. Eat Right. Exercise Well
					</h3>
					<p className="md:max-w-[425px] text-center md:text-left">
						Hit your fitness goals by eating right and exercising right with Stayfit. Get meal and exercise
						recommendation daily
					</p>
					<Button label="Create an account now" className="text-white bg-[#6938EF]" />
					<div className="flex flex-wrap justify-center gap-[0.6rem] items-center flex-row mt-[2rem]">
						{moreData.map((data, _index: number) => (
							<div key={_index} className="flex items-center gap-[0.4rem]">
								<p className="text-[42px]">{data.count}</p>
								<h3>{data.name}</h3>
							</div>
						))}
					</div>
				</div>
				<div>
					<Image src="/Illustration.png" preview={false} alt="Illustration image" />
				</div>
			</div>
			<div className="mt-[2rem]">
				<h3 className="text-center text-[32px] font-bold text-[#6938EF]">Our Features</h3>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mx-auto max-w-[80%] mt-[1rem]">
					{features.map((feature, _index: number) => (
						<Card key={_index} className="flex items-center justify-center flex-col">
							<div className="flex mx-auto mb-[2rem] bg-[#F0F5FF] h-[76px] w-[76px] items-center justify-center">
								<Image src={feature.icon} alt={feature.title} />
							</div>
							<h3 className="text-center font-semibold text-[20px] mb-[0.3rem]">{feature.title}</h3>
							<p className="text-center text-sm">{feature.description}</p>
							<div className="flex text-[#6938EF] justify-center mt-[2rem] gap-4 items-center space-x-4">
								Learn More <ArrowRightOutlined />
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
