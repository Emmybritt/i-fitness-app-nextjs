import React from "react";

interface CardProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
const Card: React.FC<CardProps> = ({ children, title, className = "h-[189px]", onClick }) => {
	return (
		<div onClick={onClick} className={`bg-white  p-[1.5rem] ${className}`}>
			<h2 className="text-[#455154] text-[17px] font-semibold">{title}</h2>
			<div>{children}</div>
		</div>
	);
};

export default Card;
