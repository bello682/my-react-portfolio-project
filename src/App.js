import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./sideBarNavBar/sideNavBar";
import HomePage from "./Home/Home";
import AboutMe from "./About/aboutme";
import ServicePage from "./Services/services";
import ExperiencePage from "./Experiences/Experience";
import TestimonialPage from "./Testimonials/testimonial";
import WorkPage from "./workProject/work";
import ContactPage from "./Contacts/contacts";
import ErrorPage from "./errorHandlepage/ErrorPage";
import CongratulationPage from "./Contacts/congratulation";
import DashBoardPage from "./dashboard/dashboard";
import "./style.css";

function App() {
	return (
		<div>
			<SideNavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Aboutme" element={<AboutMe />} />
				<Route path="/ServicePage" element={<ServicePage />} />
				<Route path="/ExperiencePage" element={<ExperiencePage />} />
				<Route path="/TestimonialPage" element={<TestimonialPage />} />
				<Route path="/WorkPage" element={<WorkPage />} />
				<Route path="/ContactPage" element={<ContactPage />} />
				<Route path="/DashBoardPage" element={<DashBoardPage />} />
				<Route path="/CongratulationPage" element={<CongratulationPage />} />
				<Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
			</Routes>
			<AboutMe />
			<ServicePage />
			<ExperiencePage />
			<TestimonialPage />
			<WorkPage />
			<ContactPage />
		</div>
	);
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
