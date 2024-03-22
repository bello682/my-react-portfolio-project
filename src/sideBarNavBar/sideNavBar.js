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
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
export default function sideNavBar() {
	

	const showNavbar = () => {
		const nav_sidebar = document.querySelector(".nav_menu");
		const option_bar = document.querySelector(".option_bar");
		const close_bar = document.querySelector(".close_bar");

		if (nav_sidebar.className === "nav_menu") {
			nav_sidebar.style.right = "0px";
		}
		option_bar.style.display = "none";
		close_bar.style.display = "flex";
	};

	const hideNavbar = () => {
		const nav_sidebar = document.querySelector(".nav_menu");
		const option_bar = document.querySelector(".option_bar");
		const close_bar = document.querySelector(".close_bar");

		if (nav_sidebar.className === "nav_menu") {
			nav_sidebar.style.right = "100%";
		}

		option_bar.style.display = "flex";
		close_bar.style.display = "none";
	};

	const Moon = () => {
		const moon_dark = document.querySelector(".moon_dark");
		const star_white = document.querySelector(".star_white");
		const body = document.body;
		moon_dark.style.display = "none";
		star_white.style.display = "block";
		body.style.background = "black";
	};

	const star = () => {
		const moon_dark = document.querySelector(".moon_dark");
		const star_white = document.querySelector(".star_white");
		const body = document.body;
		moon_dark.style.display = "block";
		star_white.style.display = "none";
		body.style.background = "white";
	};
	return (
		<div>
			<section className="nav_sidebar">
				<nav className="side_bar_wall_grid">
					<div className="logo_and_faBar_and_headerLinks">
						<div className="logo">
							<img
								src="./images/logo.png"
								alt="LOGO"
								className="logoImage newlog"
							/>
						</div>

						<div className="nav_menu">
							<ul className="nav_menu_flex">
								<li>
									<FaHome className="icons" />
									<Link to={"/"} reloadDocument className="li_link_navbar">
										Home
									</Link>
								</li>
								<li>
									<FaUserAlt className="icons" />
									<Link
										to={"/AboutMe"}
										reloadDocument
										className="li_link_navbar"
									>
										About
									</Link>
								</li>

								<li>
									<FaUserAlt className="icons" />
									<Link
										to={"/skills"}
										reloadDocument
										className="li_link_navbar"
									>
										Skills
									</Link>
								</li>
								<li>
									<FaLaptop className="icons" />
									<Link
										to={"/ServicePage"}
										reloadDocument
										className="li_link_navbar"
									>
										Service
									</Link>
								</li>
								<li>
									<FaGraduationCap className="icons" />
									<Link
										to={"/ExperiencePage"}
										reloadDocument
										className="li_link_navbar"
									>
										Experience
									</Link>
								</li>
								<li>
									<FaLayerGroup className="icons" />
									<Link
										to={"/WorkPage"}
										reloadDocument
										className="li_link_navbar"
									>
										Work
									</Link>
								</li>
								<li>
									<FaSmile className="icons" />
									<Link
										to={"/TestimonialPage"}
										reloadDocument
										className="li_link_navbar"
									>
										Testimonial
									</Link>
								</li>
								<li>
									<FaAddressBook className="icons" />
									<Link
										to={"/ContactPage"}
										reloadDocument
										className="li_link_navbar"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div className="dark_light_background_icon">
							<IoMoonOutline
								className="nav_background_changer moon_dark"
								onClick={Moon}
							/>
							<MdOutlineWbSunny
								className="nav_background_changer star_white"
								onClick={star}
							/>
						</div>

						<div className="icon_buttons_link_responsive_mobile_i">
							<button
								className=" icons_functions_header option_bar"
								onClick={showNavbar}
							>
								<FaBars />
							</button>

							<button
								className=" icons_functions_header close_bar"
								onClick={hideNavbar}
							>
								<FaXmark />
							</button>
						</div>
					</div>
				</nav>
			</section>
		</div>
	);
}
