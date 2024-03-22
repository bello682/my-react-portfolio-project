import React from "react";
import { FaServer } from "react-icons/fa";

export default function Patronage() {
	return (
		<div>
			<section className="patronage_wrapper">
				<div className="patronage_wrap">
					<div className="patronage_portfolio">
						<div className="patronage_content_guide">
							<h1 className="patronageHeader">You have new project</h1>
							<p className="PatronageBody">
								Let's embark on an exciting journey of innovation and
								collaboration. Whether it's a stunning website, a powerful web
								application, or an e-commerce platform, I'm here to bring your
								vision to life.
							</p>
							<button className="Button_patronage">
								Contact Me <FaServer className="IconPatronage" />
							</button>
						</div>
						<div className="patro_image_flex">
							<img src="images/work7.png" alt="" className="patro_image_ajust" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
