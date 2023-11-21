import { useState } from "react";
import React from "react";
import { FaSmile } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import DashBoardPage from "../dashboard/dashboard";

export default function ContactPage() {
	const [input1Value, setInput1Value] = useState("");
	const [input2Value, setInput2Value] = useState("");
	const [input3Value, setInput3Value] = useState("");
	const [input4Value, setInput4Value] = useState("");
	const [textContent, setTextContent] = useState("");
	// const NavigateDash = useNavigate();

	function updateTextContent() {
		const showElementInPage = `fullname: ${input1Value}, email: ${input2Value}, subject: ${input3Value}, message: ${input4Value}`;
		setTextContent(showElementInPage);
	}

	// console.log(textContent);

	const onChangeText = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "Fullname":
				setInput1Value(value);
				break;

			case "Email":
				setInput2Value(value);
				break;

			case "Subject":
				setInput3Value(value);
				break;

			case "Messages":
				setInput4Value(value);
				break;

			default:
				break;
		}
		// console.log(`${name} value:`, value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		updateTextContent();
	};

	// function handleNavDashBoard() {
	// 	NavigateDash("/DashBoardPage");
	// }

	return (
		<>
			<div className="main_contact_page">
				<h1 className="contact_title">Get In Touch</h1>
				<div className="contact_page_wrapper">
					<div className="contact_details">
						<div className="contact_text">
							<h2 className="text1">Let's talk about everything</h2>
							<p className="text2">
								Don't like form send me an{" "}
								<span className="cont_email">email</span>.
								<FaSmile className="contact_icon" />
							</p>
						</div>

						<form className="contact_form" onSubmit={submitForm}>
							<input
								onChange={onChangeText}
								type="text"
								placeholder="Your Name"
								className="contact_form_text"
								value={input1Value.Fullname}
								name="Fullname"
							/>
							<input
								onChange={onChangeText}
								type="text"
								placeholder="Your email"
								className="contact_form_text"
								value={input2Value.Email}
								name="Email"
							/>
							<input
								onChange={onChangeText}
								type="text"
								placeholder="Write a subject"
								className="contact_form_text"
								value={input3Value.Subject}
								name="Subject"
							/>
							<textarea
								onChange={onChangeText}
								cols={10}
								rows={6}
								placeholder="Messages"
								className="contact_form_message"
								value={input4Value.Messages}
								name="Messages"
							></textarea>
							<div>
								{/* <Link to="/DashBoardPage" target="_blank"></Link> */}
								<button className="contact_btn" onSubmit={submitForm}>
									Send Message
								</button>
								{/* onClick={handleNavDashBoard} */}
							</div>
						</form>
					</div>
				</div>
				<p className="contactDetails">{textContent}</p>
			</div>
		</>
	);
}
