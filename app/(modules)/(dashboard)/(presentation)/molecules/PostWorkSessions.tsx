import Card from "@app/app/common/components/atoms/Card/Card";
import { postWorkoutSessions, recomendedVideos } from "@app/app/common/constants/data";
import { Image } from "antd";

const PostWorkSessions = () => {
	return (
		<>
			<div className="flex items-center justify-between my-[1rem]">
				<h3 className="text-[16px] font-semibold">Post Workout sessions</h3>
			</div>
			<div className="space-y-[1rem]">
				{postWorkoutSessions.map((session, _index: number) => (
					<Card key={_index} className="h-[93.48px] bg-[#e7f3f7] rounded-xl">
						<div className="flex flex-col gap-[0.2rem]">
							<h3 className="text-[15.1px] font-semibold text-[#59748A]">{session.name}</h3>
							<div className="flex items-center">
								<p className="text-[15.1px] text-[#59748A]">{session.from}</p> -
								<p className="text-[15.1px] text-[#59748A]">{session.to}</p>
							</div>
						</div>
					</Card>
				))}
			</div>
		</>
	);
};

export default PostWorkSessions;
