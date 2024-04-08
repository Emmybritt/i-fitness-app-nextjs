import Link from "next/link";
import { Button } from "./common/components/atoms/Button/Button";
import Footer from "./common/components/atoms/Footer/Footer";
import Banner from "./common/components/molecules/Banner/Banner";
import Features from "./common/components/molecules/Features/Features";
import Header from "./common/components/molecules/Header/Header";

function Home() {
	return (
		<div className="bg-[#f2f8fd]">
			<Header />
			<Banner />
			<Features />
			<div className="bg-[#6938EF] flex-col flex items-center justify-center py-[3rem] mb-[3rem] mt-[3rem]">
				<h3 className="text-controlTxt text-center text-white mb-[2rem] font-bold px-[1rem] max-w-[1084px] mx-auto">
					Ready to take control of your health and transform your life? Sign up now and embark on a journey towards a
					fitter, healthier you!
				</h3>
				<Link href="/login" className="bg-white w-[345px] text-[#6938EF]">
					Create an account now
				</Link>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
