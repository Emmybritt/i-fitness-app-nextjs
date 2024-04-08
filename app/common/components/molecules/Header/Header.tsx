import { headerlinks } from "@app/app/common/constants/data";
import Link from "next/link";
import React from "react";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
	return (
		<div className="flex items-center sticky top-0 w-full bg-white flex-wrap z-20 justify-between px-[1rem] lg:px-[3rem] h-[6rem]">
			<h3 className="font-semibold text-[#6938EF] text-[20px]">Stayfit</h3>
			<div className="md:flex hidden items-center gap-[2rem]">
				{headerlinks.map((link, _index: number) => (
					<a className="font-medium text-[16px]" key={_index}>
						{link.name}
					</a>
				))}
			</div>
			<div className="md:flex hidden items-center gap-[1rem]">
				<Link href="/login">Sign in</Link>
				<Link href="/register" className="bg-[#6938EF] rounded-md text-white px-[2rem] py-[.6rem]">
					Create free account
				</Link>
			</div>
			<div className="flex md:hidden ">
				<MenuOutlined />
			</div>
		</div>
	);
};

export default Header;
