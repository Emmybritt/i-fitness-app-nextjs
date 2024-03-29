import React from "react";
import GoalsForm from "../../../organism/GoalsForm";

const page = () => {
	return (
		<div
			style={{ backgroundImage: "url(/images/goals-form.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
			className="h-[100vh]">
			<GoalsForm />
		</div>
	);
};

export default page;
