import React from "react";
import { FaSmile } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { MdOutlineMail } from "react-icons/md";

import { IoCallOutline } from "react-icons/io5";

export default function ContactPage() {
	return (
		<>
			<div className="main_contact_page">
				<div className="contact_page_wrapper">
					<h1 className="contact_title">Contact Me</h1>
					<p className="text1">Let's talk about everything</p>
					<div className="contact_details">
						<div className="contact_text">
							<div className="single_contact_details">
								<div className="C_E_A">
									<IoCallOutline className="icon_C_E_A" />
								</div>
								<div className="contact_info_E_C_A">
									<h1>Call Me</h1>
									<ul>
										<li>
											<a href="">+234 813 968 0568</a>
										</li>
										<li>
											<a href="">+234 808 394 8842</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="single_contact_details">
								<div className="C_E_A">
									<MdOutlineMail className="icon_C_E_A" />
								</div>
								<div className="contact_info_E_C_A">
									<h1>Email</h1>
									<ul>
										<li>
											<a href="">belloadetayo@gmail.com</a>
										</li>
										<li>
											<a href="">belloadetayo14@gmail.com</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="single_contact_details">
								<div className="C_E_A">
									<IoLocationOutline className="icon_C_E_A" />
								</div>
								<div className="contact_info_E_C_A">
									<h1>Address</h1>
									<ul>
										<li>
											<a href="">
												60, Bako Weighbridge Owode, Ikorodu Road, Lagos
											</a>
										</li>
										<li>
											<a href="">Lagos State, Nigeria</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div></div>
					</div>
				</div>
			</div>
		</>
	);
}
