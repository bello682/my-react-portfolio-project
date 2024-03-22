import { useRef } from "react";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import peoples from "./apiWork";

export default function WorkPage() {
	let imageContainerRef = useRef(null);

	const prev = () => {
		imageContainerRef.current.scrollLeft -= 500;
		console.log("prev scrollLeft", imageContainerRef.current.scrollLeft);
	};

	const next = () => {
		imageContainerRef.current.scrollLeft += 500;
		console.log("next scrollLeft", imageContainerRef.current.scrollLeft);
	};

	const Citizens = peoples.map((person) => {
		return (
			<>
				<div className="each_slide_content">
					<div className="portfolioImage">
						<img
							src={person.UrlImg}
							alt="All Images"
							className="PORTFOLIOPROJECT"
						/>
					</div>

					<div className="PROJECT_PORTFOLIO_INFOMATION_GUIDE">
						<h2 className="portfolio_title">{person.Title}</h2>
						<p className="portfolio_description">{person.Description}</p>
					</div>
				</div>
			</>
		);
	});

	return (
		<section className="main_work_page">
			<h1 id="mAIN_H1">PORTFOLIO</h1>
			<p id="main_P">My recent work</p>

			<div className="work_content">
				<div className="slider_work_port">
					<div>
						<FaAngleLeft className="portfolio_arrow_left" onClick={prev} />
					</div>
					<div className="slyde_content_all" ref={imageContainerRef}>
						{Citizens}
					</div>

					<div>
						<FaAngleRight className="portfolio_arrow_right" onClick={next} />
					</div>
				</div>
			</div>
		</section>
	);
}
