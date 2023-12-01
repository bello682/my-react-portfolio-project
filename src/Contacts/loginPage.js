import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			navigate("/loginPage");
		}
	}, [navigate]);

	const Login = async (e) => {
		e.preventDefault();
		//I Assuming email and password are defined somewhere in your code
		let loginItem = { email, password };

		// Constructing the URL with query parameters
		let url = `http://localhost:3000/users?email=${loginItem.email}&password=${loginItem.password}`;
		try {
			let loginResult = await fetch(url, {
				method: "GET",
				headers: {
					"Content-type": "application/json",
					Accept: "application/json",
				},
				// body: JSON.stringify(loginItem),
			});

			if (!loginResult.ok) {
				throw new Error("Sorry user does not exist");
			}
			loginResult = await loginResult.json();

			localStorage.setItem("user-info", JSON.stringify(loginResult));
			navigate("/verificationPage");
		} catch (error) {
			console.error("Error:", error);
			// Handle error, show a message, or redirect as needed
		}
	};

	return (
		<>
			<div className="Body_wrapper">
				<div className="login_body_wrap">
					<label>
						Email:{" "}
						<input
							type="email"
							value={email}
							id="input_email"
							placeholder="Enter email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</label>
					<br />
					<label>
						Password:{" "}
						<input
							type="password"
							value={password}
							id="input_password"
							placeholder="Enter password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</label>

					<label id="span">
						Remenber Password
						<input type="checkbox" id="" />
					</label>

					<div className="login_links">
						<Link className="Link_forget" to="#">
							<p>Forgot password?</p>
						</Link>
						<Link className="Link_sign" to="/ContactPage" target="_blank">
							<span>No account? SignUp</span>
						</Link>
					</div>

					<button className="btn_login" onClick={Login}>
						Login
					</button>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
