import React from "react";
import { MouseEventHandler } from "react";

type VariantKeys = "primary" | "secondary" | "tertiary" | "success" | "danger";
type TSize = "small" | "normal" | "large";
type ButtonTypeKeys = "outline" | "solid";

interface IButton {
	isDisabled?: boolean;
	backgroundColor?: string;
	variant?: VariantKeys;
	size?: TSize;
	label: string;
	className?: string;
	type?: ButtonTypeKeys;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}
export const Button: React.FC<IButton> = ({ label, onClick, className, backgroundColor = "#6938EF", isDisabled, leftIcon, rightIcon }) => {
	const classNameData = `${className} h-[60px] rounded-md space-x-2 justify-center flex flex-row items-center w-[100%] bg-[${backgroundColor}]`;
	return (
		<button onClick={onClick} disabled={isDisabled} className={classNameData}>
			<div>{leftIcon}</div>
			<p className="font-[500] text-[16px]">{label}</p>
			<div>{rightIcon}</div>
		</button>
	);
};
