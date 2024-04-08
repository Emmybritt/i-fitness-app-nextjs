import React from "react";
import { CustomInput } from "../Input/Input";
import { Button } from "../Button/Button";

const Footer: React.FC = () => {
	return (
		<div className="bg-[#6938EF]">
			<div className="flex items-center text-white justify-between max-w-[80%] mx-auto px-[3rem] py-[2rem]">
				<h3>2023 by vastlearn . All right reserved</h3>
				<p>Terms and conditions | Privacy policy</p>
			</div>
		</div>
	);
};

export default Footer;
