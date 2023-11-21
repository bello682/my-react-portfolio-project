import React from "react";

export default function workPage() {
	return (
		<div className="main_work_page">
			<h1>WORK</h1>
			<div className="work_page_wrapper">
				<div className="work_and_videos">
					<div className="work_content">
						<img src="./images/work1.png" alt="" />
						<img src="./images/work5.png" alt="" />
							<img src="./images/work3.png" alt="" />
					</div>

					<div className="work_content">
						<img src="./images/work3.png" alt="" />
						<img src="./images/work2.png" alt="" />
						<div className="video_class">
							<video
								autoPlay
								muted
								src="./videos/Simple Dropdown Menu Using HTML and CSS.mp4"
							></video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
