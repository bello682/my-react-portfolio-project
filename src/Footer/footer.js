import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="main_footer">
			<div className="footer_wrapper">
				<div className="footer_wrap">
					<div className="logo_paragragh">
						<div className="logo">
							<img
								src="./images/logo.png"
								alt="LOGO"
								className="logoImage newlog"
							/>
						</div>
						<a href="">
							<p>
								Frontend Web Developer You don't need to look for the best web
								developer anymore again. Am here to give you that global
								recognition.
							</p>
						</a>
					</div>

					<div className="footer_link_data">
						<ul>
							<li>
								<a href="">Service</a>
							</li>
							<li>
								<a href="">Portfolio</a>
							</li>
							<li>
								<a href="">Contact Me</a>
							</li>
						</ul>
					</div>

					<div className="footer_data_socails">
						<ul>
							<li>
								<a href="">
									<FaFacebookF className="social_home_icon" />
								</a>
							</li>
							<li>
								<a href="">
									<RiInstagramFill className="social_home_icon" />
								</a>
							</li>
							<li>
								<a href="">
									<FaSquareXTwitter className="social_home_icon" />
								</a>
							</li>
							<li>
								<a href="">
									<FaLinkedin className="social_home_icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<p className="copyright">© TY,s Code Tech. All right reserved</p>
			</div>
		</div>
	);
}
