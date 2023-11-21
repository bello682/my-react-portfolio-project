import { useState, useEffect } from "react";
import DataApi from "../APIs/testimonialdatasApi";
import { FaSmile } from "react-icons/fa";

export default function TestimonialPage() {
	const [people] = useState(DataApi);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<section className="section">
			<div className=" main_testimonial_page">
				<h1 className="testimonial_title_head">Client & Reviews</h1>
				<div className="testimonial_wrapper  ">
					{people.map((item, indexPeople) => {
						const { id, UrlImg, Name, Title, Description } = item;
						let position = "nextSlide";
						if (indexPeople === index) {
							position = "activeSlide";
						}
						if (
							indexPeople === index - 1 ||
							(index === 0 && indexPeople === people.length - 1)
						) {
							position = "lastSlide";
						}

						return (
							<article className={position} key={id}>
								<div className="image_testimonial ">
									<img
										src={`./images/${UrlImg}`}
										alt="DEVELOPER PICS"
										className="IMG_TESTIMONIAL"
									/>
								</div>

								<div className="content_testimonial ">
									<h1>{Name}</h1>
									<p>{Title}</p>
								</div>

								<div className="testimonial_comment">
									<p>
										{Description} <FaSmile style={{ color: "#f0c136" }} />
									</p>
								</div>
							</article>
						);
					})}
				</div>

				{/* <div className="testimonial_wrapper  ">
				<div className="image_testimonial ">
					<img
						src="./images/content creator 2.jpg"
						alt="DEVELOPER IMAGE"
						className="IMG_TESTIMONIAL"
					/>
				</div>

				<div className="content_testimonial ">
					<h1>John Doe</h1>
					<p>Product designer at Dribble</p>
				</div>

				<div className="testimonial_comment">
					<p>
						I enjoy working with the theme and learned so much, you guys made
						the process fun and interesting, Goodluck{" "}
						<FaSmile style={{ color: "#f0c136" }} />
					</p>
				</div>
			</div> */}
			</div>
		</section>
	);
}
