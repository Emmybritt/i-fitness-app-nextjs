"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import { useAuth } from "../../../infrastructure/hooks/useAuth";

const ConfirmOTp = () => {
	const { error, loading, form, handleChangeConfirmationCode, confirmOtpSignUp } = useAuth();
	return (
		<div className="max-w-[80%] mx-auto flex-col flex items-center">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold">Confirm Otp</h1>
				<div className="w-full space-y-[1rem]">
					<CustomInput
						label="Email Address"
						placeholder="Enter your email address"
						onChange={(e) => handleChangeConfirmationCode("userName", e.target.value)}
						error={error?.userName}
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
					onClick={confirmOtpSignUp}
				/>
			</div>
		</div>
	);
};

export default ConfirmOTp;
