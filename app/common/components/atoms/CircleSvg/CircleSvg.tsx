import React from "react";

interface RecommendedFoodProp {
	backgroundColor?: string;
	calories?: number;
}
const CircleSvg: React.FC<RecommendedFoodProp> = ({ backgroundColor = "#6938EF", calories }) => {
	return (
		<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="28" cy="28" r="28" fill={backgroundColor} />
			<text x="15" y="25" fill="white" style={{ fontWeight: 600 }}>
				{calories}
			</text>
			<text x="18" y="40" fill="white">
				cal
			</text>
		</svg>
	);
};

export default CircleSvg;
