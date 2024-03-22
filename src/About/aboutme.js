import React from "react";
// import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
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
				<p>All you would like to know About Me</p>
				<div className="ABOUT_INFO_PAGE">
					<div className="About_image_div">
						<img
							src="./images/about-img.png"
							alt="DEV"
							className="About_image_img"
						/>
					</div>

					<div className="About_details_wra">
						<div className="About_cv">
							<p>
								I am a highly talented, motivated, hard-working and ambitious
								web developer who is looking to work in an environment that
								enables me to utilize my skills and grow big together. Am always
								available to take your brand to the top with my skills. I have
								worked with quite a several brands and businesses and I would
								love to work with you.
							</p>

							<div className="Work_client">
								<div className="single_work_exp">
									<FaThumbsUp className="icon_preview" />
									<div className=" pro">
										<h2>
											20 <FaPlus className="pro_plus" />
										</h2>
										<p>Project Completed</p>
									</div>
								</div>
								<div className="single_work_exp">
									<FaUsers className="icon_preview" />
									<div className="pro">
										<h2>
											00 <FaPlus className="pro_plus" />
										</h2>
										<p>Satisfied Client</p>
									</div>
								</div>
								<div className="single_work_exp">
									<FaMugHot className="icon_preview" />
									<div className="pro">
										<h2>
											04 <FaPlus className="pro_plus" />
										</h2>
										<p>Cups of Tea</p>
									</div>
								</div>
							</div>

							<Link
								className="Link_anchortag_download_cV"
								to="/projectPage"
								target="_blank"
							>
								<button className="CV_download">
									Download Cv {"  "} <MdOutlineFileDownload />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
