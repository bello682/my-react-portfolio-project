import React from "react";
// import { FaServer } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { BsWindowSidebar } from "react-icons/bs";
// import { FaX } from "react-icons/fa6";

function ServicePage() {
	const openPopUp1 = () => {
		const popUp_info_display1 = document.querySelector("#popUp_info_display1");
		const popUpOverLay = document.querySelector(".popUp-overLay");
		popUp_info_display1.style.display = "flex";
		popUpOverLay.style.display = "flex";
	};

	const closePopUp1 = () => {
		const popUp_info_display1 = document.querySelector("#popUp_info_display1");
		const popUpOverLay = document.querySelector(".popUp-overLay");
		popUp_info_display1.style.display = "none";
		popUpOverLay.style.display = "none";
	};

	const penPopUp2 = () => {
		const s_popUp_info_display2 = document.querySelector(
			"#popUp_info_display2"
		);
		const opUpOverLay = document.querySelector(".popUp-overLay");
		s_popUp_info_display2.style.display = "flex";
		opUpOverLay.style.display = "flex";
	};

	const closePopUp2 = () => {
		const s_popUp_info_display2 = document.querySelector(
			"#popUp_info_display2"
		);
		const opUpOverLay = document.querySelector(".popUp-overLay");
		s_popUp_info_display2.style.display = "none";
		opUpOverLay.style.display = "none";
	};

	const enPopUp3 = () => {
		const t_popUp_info_display3 = document.querySelector(
			"#popUp_info_display3"
		);
		const pUpOverLay = document.querySelector(".popUp-overLay");
		t_popUp_info_display3.style.display = "flex";
		pUpOverLay.style.display = "flex";
	};

	const closePopUp3 = () => {
		const t_popUp_info_display3 = document.querySelector(
			"#popUp_info_display3"
		);
		const pUpOverLay = document.querySelector(".popUp-overLay");
		t_popUp_info_display3.style.display = "none";
		pUpOverLay.style.display = "none";
	};

	const nPopUp4 = () => {
		const f_popUp_info_display4 = document.querySelector(
			"#popUp_info_display4"
		);
		const UpOverLay = document.querySelector(".popUp-overLay");
		f_popUp_info_display4.style.display = "flex";
		UpOverLay.style.display = "flex";
	};

	const closePopUp4 = () => {
		const f_popUp_info_display4 = document.querySelector(
			"#popUp_info_display4"
		);
		const UpOverLay = document.querySelector(".popUp-overLay");
		f_popUp_info_display4.style.display = "none";
		UpOverLay.style.display = "none";
	};
	return (
		<section>
			<div className="servicepage_main">
				<div className="popUp-overLay"></div>
				<div className="service_wra">
					<div className="inner_body_fx">
						<h1 className="my_service_h1">My Services</h1>
						<h4 className="what_iOffer_h4">What i offer</h4>

						<div className="service_wrap">
							<div className="service_secondary_wrap">
								<div className="service_details">
									<BsWindowSidebar className="i_c_frt" />
									<h1>
										Frontend <br />
										Developer
									</h1>
									<button className="ser_btn_view_more" onClick={openPopUp1}>
										View More <FaArrowRight className="ser_btn_view_Go" />
									</button>
								</div>
							</div>

							<div className="service_secondary_wrap">
								<div className="service_details">
									<BsWindowSidebar className="i_c_frt" />
									<h1>
										Backend <br /> Developer
									</h1>
									<button className="ser_btn_view_more" onClick={penPopUp2}>
										View More <FaArrowRight className="ser_btn_view_Go" />
									</button>
								</div>
							</div>

							<div className="service_secondary_wrap">
								<div className="service_details">
									<BsWindowSidebar className="i_c_frt" />
									<h1>
										WordPress <br /> Developer
									</h1>
									<button className="ser_btn_view_more" onClick={enPopUp3}>
										View More <FaArrowRight className="ser_btn_view_Go" />
									</button>
								</div>
							</div>

							<div className="service_secondary_wrap">
								<div className="service_details">
									<BsWindowSidebar className="i_c_frt" />
									<h1>
										DataBase <br /> Manager
									</h1>
									<button className="ser_btn_view_more" onClick={nPopUp4}>
										View More <FaArrowRight className="ser_btn_view_Go" />
									</button>
								</div>
							</div>
						</div>
						<div className="popUp_info" id="popUp_info_display1">
							<div>
								<h2 className="popUp_header">
									{" "}
									Frontend <br /> Developer
								</h2>
								<ul className="popUp_UL">
									<li>
										<FaAnglesRight className="FSV" /> I Build Any Kinds Of Web
										Pages be it
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Company Websites
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Ecommerce Store
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Digital Agency
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Banks, Forex, Crypto, NFTS, & DeFi
									</li>
									<li>
										<FaAnglesRight />
										NGO Website, Business or Portfolio
									</li>
									<li>
										<FaAnglesRight /> Etc.
									</li>
								</ul>
							</div>
							<div>
								<FaXmark
									className="vfs"
									id="popUp_info_display1_close"
									onClick={closePopUp1}
								/>
							</div>
						</div>

						<div className="popUp_info" id="popUp_info_display2">
							<div>
								<h2 className="popUp_header">
									{" "}
									WordPress <br /> Developer
								</h2>
								<ul className="popUp_UL">
									<li>
										<FaAnglesRight className="FSV" />
										If you are looking for a profissional WordPress Developer
										you at the right place
									</li>
									<li>
										<FaAnglesRight className="FSV" />I have done lot of
										WordPress work and gain so much experience from both{" "}
									</li>
									<li>
										<FaAnglesRight className="FSV" />I can customize any
										WordPress Theme and Plugins to suit clients need
									</li>
									<li>
										<FaAnglesRight className="FSV" />I can convert your static
										website to WordPress for better use and editing
									</li>
								</ul>
							</div>
							<div>
								<FaXmark
									className="vfs"
									id="popUp_info_display2_close"
									onClick={closePopUp2}
								/>
							</div>
						</div>

						<div className="popUp_info" id="popUp_info_display3">
							<div>
								<h2 className="popUp_header">
									{" "}
									Digital <br /> Marketing
								</h2>
								<ul className="popUp_UL">
									<li>
										<FaAnglesRight className="FSV" />
										You don't have to Google the best digital agency anymore
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Let me give your brand or business that global audience
										today
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										My service are the best you would ever seek and find
										elsewhere
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Digital Agency
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Am very affordable and friendly to work with, always
										available 24/7
									</li>
								</ul>
							</div>
							<div>
								<FaXmark
									className="vfs"
									id="popUp_info_display3_close"
									onClick={closePopUp3}
								/>
							</div>
						</div>

						<div className="popUp_info" id="popUp_info_display4">
							<div>
								<h2 className="popUp_header">
									{" "}
									Database <br /> Management
								</h2>
								<ul className="popUp_UL">
									<li>
										<FaAnglesRight className="FSV" />
										Server Management
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Hosting & Domains
									</li>
									<li>
										<FaAnglesRight className="FSV" />
										Email Accounts & Marketing
									</li>
								</ul>
							</div>
							<div>
								<FaXmark
									className="vfs"
									id="popUp_info_display4_close"
									onClick={closePopUp4}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicePage;
