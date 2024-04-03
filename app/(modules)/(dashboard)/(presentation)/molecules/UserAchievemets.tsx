import AchievementCard from "@app/app/common/components/atoms/AchievementCard/AchievementCard";
import Card from "@app/app/common/components/atoms/Card/Card";
import React from "react";

const UserAchievements = () => {
	return (
		<Card title="Achievements" className="mt-[1.5rem]">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]">
				<AchievementCard className="bg-[#6938EF]" type="Kcal" image="/images/kcal.png" value="550" />
				<AchievementCard className="bg-[#3FBDF1]" type="Poses" image="/images/poses.png" value="25" />
				<AchievementCard className="bg-[#F87A4C]" type="hours" image="/images/hours.png" value="135" />
				<AchievementCard className="bg-[#71DDB1]" type="Sets" image="/images/sets.png" value="500" />
			</div>
		</Card>
	);
};

export default UserAchievements;
