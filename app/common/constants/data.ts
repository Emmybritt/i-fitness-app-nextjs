import { EChartsOption } from "echarts-for-react";

export enum INPUTS {
	signupData = "userSignInData",
}

export const mySchedules = [
	{ title: "Yoga", time: "08:00", round: "20min", image: "/images/yoga.png" },
	{ title: "Stretch", time: "08:30", round: "20 Sets", image: "/images/stretch.png" },
	{ title: "Back Stretch", time: "08:50", round: "10 rounds", image: "/images/backstretch.png" },
	{ title: "Sit ups", time: "9:00", round: "10 rounds", image: "/images/situps.png" },
	{ title: "Push up", time: "9:10", round: "10 rounds", image: "/images/pushup.png" },
];

export const mealPlanData = [
	{ title: "Stirred fried Pasta", content: "Grilled Turkey and Salad", time: "Breakfast", calories: 300 },
	{ title: "Spargetti Bolognese", content: "With onions and pepper", time: "Launch", calories: 500 },
	{ title: "Fufu and Egusi Soup", content: "Cameroun peper and crayfish", time: "Dinner", calories: 255 },
];

export const caloriesIntake = [
	{
		mg: "200mg",
		foodClass: "Carbs",
		image: "/images/carbonhidrate.png",
	},
	{
		mg: "500mg",
		foodClass: "Protein",
		image: "/images/protein.png",
	},
	{
		mg: "300mg",
		foodClass: "Fats",
		image: "/images/fats.png",
	},
	{
		mg: "0mg",
		foodClass: "Fiber",
		image: "/images/fiber.png",
	},
];

export const todaysMeal = [
	{
		mealTime: "Breakfast",
		name: "Oatmeal and granola",
		image: "/images/meal.png",
		rating: 4,
		time: "9:00am",
		carb: 8,
		protein: 16,
		fat: 6,
	},
	{
		mealTime: "Lauch",
		name: "Oatmeal and granola",
		image: "/images/meal.png",
		rating: 3.5,
		time: "2:00pm",
		carb: 7,
		protein: 36,
		fat: 20,
	},
	{
		mealTime: "Dinner",
		name: "Oatmeal and granola",
		image: "/images/meal.png",
		rating: 3,
		time: "2:00pm",
		carb: 10,
		protein: 1,
		fat: 2,
	},
];

export const nearestStore = [
	{
		storeName: "Store HQ",
		address: "Oyetubo street, Ikeja, Lagos",
		ratings: 4,
		distance: "500m",
	},
	{
		storeName: "Store HQ",
		address: "Oyetubo street, Ikeja, Lagos",
		ratings: 3,
		distance: "500m",
	},
];

export const recomendedVideos = [
	{
		thumbnail: "/images/video-icon.png",
		title: "Lower body build",
		author: "Jamie Carson",
	},
	{
		thumbnail: "/images/video-icon.png",
		title: "Lower body build",
		author: "Jamie Carson",
	},
	{
		thumbnail: "/images/video-icon.png",
		title: "Lower body build",
		author: "Jamie Carson",
	},
];

export const postWorkoutSessions = [
	{
		name: "Meditation",
		from: "5:00pm",
		to: "6:00pm",
	},
	{
		name: "Meditation",
		from: "5:00pm",
		to: "6:00pm",
	},
];

export const todaysWorkout = [
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
	{
		image: "/images/userStretch.png",
		measure: "20 min",
		name: "Stretch",
	},
];

export const BarchartOption: EChartsOption = {
	xAxis: {
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {},
	series: [
		{
			type: "bar",
			data: [23, 24, 18, 25, 27, 28, 25],
		},
	],
};

export const PiechartOption: EChartsOption = {
	tooltip: {
		trigger: "item",
	},
	legend: {
		top: "5%",
		left: "center",
	},
	series: [
		{
			name: "Access From",
			type: "pie",
			radius: ["40%", "70%"],
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: "center",
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 40,
					fontWeight: "bold",
				},
			},
			labelLine: {
				show: false,
			},
			data: [
				{ value: 1048, name: "Cardio" },
				{ value: 735, name: "Stretching" },
				{ value: 580, name: "Treadmill" },
				{ value: 484, name: "Strenth" },
				{ value: 300, name: "Energy" },
			],
		},
	],
};
