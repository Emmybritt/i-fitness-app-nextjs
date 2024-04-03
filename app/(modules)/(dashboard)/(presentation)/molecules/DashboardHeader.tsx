import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { CustomInput } from "@app/app/common/components/atoms/Input/Input";
import React from "react";
interface DashboardHeaderProp {
	currentPage: string;
	pageTitle: string;
}

const DashboardHeader: React.FC<DashboardHeaderProp> = ({ currentPage, pageTitle }) => {
	return (
		<div>
			<div className="flex items-center justify-between flex-wrap py-[2rem]">
				<div className="flex items-center space-x-1 text-sm text-[#6E7191]">
					<p>Dashboard</p>
					<p>/</p>
					<p>{currentPage}</p>
				</div>
				<div className="max-w-[60%]">
					<CustomInput
						prefix={<SearchOutlined />}
						suffix={<AudioOutlined />}
						className="w-[50px] h-[33px]"
						placeholder="Search any keywords"
					/>
				</div>
			</div>
			<h3 className="text-[#8F92A1] text-[18px]">{pageTitle}</h3>
		</div>
	);
};

export default DashboardHeader;
