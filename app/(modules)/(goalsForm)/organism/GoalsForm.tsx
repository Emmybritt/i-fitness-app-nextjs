"use client";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import CustomDatePicker from "@app/app/common/components/atoms/CustomDatePicker/CustomDatePicker";
import CustomSelect from "@app/app/common/components/atoms/CustomSelect/CustomSelect";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import { useGoals } from "../(presentation)/infrastructure/hooks/useGoals";

const GoalsForm = () => {
	const { current, next, errors, handleChange, submit, isLoading } = useGoals();
	const steps = () => {
		return [
			{
				title: "First",
				content: (
					<>
						<div className="w-full space-y-[1rem]">
							<CustomDatePicker
								label="Date Of Birth"
								onChange={(value, dateString) => handleChange("dob", dateString.toString())}
								placeholder="Enter your date of birth"
								type="date"
								error={errors?.dob}
							/>
							<CustomSelect
								label="Gender"
								onChange={(value) => handleChange("gender", value)}
								placeholder="Select your gender"
								error={errors?.gender}
								options={[
									{ label: "Male", value: "male" },
									{ label: "Female", value: "female" },
								]}
							/>
							<CustomInput
								error={errors?.weight}
								label="Weight(KG)"
								onChange={(e) => handleChange("weight", e.target.value)}
								placeholder="Enter your weight in kg e.g 75"
							/>
							<CustomInput
								label="Height(cm)"
								error={errors?.height}
								onChange={(e) => handleChange("height", e.target.value)}
								placeholder="Enter your height in cm e.g 57"
							/>
						</div>
					</>
				),
			},
			{
				title: "Second",
				content: (
					<div className="w-full space-y-[1rem]">
						<CustomSelect
							label="Veg or Non-veg"
							placeholder="Are you a vegeterian"
							options={[
								{ label: "Yes", value: "yes" },
								{ label: "No", value: "no" },
							]}
							onChange={(value) => handleChange("vegeterian", value, false)}
						/>
						<CustomInput
							label="Country"
							placeholder="Enter your Country"
							error={errors?.country}
							onChange={(e) => handleChange("country", e.target.value)}
						/>
						<CustomInput
							label="State"
							placeholder="Enter your state"
							error={errors?.country}
							onChange={(e) => handleChange("state", e.target.value)}
						/>
						<CustomInput
							label="Allergy (enter none if no allergies)"
							placeholder="Enter your Allergy"
							error={errors?.allergies}
							onChange={(e) => handleChange("allergies", e.target.value)}
						/>
						<CustomInput
							label="Generic Disease (enter none if no disease)"
							placeholder="Specify Any Generic Disease"
							error={errors?.disease}
							onChange={(e) => handleChange("disease", e.target.value)}
						/>
						<CustomInput
							label="Your Goals"
							placeholder="Enter your goals"
							error={errors?.goals}
							onChange={(e) => handleChange("goals", e.target.value)}
						/>
					</div>
				),
			},
		];
	};

	return (
		<div className="max-w-[95%] md:max-w-[80%] lg:max-w-[50%] px-[1rem] md:px-[3rem] py-[3rem] bg-white mx-auto flex-col flex items-center rounded-[3rem]">
			<div className="w-full flex items-center flex-col justify-center">
				<h1 className="text-normal font-semibold text-center">Account Created Successfully</h1>
				<p className="text-center mb-[3rem]">Kindly fill the form below as this will help to curate the right diet and workout plan for you</p>
				{steps()[current].content}
				<Button
					label={isLoading ? "Please Wait..." : current === 1 ? "Continue" : "Next"}
					onClick={() => {
						if (current === 1) {
							submit();
						} else {
							next();
						}
					}}
					className="bg-[#6938EF] text-white mt-[3rem]"
				/>
			</div>
		</div>
	);
};

export default GoalsForm;
