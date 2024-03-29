"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import GoogleAuthButton from "@app/app/common/components/molecules/GoogleAuthButton/GoogleAuthButton";
import Link from "next/link";
import { useAuth } from "../../../infrastructure/hooks/useAuth";

const Login = () => {
	const { login, handleChange, error, loading } = useAuth();
	return (
		<div className="max-w-[80%] mx-auto flex-col flex items-center">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold">Sign In</h1>
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
						label="Password"
						placeholder="Enter your Password"
						type="password"
						error={error?.password}
						onChange={(e) => handleChange("password", e.target.value, true)}
					/>
				</div>
				<Button
					isDisabled={loading}
					label={loading ? "Signing in..." : "Sign In"}
					className="bg-[#6938EF] text-white mt-[3rem]"
					onClick={login}
				/>
				<p className="mt-[2rem]">
					Don`t have an account?{" "}
					<Link href="/register" className="text-[#6938EF]">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
