import { Image } from "antd";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<Image
				alt="auth-bg"
				className="w-full lg:block hidden"
				style={{ height: 952 }}
				src="/images/authBgicon.png"
				preview={false}
			/>
			<div className="rounded-tl-[4rem] my-auto">{children}</div>
		</div>
	);
}
