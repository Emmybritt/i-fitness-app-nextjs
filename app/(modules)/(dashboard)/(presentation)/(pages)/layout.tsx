"use client";
import React, { useEffect } from "react";
import Sidebar from "../organism/Sidebar";
import { useAuth } from "@app/app/(modules)/(authentication)/infrastructure/hooks/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const { getUserData } = useAuth();

	useEffect(() => {
		getUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="flex flex-row bg-[#f2f8fd]">
			<div className="mn:w-[15%] mn:h-[100vh] hidden mn:block bg-white">
				<Sidebar />
			</div>
			<div className="w-[100%] mn:w-[85%]">{children}</div>
		</div>
	);
};

export default DashboardLayout;
