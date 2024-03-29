import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

interface CustomInput {
	label?: string;
	placeholder?: string;
	className?: string;
	type?: "password" | "text" | "date" | "select";
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	error?: string;
	value?: string;
	readOnly?: boolean;
}

export const CustomInput: React.FC<CustomInput> = ({ label, placeholder, type = "text", onChange, error, value, readOnly }) => {
	return (
		<div className="w-full">
			{label && (
				<label htmlFor={label} className="text-[#9794AA] mb-[1rem]">
					{label}
				</label>
			)}
			{type === "text" && (
				<Input
					readOnly={readOnly}
					id={label}
					className="h-[60px] w-[100%] text-lg"
					value={value}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
				/>
			)}
			{type === "password" && (
				<Input.Password
					readOnly={readOnly}
					id={label}
					className="h-[60px] w-[100%] text-lg"
					value={value}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
				/>
			)}

			{error && <p className="text-xs text-red-600 ml-[.4rem] capitalize">{error}</p>}
		</div>
	);
};
