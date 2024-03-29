import { DatePicker } from "antd";
import React from "react";

interface CustomDatePickerProp {
	label?: string;
	placeholder?: string;
	className?: string;
	type?: "password" | "text" | "date" | "select";
	onChange?: (date: React.ChangeEvent<HTMLInputElement>, dateString: string | string[]) => void;
	error?: string;
	value?: React.ChangeEvent<HTMLInputElement>;
	readOnly?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProp> = ({ readOnly, value, label, onChange, error }) => {
	return (
		<div>
			{label && (
				<label htmlFor={label} className="text-[#9794AA] mb-[1rem]">
					{label}
				</label>
			)}
			<DatePicker readOnly={readOnly} id={label} value={value} className="h-[60px] w-[100%] text-lg" onChange={onChange} />
			{error && <p className="text-xs text-red-600 ml-[.4rem] capitalize">{error}</p>}
		</div>
	);
};

export default CustomDatePicker;
