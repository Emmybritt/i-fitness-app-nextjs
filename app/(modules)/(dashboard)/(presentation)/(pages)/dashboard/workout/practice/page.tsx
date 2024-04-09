"use client";
import Card from "@app/app/common/components/atoms/Card/Card";
import React, { useEffect, useState } from "react";
import DashboardHeader from "../../../../molecules/DashboardHeader";
import TodaysWorkout from "../../../../molecules/TodaysWorkout";
import { Button } from "@app/app/common/components/atoms/Button/Button";
import { Image, Spin } from "antd";
import { useGetRecommendedWorkout } from "@app/app/(modules)/(dashboard)/infrastructure/hooks/useGetRecommendedWorkout";
import { RecommededWorkouts } from "@app/app/(modules)/(goalsForm)/(presentation)/domain/userGoals";
import { useAppSelector } from "@app/app/(modules)/core/infrastructure/store";

const WorkoutPratice = () => {
	const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(1);
	const user = useAppSelector((state) => state.userSlice);
	const [currentWorkout, setCurrentWorkout] = useState<RecommededWorkouts | null>(null);
	const { workouts, isFetching } = useGetRecommendedWorkout(user.user);
	useEffect(() => {
		if (workouts) {
			setCurrentWorkout(workouts[currentWorkoutIndex]);
		}
	}, [workouts, currentWorkoutIndex]);

	function handleNextWorkout() {
		if (workouts && workouts?.length - 1 === currentWorkoutIndex) {
			return;
		} else if (currentWorkoutIndex === 0) {
			return;
		}
		setCurrentWorkoutIndex(currentWorkoutIndex + 1);
	}
	if (isFetching) {
		return (
			<div className="flex items-center justify-center h-[80vh]">
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div>
			<div className="w-full px-[1.5rem] sm:px-[4rem]">
				<DashboardHeader currentPage="Workout / pratice" pageTitle="" />
				<Card className="w-[100%] h-[351px]">
					<Button label="20:00" className="bg-[#F2ECFE] w-[113px] text-[#6938EF]" />
					<div className="flex items-center">
						<Image src="/userExcersice.png" preview={false} height={200} className="w-[203.66px]" alt="back stretch icon" />
						<div className="space-y-2">
							<h3 className="text-[32px] font-semibold">{currentWorkout?.name}</h3>
							<p>{currentWorkout?.rounds}</p>
							<p className="text-[16px]">{currentWorkout?.description}</p>
							<Button label="Next" className="w-[170px] text-white" onClick={handleNextWorkout} />
						</div>
					</div>
				</Card>
				<div className="mt-[2rem]">
					<TodaysWorkout showTitle={false} workouts={workouts} setWorkout={setCurrentWorkout} setCurrentIndex={setCurrentWorkoutIndex} />
				</div>
			</div>
		</div>
	);
};

export default WorkoutPratice;
