import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./sideBarNavBar/sideNavBar";
import HomePage from "./Home/Home";
import AboutMe from "./About/Aboutme";
import Skillspage from "./Skills/skills";
import ExperiencePage from "./Qualification/Experience";
import ServicePage from "./Services/service";
import WorkPage from "./workProject/work";
// import peoples from "./workProject/apiWork";
import Patronage from "./Advertisement/patronage";
import TestimonialPage from "./Testimonials/testimonial";
import ContactPage from "./Contacts/contacts";
import ErrorPage from "./errorHandlepage/ErrorPage";
// import ProjectPage from "./Contacts/projectPage";
// import DashBoardPage from "./dashboard/dashboard";
// import LoginPage from "./Contacts/loginPage";
// import VerificationPage from "./Contacts/verificationPage";
import Footer from "./Footer/footer";
import "./style.css";

function App() {
	// const workProps = peoples.map((item) => {
	// 	return (
	// 		<WorkPage
	// 			key={item.id}
	// 			rlImg={item.UrlImg}
	// 			itle={item.Title}
	// 			escription={item.Description}
	// 		/>
	// 	);
	// });
	return (
		<div>
			<SideNavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Aboutme" element={<AboutMe />} />
				<Route path="/skills" element={<Skillspage />} />
				<Route path="/ExperiencePage" element={<ExperiencePage />} />
				<Route path="/ServicePage" element={<ServicePage />} />
				<Route path="/WorkPage" element={<WorkPage />} />
				<Route path="/Patronage" element={<Patronage />} />
				<Route path="/TestimonialPage" element={<TestimonialPage />} />
				<Route path="/ContactPage" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
				{/*<Route path="/DashBoardPage" element={<DashBoardPage />} />
				<Route path="/projectPage" element={<ProjectPage />} />
				<Route path="/loginPage" element={<LoginPage />} />
				<Route path="/verificationPage" element={<VerificationPage />} />*/}
			</Routes>
			<AboutMe />
			<Skillspage />
			<ExperiencePage />
			<ServicePage />
			<WorkPage />
			{/* {workProps} */}
			<Patronage />
			<TestimonialPage />
			<ContactPage />
			<Footer />
		</div>
	);
}

export default App;
