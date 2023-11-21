import React from "react";
import { FaSmile } from "react-icons/fa";

export default function servicePage() {
	return (
		<div className="service_page">
			<div className="service_wrapper">
				<h1 className="head_service_title">Services</h1>
				<div className="service_wraps">
					<div className="card blue">
						<div className="img_card">
							<img
								src="./images/JavaScript.png"
								alt="image-idol"
								className="image_card"
							/>
						</div>
						<h2>Javascript</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
							odit nulla ratione culpa illo perferendis temporibus! Minus quae
							voluptatum nihil?
						</p>
					</div>

					<div className="card yellow">
						<div className="img_card">
							<img
								src="./images/react.png"
								alt="image-idol"
								className="image_card"
							/>
						</div>
						<h2>React Js</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
							odit nulla ratione culpa illo perferendis temporibus! Minus quae
							voluptatum nihil?
						</p>
					</div>

					<div className="card pink">
						<div className="img_card">
							<img
								src="./images/nodejs.png"
								alt="image-idol"
								className="image_card"
							/>
						</div>
						<h2>Node Js</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
							odit nulla ratione culpa illo perferendis temporibus! Minus quae
							voluptatum nihil?
						</p>
					</div>

					<div className="card green">
						<div className="img_card">
							<img
								src="./images/software.png"
								alt="image-idol"
								className="image_card"
							/>
						</div>
						<h2>Software Developer</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
							odit nulla ratione culpa illo perferendis temporibus! Minus quae
							voluptatum nihil?
						</p>
					</div>
				</div>

				<p className="job_services">
					Looking for a custom job?{" "}
					<a href="#" className="job_link">
						Click here
					</a>{" "}
					here to contact me! <FaSmile className="job_smilie" />
				</p>
			</div>
		</div>
	);
}
