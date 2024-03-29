import config from "@app/app/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { signIn, signUp, confirmSignUp } from "aws-amplify/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { ConfirmOtpCode, UserRegisteration } from "../../domain/user";
import { useRouter } from "next/navigation";

Amplify.configure(config);

export const useAuth = () => {
	const [form, setForm] = useState<UserRegisteration | null>(null);
	const [error, setError] = useState<UserRegisteration | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [confirmOtp, setConfirmOtp] = useState<ConfirmOtpCode>();
	const router = useRouter();

	function handleChange(name: keyof UserRegisteration, value: string, required = true) {
		if (required && value === "") {
			setError((prev: any) => {
				return {
					...prev,
					[name]: `${name} is required!!!`,
				};
			});
			return;
		}
		setError((prev: any) => {
			return {
				...prev,
				[name]: null,
			};
		});
		setForm((prev: any) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleChangeConfirmationCode(name: keyof ConfirmOtpCode, value: string) {
		if (value === "") {
			setError((prev: any) => {
				return {
					...prev,
					[name]: `${name} is required!!!`,
				};
			});
			return;
		}
		setError((prev: any) => {
			return {
				...prev,
				[name]: null,
			};
		});
		setConfirmOtp((prev: any) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	async function register() {
		setLoading(true);
		try {
			if (form?.email && form.password && form.phoneNumber && form.phoneNumber) {
				const { isSignUpComplete, userId, nextStep } = await signUp({
					username: form?.userName,
					password: form?.password,
					options: {
						userAttributes: {
							email: form.email,
							phone_number: form.phoneNumber,
						},
						autoSignIn: true,
					},
				});
				setLoading(false);
				if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
					router.push("/confirm-otp");
				}
			} else {
				setLoading(false);
				toast("Some fields are missing please complete the form fields");
			}
		} catch (error: any) {
			setLoading(false);
			toast(error.message);
		}
	}
	async function login() {
		try {
			if (form) {
				setLoading(true);
				const { isSignedIn, nextStep } = await signIn({ username: form?.email, password: form?.password });
				if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
					router.push("/confirm-otp");
				} else if (nextStep.signInStep === "DONE") {
					router.push("/dashboard");
				}
			}
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			toast(error.message);
		}
	}

	async function confirmOtpSignUp() {
		setLoading(true);
		try {
			if (confirmOtp) {
				const { isSignUpComplete, nextStep } = await confirmSignUp({
					username: confirmOtp?.userName,
					confirmationCode: confirmOtp?.confirmationCode,
				});
				setLoading(false);
				if (nextStep.signUpStep === "DONE") {
					router.push("dashboard");
				}
			}
		} catch (error: any) {
			setLoading(false);
			toast(error.message);
		}
	}
	return {
		handleChange,
		register,
		login,
		confirmOtpSignUp,
		error,
		loading,
		confirmSignUp,
		form,
		handleChangeConfirmationCode,
	};
};
