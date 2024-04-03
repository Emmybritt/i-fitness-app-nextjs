import Card from "@app/app/common/components/atoms/Card/Card";
import { recomendedVideos } from "@app/app/common/constants/data";
import { Image } from "antd";
import Link from "next/link";
import React from "react";

const RecommendedVideos = () => {
	return (
		<>
			<div className="flex items-center justify-between mb-[1rem]">
				<h3 className="text-[16px] font-semibold">Recommended Videos</h3>
				<Link href="/recommended-videos">View All</Link>
			</div>
			<div className="space-y-[1rem]">
				{recomendedVideos.map((video, _index: number) => (
					<Card key={_index} className="h-[93.48px] rounded-xl">
						<div className="flex justify-between items-center gap-[1rem]">
							<div className="flex items-center gap-[1rem]">
								<Image src={video.thumbnail} alt={video.title} preview={false} />
								<div className="">
									<h3 className="text-[14.76px] font-medium">{video.title}</h3>
									<p className="text-[12.1px] text-[#7D7D7D]">{video.author}</p>
								</div>
							</div>
							<Image src="/images/play.png" alt={"play button"} preview={false} />
						</div>
					</Card>
				))}
			</div>
		</>
	);
};

export default RecommendedVideos;
