import React from "react";
import { Button } from "../../atoms/Button/Button";
import "./banner.css";

const Banner = () => {
	return (
		<div className="h-[863px] bg-banner w-[100%] bg-[#6938EF99]">
			<div className="flex items-center gap-[2rem] justify-center flex-col h-[100%] text-white">
				<h3 className="max-w-[887px] text-bannerText leading-[60px] md:leading-[80px] text-center font-bold">
					Achieve Your Fitness Goals with Our Comprehensive Approach
				</h3>
				<p className="max-w-[919px] font-medium text-[20px] text-center">
					Welcome to StayFit, where we believe in a holistic approach to health and fitness. We&lsquo;re here to guide
					you on your journey towards a healthier lifestyle by providing personalized recommendations for both your diet
					and exercise routines.
				</p>
				<Button label="Create an account now" className="text-[#6938EF] bg-white w-[345px]" />
			</div>
		</div>
	);
};

export default Banner;
