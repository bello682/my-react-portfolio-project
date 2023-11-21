import { Link } from "react-router-dom";
import React from "react";
import {
	FaHome,
	FaUserAlt,
	FaLaptop,
	FaGraduationCap,
	FaLayerGroup,
	FaSmile,
	FaAddressBook,
} from "react-icons/fa";
export default function sideNavBar() {
	// console.log(Link);
	return (
		<div>
			<nav className="nav_sidebar">
				<div className="side_bar_wall">
					<div className="logo">
						<img src="./images/logo.png" alt="LOGO" className="logoImage" />
						<h1>DEVELOPER</h1>
					</div>

					<div className="nav_menu">
						<ul>
							<li>
								<FaHome className="icons" />
								<Link to={"/"} reloadDocument>
									Home
								</Link>
							</li>
							<li>
								<FaUserAlt className="icons" />
								<Link to={"/AboutMe"} reloadDocument>
									About
								</Link>
							</li>
							<li>
								<FaLaptop className="icons" />
								<Link to={"/ServicePage"} reloadDocument>
									Service
								</Link>
							</li>
							<li>
								<FaGraduationCap className="icons" />
								<Link to={"/ExperiencePage"} reloadDocument>
									Experience
								</Link>
							</li>
							<li>
								<FaLayerGroup className="icons" />
								<Link to={"/WorkPage"} reloadDocument>
									Work
								</Link>
							</li>
							<li>
								<FaSmile className="icons" />
								<Link to={"/TestimonialPage"} reloadDocument>
									Testimonial
								</Link>
							</li>
							<li>
								<FaAddressBook className="icons" />
								<Link to={"/ContactPage"}>Contact</Link>
							</li>
						</ul>

						{/* <h1> WELCOME TO THE WORLD BEST DESIGN.</h1> */}
					</div>
				</div>
			</nav>
		</div>
	);
}
