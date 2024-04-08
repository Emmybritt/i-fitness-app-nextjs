"use client";
import { RightOutlined } from "@ant-design/icons";
import Card from "@app/app/common/components/atoms/Card/Card";
import { todaysWorkout } from "@app/app/common/constants/data";
import { Image } from "antd";
import Link from "next/link";
import { useGetRecommendedWorkout } from "../../infrastructure/hooks/useGetRecommendedWorkout";
import { RecommededWorkouts } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";

interface TodaysWorkoutProp {
	showTitle?: boolean;
	workouts: RecommededWorkouts[] | null;
	setWorkout?: (workout: RecommededWorkouts) => void;
	setCurrentIndex?: (index: number) => void;
}
const TodaysWorkout: React.FC<TodaysWorkoutProp> = ({ showTitle = true, workouts, setWorkout, setCurrentIndex }) => {
	return (
		<div className="">
			{showTitle && (
				<div className="flex items-center justify-between my-[1rem]">
					<h3 className="text-[16px] font-semibold text-[#475569]">Today&apos;s Workout</h3>
					<Link href="/dashboard/workout/practice" className="text-[14px] text-[#6938EF] font-500">
						Get Started <RightOutlined />
					</Link>
				</div>
			)}

			<div className="overflow-x-auto overflow-y-hidden whitespace-nowrap mb-[3rem]">
				<div className="flex flex-row space-x-3">
					{workouts &&
						workouts.map((workout: RecommededWorkouts, _index: number) => (
							<Card
								key={_index}
								className="min-w-[230px] cursor-pointer"
								onClick={() => {
									setWorkout && setWorkout(workout);
									setCurrentIndex && setCurrentIndex(_index);
								}}>
								<div className="flex flex-col items-center justify-center">
									<Image src={"/images/userStretch.png"} preview={false} alt={workout.name} />
									<h3 className="font-semibold text-[#1E293B] text-[14px]">{workout.name}</h3>
									<p className="text-[#6938EF] text-[12px] font-medium bg-[#F2FFFF] rounded-lg px-[1rem] py-[3px]">
										{workout.rounds}
									</p>
								</div>
							</Card>
						))}
				</div>
			</div>
		</div>
	);
};

export default TodaysWorkout;
