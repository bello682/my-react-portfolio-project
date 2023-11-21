import React from "react";
// import { useNavigate } from "react-router-dom";
import { FaThumbsUp, FaUsers, FaMugHot } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutMe() {
	// const Navigation = useNavigate();

	// function HandleClick() {
	// 	Navigation("/CongratulationPage");
	// }
	return (
		<div className="aboutme_page">
			<div className="about_wrapper">
				<h1>About Me</h1>
				<div className="ABOUT_INFO_PAGE">
					<div className="About_image_div">
						<img
							src="./images/Tayo image passport.jpg"
							alt="DEV"
							className="About_image_img"
						/>
					</div>

					<div className="About_details_wrapper">
						<div className="About_cv">
							<p>
								I'm Bello Adetayo Olamiji,Software Developer from Nigeria, I
								have experience in Website developement and responsiveness of
								the website,also i'm learning my backend skills.
							</p>
							{/* onClick={HandleClick} */}
							<Link
								className="Link"
								to="/CongratulationPage"
								target="_blank"
								// style={{ textDecoration: "none", color: "white" }}
							>
								<button className="CV_download">Download Cv/Project</button>
							</Link>
						</div>

						<div className="Experience_wrapper">
							<div className="Experience_level">
								<h3>
									Front-End <span className="percent">90%</span>
								</h3>
								<div className="level_percent">
									<div className="level_percentage_green"></div>
								</div>
							</div>

							<div className="Experience_level">
								<h3>
									Javasript <span className="percent">70%</span>
								</h3>
								<div className="level_percent">
									<div className="level_percentage_blue"></div>
								</div>
							</div>

							<div className="Experience_level">
								<h3>
									React <span className="percent">50%</span>
								</h3>
								<div className="level_percent">
									<div className="level_percentage_yellow"></div>
								</div>
							</div>

							<div className="Experience_level">
								<h3>
									Back-End <span className="percent">20%</span>
								</h3>
								<div className="level_percent">
									<div className="level_percentage_red"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Work_client">
					<div className="single_work_exp">
						<FaThumbsUp className="icon_preview" />
						<div className=" pro">
							<h2>20</h2>
							<p>Project Completed</p>
						</div>
					</div>
					<div className="single_work_exp">
						<FaUsers className="icon_preview" />
						<div className="pro">
							<h2>00</h2>
							<p>Satisfied Client</p>
						</div>
					</div>
					<div className="single_work_exp">
						<FaMugHot className="icon_preview" />
						<div className="pro">
							<h2>04</h2>
							<p>Cups of Tea</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
