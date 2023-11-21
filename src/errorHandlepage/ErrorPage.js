import { Link } from "react-router-dom";
export default function ErrorPage() {
	return (
		<div className="error_page">
			<h1>Oops!! 404</h1>
			<p>Sorry, an unexpected error has occured.</p>
			<p> Page Not Found</p>
			<Link to="/">Back to HomePage </Link>
		</div>
	);
}
