import { useAuth } from "@app/app/(modules)/(authentication)/infrastructure/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserGoals } from "../../domain/userGoals";

export const useGoals = () => {
	const [form, setForms] = useState<UserGoals>();
	const [errors, setErrors] = useState<UserGoals>();
	const [current, setCurrent] = useState(0);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { updateUserProfile } = useAuth();
	const router = useRouter();

	const next = () => {
		if (form?.dob && form?.gender && form?.weight && form.height) {
			setCurrent(current + 1);
		} else {
			toast("Some fields are missing");
		}
	};

	function submit() {
		if (form?.vegeterian && form?.country && form?.allergies && form.disease && form.goals) {
			setLoading(true);
			updateUserProfile(form)
				.then((data: any) => {
					toast("Registeration Completed");
					router.push("/dashboard");
					setLoading(false);
				})
				.catch((error: Error) => {
					toast(error.message);
					setLoading(false);
				});
		} else {
			toast("Some required fields are missing!!!");
		}
	}

	function handleChange(name: keyof UserGoals, value: string, isRequired = true) {
		if (isRequired && !value) {
			setErrors((prev: any) => ({
				...prev,
				[name]: `${name} is required`,
			}));
			return;
		}

		setErrors((prev: any) => ({
			...prev,
			[name]: null,
		}));

		setForms((prev: any) => ({
			...prev,
			[name]: value,
		}));
	}
	return {
		form,
		handleChange,
		next,
		submit,
		current,
		errors,
		isLoading,
	};
};
