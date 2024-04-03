"use client";
import { useAuth } from "@app/app/(modules)/(authentication)/infrastructure/hooks/useAuth";
import { bottomSideBarData, sidebarData } from "@app/app/common/constants/sidebar";
import { Image } from "antd";
import { useState } from "react";
import SidebarCard from "../molecules/SidebarCard";

const Sidebar = () => {
	const { signout } = useAuth();
	const [currentPage, setCurrentPage] = useState<string>("dashboard");
	function setPage(page: string) {
		setCurrentPage(page);
	}
	return (
		<div className="h-[80%] fixed">
			<div className="mt-[2rem] mb-[1rem]">
				<h3 className="font-[800] text-[18px] text-center text-[#01018C]">Stayfit</h3>
			</div>
			<div className="flex flex-col justify-between h-full">
				<div className="px-[0.7rem] my-[2rem] space-y-[0.3rem]">
					{sidebarData.map((data, _index: number) => (
						<SidebarCard currentPage={currentPage} data={data} nextPage={setPage} key={_index} />
					))}
				</div>
				<div className="px-[0.7rem] my-[2rem] space-y-[0.3rem] divide-y">
					{bottomSideBarData.map((data, _index: number) => (
						<SidebarCard
							currentPage={currentPage}
							data={data}
							nextPage={() => {
								if (data.text === "Logout") {
									signout();
								} else {
									setPage(data.to);
								}
							}}
							key={_index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
