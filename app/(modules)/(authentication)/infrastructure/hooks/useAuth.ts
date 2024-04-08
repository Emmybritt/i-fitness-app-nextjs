import { UserGoals } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";
import { setUser, setLoadingUserData } from "@app/app/(modules)/core/infrastructure/api/userSlice";
import { useAppDispatch } from "@app/app/(modules)/core/infrastructure/store";
import config from "@app/app/amplifyconfiguration.json";
import { INPUTS } from "@app/app/common/constants/data";
import { Amplify } from "aws-amplify";
import { confirmSignUp, fetchUserAttributes, resendSignUpCode, signIn, signOut, signUp, updateUserAttributes } from "aws-amplify/auth";

import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserRegisteration } from "../../domain/user";

Amplify.configure(config, { ssr: true });

export const useAuth = () => {
	const [form, setForm] = useState<UserRegisteration | null>(null);
	const [error, setError] = useState<UserRegisteration | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [confirmOtp, setConfirmOtp] = useState<string>("");
	const dispatch = useAppDispatch();

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

	function getUserData() {
		dispatch(setLoadingUserData(true));
		return fetchUserAttributes()
			.then((user) => {
				const newUser = {
					email: user.email,
					allergies: user["custom:allergies"],
					country: user["custom:country"],
					disease: user["custom:disease"],
					gender: user["custom:gender"],
					goals: user["custom:goals"],
					height: user["custom:height"],
					name: user.name,
					phoneNumber: user.phone_number,
					userName: user.nickname,
					vegeterian: user["custom:vegeterian"],
					weight: user["custom:weight"],
					dob: user["custom:dob"],
					age: getAge(user["custom:dob"]),
				};
				dispatch(setUser(newUser));
				dispatch(setLoadingUserData(false));
				return newUser;
			})
			.catch((error) => {
				dispatch(setLoadingUserData(false));
			});
	}

	function signout() {
		signOut({ global: true });
		router.push("/login");
		dispatch(setUser(null));
	}

	async function updateUserProfile(data: UserGoals) {
		const output = await updateUserAttributes({
			userAttributes: {
				"custom:allergies": data.allergies,
				"custom:country": data.country,
				"custom:disease": data.disease,
				"custom:dob": data.dob,
				"custom:gender": data.gender,
				"custom:goals": data.goals,
				"custom:height": data.height,
				"custom:vegeterian": data.vegeterian,
				"custom:weight": data.weight,
			},
		});
	}
	async function register() {
		setLoading(true);
		try {
			if (form?.email && form.password && form.phoneNumber && form.phoneNumber) {
				localStorage.setItem(INPUTS.signupData, JSON.stringify({ password: form.password, email: form.email }));
				const { isSignUpComplete, userId, nextStep } = await signUp({
					username: form?.email,
					password: form?.password,
					options: {
						userAttributes: {
							email: form.email,
							phone_number: form.phoneNumber,
							name: form.full_name,
							nickname: form.userName,
						},
						autoSignIn: true,
					},
				});
				toast("An otp as been sent to your registered number, kindly verify your email.");
				if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
					router.push(`/confirm-otp?email=${form.email}`);
				}
				setLoading(false);
			} else {
				setLoading(false);
				toast("Some fields are missing please complete the form fields");
			}
		} catch (error: any) {
			setLoading(false);
			toast(error.message);
		}
	}
	function login() {
		if (form) {
			setLoading(true);
			signIn({ username: form?.email, password: form?.password })
				.then(({ isSignedIn, nextStep }) => {
					if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
						resendSignUpCode({ username: form.email });
						router.push("/confirm-otp");
						setLoading(false);
					} else if (nextStep.signInStep === "DONE") {
						getUserData();
						router.push("/dashboard");
						setLoading(false);
					}
				})
				.catch((error: any) => {
					setLoading(false);
					toast(error.message);
				});
		}
	}

	function resendOtp(email: string) {
		if (email) {
			resendSignUpCode({ username: email })
				.then((data) => {})
				.catch((error: any) => {
					toast(error.message);
				});
		} else {
			toast("Please enter an email address");
		}
	}
	function getAge(birthdate?: string) {
		const birthMoment = moment(birthdate);
		const age = moment().diff(birthMoment, "years");
		return age;
	}

	async function confirmOtpSignUp(email: string) {
		setLoading(true);
		try {
			if (confirmOtp) {
				const { isSignUpComplete, nextStep } = await confirmSignUp({
					username: email,
					confirmationCode: confirmOtp,
				});
				setLoading(false);
				if (nextStep.signUpStep === "COMPLETE_AUTO_SIGN_IN") {
					const user = localStorage.getItem(INPUTS.signupData);
					const parsedUser = user && JSON.parse(user);

					signIn({ username: parsedUser?.email, password: parsedUser?.password })
						.then(({}) => {
							router.push("/goal-form");
							toast("Email address confirmed successfully");
							localStorage.removeItem(INPUTS.signupData);
						})
						.catch((error: Error) => toast(error.message));
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
		signout,
		getUserData,
		resendOtp,
		updateUserProfile,
		setConfirmOtp,
	};
};
