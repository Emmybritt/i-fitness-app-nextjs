import React from "react";

interface RecommendedFoodProp {
	backgroundColor?: string;
	width?: string;
	className?: string;
	foodName?: string;
	addons?: string;
	time?: string;
}
const RecommendedFood: React.FC<RecommendedFoodProp> = ({ backgroundColor = "#6938EF", width, className, addons, foodName, time }) => {
	return (
		<svg width="400" className={className} height="140" viewBox="0 0 245 140" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M177.125 22.9483C176.404 10.072 165.753 0 152.856 0H27.52C12.3211 0 0 12.3211 0 27.52V112.48C0 127.679 12.3211 140 27.52 140H217.48C232.679 140 245 127.679 245 112.48V72.8189C245 57.1919 232.003 44.7009 216.389 45.3205L202.357 45.8774C189.097 46.4036 177.866 36.1977 177.125 22.9483Z"
				fill={backgroundColor}
			/>
			<text x="15" y="25" fill="white" style={{ fontWeight: 600, fontSize: 16 }}>
				{foodName}
			</text>
			<text x="8" y="86" fill="white" style={{ fontSize: 11 }}>
				{addons}
			</text>
			<text x="17" y="104" fill="white" style={{ fontSize: 14, fontWeight: 600 }}>
				{time}
			</text>
			<image href="/images/food.png" height="64" width="64" x="170" y="60" />
		</svg>
	);
};

export default RecommendedFood;
