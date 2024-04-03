"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import GoogleAuthButton from "@app/app/common/components/molecules/GoogleAuthButton/GoogleAuthButton";
import Link from "next/link";
import { useAuth } from "../../../infrastructure/hooks/useAuth";

const Register = () => {
	const { register, handleChange, error, loading } = useAuth();
	return (
		<div className="max-w-[80%] mx-auto flex-col flex items-center">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold">Create an account</h1>
				<GoogleAuthButton />
				<p className="text-center mt-6 border-t-1">Or</p>
				<div className="w-full space-y-[1rem]">
					<CustomInput
						label="Email Address"
						placeholder="Enter your email address"
						onChange={(e) => handleChange("email", e.target.value, true)}
						error={error?.email}
					/>
					<CustomInput
						label="Full name"
						placeholder="Enter your fullname"
						onChange={(e) => handleChange("full_name", e.target.value, true)}
						error={error?.full_name}
					/>
					<CustomInput
						label="Username"
						placeholder="Enter your Username"
						onChange={(e) => handleChange("userName", e.target.value, true)}
						error={error?.userName}
					/>
					<CustomInput
						label="Phone Number"
						placeholder="Enter your Phone number"
						onChange={(e) => handleChange("phoneNumber", e.target.value, true)}
						error={error?.phoneNumber}
					/>
					<CustomInput
						label="Password"
						placeholder="Create Your Password"
						type="password"
						onChange={(e) => handleChange("password", e.target.value, true)}
						error={error?.password}
					/>
				</div>
				<Button
					onClick={register}
					label={loading ? "Creating..." : "Create an account"}
					className="bg-[#6938EF] text-white mt-[3rem]"
					isDisabled={loading}
				/>
				<p className="mt-[2rem]">
					Already have an account?{" "}
					<Link href="/login" className="text-[#6938EF]">
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
