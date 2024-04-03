"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import { INPUTS } from "@app/app/common/constants/data";
import { useEffect, useState } from "react";
import { UserRegisteration } from "../../../domain/user";
import { useAuth } from "../../../infrastructure/hooks/useAuth";

const ConfirmOTp = () => {
	const { error, loading, handleChangeConfirmationCode, confirmOtpSignUp, resendOtp } = useAuth();
	const [userData, setUserData] = useState<Pick<UserRegisteration, "email" | "password">>();
	useEffect(() => {
		const user = localStorage.getItem(INPUTS.signupData);
		if (user) {
			setUserData(JSON.parse(user));
		}
	}, []);
	return (
		<div className="max-w-[80%] mx-auto flex-col flex items-center">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold">Confirm Otp</h1>
				<div className="w-full space-y-[1rem]">
					<CustomInput
						label="Email Address"
						readOnly={true}
						placeholder="Enter your email address"
						onChange={(e) => handleChangeConfirmationCode("userName", e.target.value)}
						error={error?.userName}
						value={userData?.email}
					/>
					<CustomInput
						label="Code"
						placeholder="Enter otp code"
						error={error?.password}
						onChange={(e) => handleChangeConfirmationCode("confirmationCode", e.target.value)}
					/>
				</div>
				<Button
					label={loading ? "Confirming..." : "Confirm"}
					className="bg-[#6938EF] text-white mt-[3rem]"
					onClick={() => userData && confirmOtpSignUp(userData)}
				/>
				<div className="mt-[2rem] flex space-x-6">
					Din&apos;t get an otp code
					<p className="text-[#6938EF] cursor-pointer" onClick={resendOtp}>
						Resend OTp
					</p>
				</div>
			</div>
		</div>
	);
};

export default ConfirmOTp;
