import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { BsBraces } from "react-icons/bs";
import { FaServer } from "react-icons/fa";

export default function Skillspage() {
	const OpenDetails = () => {
		const fa_arrow = document.querySelector(".fa_arrow");
		const fa_arrow2 = document.querySelector(".fa_arrow2");
		const fa_arrow3 = document.querySelector(".fa_arrow3");

		const Skills_levels_details = document.querySelector(
			".Skills_levels_details"
		);
		const Skills_levels_details2 = document.querySelector(
			".Skills_levels_details2"
		);
		const Skills_levels_details3 = document.querySelector(
			".Skills_levels_details3"
		);

		if (!fa_arrow.classList.contains("rotate")) {
			// If not rotated, rotate 180 degrees
			fa_arrow.classList.add("rotate");
			Skills_levels_details.style.display = "block";
		} else {
			// If rotated, rotate back to 0 degrees
			fa_arrow.classList.remove("rotate");
			Skills_levels_details.style.display = "none";
		}

		if (fa_arrow.classList.contains("rotate")) {
			Skills_levels_details.style.display = "block";
			Skills_levels_details2.style.display = "none";
			fa_arrow2.classList.remove("rotate2");
			Skills_levels_details3.style.display = "none";
			fa_arrow3.classList.remove("rotate3");
		}
	};

	const OpenDetails2 = () => {
		const fa_arrow = document.querySelector(".fa_arrow");
		const fa_arrow2 = document.querySelector(".fa_arrow2");
		const fa_arrow3 = document.querySelector(".fa_arrow3");
		const Skills_levels_details = document.querySelector(
			".Skills_levels_details"
		);
		const Skills_levels_details2 = document.querySelector(
			".Skills_levels_details2"
		);
		const Skills_levels_details3 = document.querySelector(
			".Skills_levels_details3"
		);

		if (!fa_arrow2.classList.contains("rotate2")) {
			// If not rotated, rotate 180 degrees
			fa_arrow2.classList.add("rotate2");
			Skills_levels_details2.style.display = "block";
		} else {
			// If rotated, rotate back to 0 degrees
			fa_arrow2.classList.remove("rotate2");
			Skills_levels_details2.style.display = "none";
		}

		if (fa_arrow2.classList.contains("rotate2")) {
			fa_arrow.classList.remove("rotate");
			Skills_levels_details.style.display = "none";
			Skills_levels_details2.style.display = "block";
			Skills_levels_details3.style.display = "none";
			fa_arrow3.classList.remove("rotate3");
		}
	};

	const OpenDetails3 = () => {
		const fa_arrow = document.querySelector(".fa_arrow");
		const fa_arrow2 = document.querySelector(".fa_arrow2");
		const fa_arrow3 = document.querySelector(".fa_arrow3");
		const Skills_levels_details = document.querySelector(
			".Skills_levels_details"
		);
		const Skills_levels_details2 = document.querySelector(
			".Skills_levels_details2"
		);
		const Skills_levels_details3 = document.querySelector(
			".Skills_levels_details3"
		);

		if (!fa_arrow3.classList.contains("rotate3")) {
			// If not rotated, rotate 180 degrees
			fa_arrow3.classList.add("rotate3");
			Skills_levels_details3.style.display = "block";
		} else {
			// If rotated, rotate back to 0 degrees
			fa_arrow3.classList.remove("rotate3");
			Skills_levels_details3.style.display = "none";
		}

		if (fa_arrow3.classList.contains("rotate3")) {
			fa_arrow.classList.remove("rotate");
			Skills_levels_details.style.display = "none";
			fa_arrow2.classList.remove("rotate2");
			Skills_levels_details2.style.display = "none";
			Skills_levels_details3.style.display = "block";
		}
	};

	return (
		<div className="service_page">
			<div className="service_wrapper">
				<h1 className="head_service_title">Skills</h1>
				<p>What i Do Best</p>

				<div className="ser_grid_wrp">
					<div>
						<div className="FRNT_DEV">
							<div className="service_wraps" onClick={OpenDetails}>
								<BsBraces className="fa_curly" />
								<div className="FRD_d_cls">
									<div className="FRND_dev">
										<h2>Frontend developer</h2>
										<p>I Spend 6hrs+ Coding Everyday</p>
									</div>
									<FaAngleDown className="fa_arrow" />
								</div>
							</div>

							<div className="Skills_levels_details">
								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">HTML</p>
										<p>90%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>

								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">CSS</p>
										<p>80%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>

								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">Javascript</p>
										<p>50%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>

								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">React</p>
										<p>60%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>

								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">BootStrap</p>
										<p>70%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>

								<div className="lvls_skl">
									<div className="B_F_X">
										<p className="frame_work">WordPress</p>
										<p>70%</p>
									</div>
									<div className="outer_level">
										<div className="inner_level"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="FRNT_DEV2">
							<div className="service_wraps2" onClick={OpenDetails2}>
								<BsBraces className="fa_curly2" />
								<div className="FRD_d_cls2">
									<div className="FRND_dev2">
										<h2>Backend developer</h2>
										<p>I Spend 6hrs+ Coding Everyday</p>
									</div>
									<FaAngleDown className="fa_arrow2" />
								</div>
							</div>

							<div className="Skills_levels_details2">
								<div className="lvls_skl2">
									<div className="B_F_X2">
										<p className="frame_work2">Node Js</p>
										<p>80%</p>
									</div>
									<div className="outer_level2">
										<div className="inner_level2"></div>
									</div>
								</div>

								<div className="lvls_skl2">
									<div className="B_F_X2">
										<p className="frame_work2">Express Js</p>
										<p>50%</p>
									</div>
									<div className="outer_level2">
										<div className="inner_level2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="FRNT_DEV3">
						<div className="service_wraps3" onClick={OpenDetails3}>
							<FaServer className="fa_curly3" />
							<div className="FRD_d_cls3">
								<div className="FRND_dev3">
									<h2>Database Management</h2>
									<p>Hire Me to Maintain and update your website</p>
								</div>
								<FaAngleDown className="fa_arrow3" />
							</div>
						</div>

						<div className="Skills_levels_details3">
							<div className="lvls_skl3">
								<div className="B_F_X3">
									<p className="frame_work3">Sql</p>
									<p>50%</p>
								</div>
								<div className="outer_level3">
									<div className="inner_level3"></div>
								</div>
							</div>

							<div className="lvls_skl3">
								<div className="B_F_X3">
									<p className="frame_work3">MySql</p>
									<p>70%</p>
								</div>
								<div className="outer_level3">
									<div className="inner_level3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
