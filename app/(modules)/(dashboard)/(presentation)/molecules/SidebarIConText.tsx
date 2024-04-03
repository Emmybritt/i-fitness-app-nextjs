import React from "react";

interface SidebarIConTextProp {
	text?: string;
	icon?: React.ReactNode;
	arrowIcon?: React.ReactNode;
}

const SidebarIConText: React.FC<SidebarIConTextProp> = ({ icon, text }) => {
	return (
		<div className="flex items-center space-x-[1.5rem]">
			{icon} <p>{text}</p>
		</div>
	);
};

export default SidebarIConText;
