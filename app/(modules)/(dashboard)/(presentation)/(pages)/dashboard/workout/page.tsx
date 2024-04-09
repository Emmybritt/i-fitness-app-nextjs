"use client";
import { useGetRecommendedWorkout } from "@app/app/(modules)/(dashboard)/infrastructure/hooks/useGetRecommendedWorkout";
import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";
import Card from "@app/app/common/components/atoms/Card/Card";
import { BarchartOption, PiechartOption } from "@app/app/common/constants/data";
import ReactECharts from "echarts-for-react";
import DashboardHeader from "../../../molecules/DashboardHeader";
import PostWorkSessions from "../../../molecules/PostWorkSessions";
import RecommendedVideos from "../../../molecules/RecommendedVideos";
import TodaysWorkout from "../../../molecules/TodaysWorkout";
import UserAchievements from "../../../molecules/UserAchievemets";

const Workout = () => {
	const user = useAppSelector((state) => state.userSlice);

	const { workouts } = useGetRecommendedWorkout(user.user);

	return (
		<div className="w-full px-[1.5rem] sm:px-[4rem]">
			<DashboardHeader currentPage="Workout" pageTitle="" />
			<div className="flex flex-col lg:flex-row gap-[2rem]">
				<div className="lg:w-[70%] w-[100%]">
					<h3 className="mb-[1rem] text-[16px] font-semibold">Workout</h3>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
						<Card title="Activity" className="">
							<ReactECharts option={BarchartOption} style={{ marginBottom: 6 }} />
						</Card>
						<Card title="Progress" className="">
							<ReactECharts option={PiechartOption} style={{ marginBottom: 6 }} />
						</Card>
					</div>
					<UserAchievements />
				</div>
				<div className="lg:w-[30%]">
					<RecommendedVideos />
					<PostWorkSessions />
				</div>
			</div>
			<TodaysWorkout workouts={workouts && workouts?.slice(0, 6)} />
		</div>
	);
};

export default Workout;
