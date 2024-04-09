"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../../infrastructure/hooks/useAuth";
import { Suspense } from "react";

const ConfirmOTp = () => {
	const { error, loading, setConfirmOtp, confirmOtpSignUp, resendOtp } = useAuth();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");

	return (
		<div className="max-w-[80%] mx-auto flex-col flex items-center">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold">Confirm Otp</h1>
				<div className="w-full space-y-[1rem]">
					<CustomInput
						label="Code"
						placeholder="Enter otp code"
						error={error?.password}
						onChange={(e) => setConfirmOtp(e.target.value)}
					/>
				</div>
				<Button
					label={loading ? "Confirming..." : "Confirm"}
					className="bg-[#6938EF] text-white mt-[3rem]"
					onClick={() => email && confirmOtpSignUp(email)}
				/>
				<div className="mt-[2rem] flex space-x-6">
					Din&apos;t get an otp code
					<p className="text-[#6938EF] cursor-pointer" onClick={() => email && resendOtp(email)}>
						Resend OTp
					</p>
				</div>
			</div>
		</div>
	);
};

export function ConfirmOtpComponent() {
	return (
		<Suspense>
			<ConfirmOTp />
		</Suspense>
	);
}
