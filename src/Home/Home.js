import React from "react";
// import { useNavigate } from "react-router-dom";
import { FaHome, FaUserAlt, FaLaptop } from "react-icons/fa";

export default function HomePage() {
	// const Navigation = useNavigate();

	function HandleClick() {
		// Navigation("/ContactPage");
	}
	return (
		<section className="sec_wraps">
			<div className="main_home">
				<div className="home_wrapper">
					<div className="image_home">
						<img
							src="./images/Tayo image passport.jpg"
							alt="DEVELOPER LOGO"
							className="IMG_HOME"
						/>
					</div>
					<div className="home_details">
						<div className="content_home">
							<h1> hi i'm Bello Adetayo Olamiji</h1>
							<h3>
								I'm a full Stack Web Developer, The mastermind behind
								captivating websites. I bring dreams to life with code and
								creativity. Let's build something extraordinary together.
							</h3>
						</div>

						<div className="icons_home">
							<FaHome className="social_home_icon" />
							<FaUserAlt className="social_home_icon" />
							<FaLaptop className="social_home_icon" />
						</div>

						<div className="button_home">
							<button className="BTN_HOME" onClick={HandleClick}>
								whatsapp me
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
