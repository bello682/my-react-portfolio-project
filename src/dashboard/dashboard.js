import { useState } from "react";
// import ContactPage from "../Contacts/contacts";
import {
	FaSignInAlt,
	FaUserAlt,
	FaEnvelope,
	FaMailBulk,
	FaLayerGroup,
} from "react-icons/fa";

export default function DashBoardPage() {
	const [color, setColor] = useState("black");
	// const [newElement, setNewElement] = useEffect("");

	/*function for changing of color start */
	function changeBackground() {
		colorBackground();
	}

	function colorBackground() {
		setColor("white");
		console.log(color);
	}
	/*function for changing of color End */

	return (
		<div className="dashboard_main_body">
			<div
				className="dash_side_bar"
				onChange={colorBackground}
				style={{ backgroundColor: color }}
			>
				<div className="dash_sidebar_wall">
					<div className="dash_side_logo">
						<img src="" alt="" className="logo_image_dash_side" />
					</div>

					<div className="dash_userimg">
						<FaUserAlt className="icon_dash_side" />
					</div>
					<div className="client_btn_side_dash">
						<h3 className="client_name_dash">John Deo</h3>
						<button className="btn_dash" onClick={changeBackground}>
							PRO
						</button>
					</div>
				</div>
			</div>
			<div className="dashboard_page">
				<div className="dashboard_wrapper">
					<div className="dash_head">
						<h1 className="dash_title">
							<span>John</span>'s Dashboard
						</h1>
						<div className="dash_logout">
							<button>
								Logout <FaSignInAlt />
							</button>
						</div>
					</div>
					<hr />
					<div className="dash_card">
						<div className="dash_single_card">
							<FaUserAlt className="icon_dash" />
							<h3>John Deo</h3>
						</div>
						<div className="dash_single_card">
							<FaMailBulk className="icon_dash" />
							<h3>Johndoe234@gmail.com </h3>
						</div>
						<div className="dash_single_card">
							<FaLayerGroup className="icon_dash" />
							<p>React.js ,Javascript </p>
						</div>
					</div>
					<div>
						<div className="dash_single_message">
							<FaEnvelope className="icon_dash" />
							<marquee loop="-1" scrollamount="5">
								Basic Icons. View LESS View SASS ... You can place Font Awesome
								icons just about anywhere using the CSS Prefix fa and the icon's
								name. Font Awesome is designed to
							</marquee>
						</div>
					</div>
					<div className="flashing-light congratulation_text">
						<p>Thank You!!!</p>
					</div>
				</div>
			</div>
		</div>
	);
}
