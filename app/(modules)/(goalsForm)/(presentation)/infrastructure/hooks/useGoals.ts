import { useState } from "react";
import { UserGoals } from "../../domain/userGoals";
import { toast } from "react-toastify";

export const   useGoals = () => {
	const [form, setForms] = useState<UserGoals>();
	const [errors, setErrors] = useState<UserGoals>();
	const [current, setCurrent] = useState(0);

	const next = () => {
		if (form?.dob && form?.gender && form?.weight && form.height) {
			setCurrent(current + 1);
		} else {
			toast("Some fields are missing");
		}
	};

	function submit() {
		if (form?.vegeterian && form?.country && form?.allergies && form.disease && form.goals) {
			console.log(form);
		} else {
			toast("Some fields are missing");
		}
	}

	function handleChange(name: keyof UserGoals, value: string, isRequired = true) {
		console.log(name, value);
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
	};
};
