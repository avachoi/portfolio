import logo from "./logo.svg";
import "./App.css";
import bulbasour from "./bulbasour.png";
import woa from "./woa.png";
import me from "./ava.png";
import resume from "./resume.pdf";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

function App({ mailto, label }) {
	// const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_mxo8psx",
				"template_0p94xu5",
				e.target,
				"user_uetvboFBPy3a7vK6qqH9l"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<div>
			<header>
				<div className="logo">
					<a href="#home">Ava</a>
				</div>

				<nav>
					<div className="nav-item">
						<a href="#projects" style={{ color: "white" }}>
							project
						</a>
					</div>
					<div className="nav-item">
						<a href="#aboutMe" style={{ color: "white" }}>
							about me
						</a>
					</div>
					<div className="nav-item">
						<a href="#contact" style={{ color: "white" }}>
							contact
						</a>
					</div>
					<div className="nav-item">
						<a
							href={resume}
							target="_blank"
							rel="noreferrer"
							style={{ color: "#ff989c" }}
						>
							resume
						</a>
					</div>
				</nav>
			</header>

			<div id="home">
				<div className="greeting">
					Hi, My name is Ava Choi. <br />I am a front end developer living in
					NYC
				</div>

				<button className="contact1">
					<a href="#contact" style={{ color: "#ff989c" }}>
						get in touch
					</a>
				</button>
			</div>

			<div id="projects">
				<div className="sectionHead">
					<hr
						style={{
							// color: "black",
							backgroundColor: "#ff989c",
							height: 1,
							width: "100px",
							margin: "10px",
							borderColor: "#ff989c",
							paddingLeft: "100px",
						}}
					/>
					<div className="sectionName">project</div>
				</div>

				<div id="projectList">
					<div className="singleProject">
						<div>
							<a
								href="https://bulbasaur-bake-shop.herokuapp.com"
								target="_blank"
								rel="noreferrer"
							>
								<img src={bulbasour} width="400px" hight="200px" />
							</a>

							<div className="projectTitle">Bulbasour's Bakery</div>
							<div className="projectDiscription">
								A mock e-commerce site where users can browse a selection of
								deserts, add to their cart, and checkout their selected items
							</div>
							<a
								href="https://github.com/2108-bulbasaur-bunch/grace-shopper/"
								target="_blank"
								rel="noreferrer"
							>
								github
							</a>
						</div>
					</div>

					<div className="singleProject">
						<div>
							<a
								href="https://world-of-arcana.herokuapp.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={woa} width="400px" hight="200px" />
							</a>

							<div className="projectTitle">World of Arcana</div>
							<div className="projectDiscription">
								A Massively Multiplayer Online Role Playing Game written in
								Javascript
							</div>
							<a
								href="https://github.com/capstone-2108/world-of-arcana"
								target="_blank"
								rel="noreferrer"
							>
								github
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="aboutMe">
				<div className="sectionHead">
					<hr
						style={{
							// color: "black",
							backgroundColor: "#ff989c",
							height: 1,
							width: "100px",
							margin: "10px",
							borderColor: "#ff989c",
							paddingLeft: "100px",
						}}
					/>
					<div className="sectionName">about me</div>
				</div>
				<div id="aboutMeContents">
					<img src={me} id="me" width="400px" />
					<div className="description">
						As a full stack software engineer, with an excitement for challenges
						and thinking through how to anticipate the future, I continue to
						strive to learn all things software and tech related to solve
						problems with creative people and innovation. Here are a few
						technologies I’ve been working with recently:
						<ul>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>React</li>
							<li>Redux</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>PostgreSQL</li>
							<li>Sequelize</li>
						</ul>
						<a
							href="https://www.linkedin.com/in/ava-jeongyeonchoi/"
							target="_blank"
							rel="noreferrer"
						>
							linkedin
						</a>
						<a
							href="https://github.com/avachoi"
							target="_blank"
							rel="noreferrer"
						>
							github
						</a>
						<a href={resume} target="_blank" rel="noreferrer">
							resume
						</a>
					</div>
				</div>
			</div>

			<div id="contact">
				<div className="sectionHead">
					<hr
						style={{
							// color: "black",
							backgroundColor: "#ff989c",
							height: 1,
							width: "100px",
							margin: "10px",
							borderColor: "#ff989c",
							paddingLeft: "100px",
						}}
					/>
					<div className="sectionName">contact</div>
				</div>
				<div className="contactText">
					if you'd like to work with me or would like more information then
					email me to get in touch.
				</div>
				<div style={{ color: "#ff989c" }}>alexbchoi@gmail.com</div>

				{/* <form onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="from_name"/>
					<label>Email</label>
					<input type="email" name="email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form> */}
				<form onSubmit={sendEmail}>
					<div className="row pt-5 mx-auto">
						<div className="col-8 form-group mx-auto">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								name="from_name"
								style={{ width: "253px" }}
							/>
						</div>
						<div className="col-8 form-group pt-2 mx-auto">
							<input
								type="email"
								className="form-control"
								placeholder="Email Address"
								name="email"
								style={{ width: "253px", margin: "12px" }}
							/>
						</div>

						<div className="col-8 form-group pt-2 mx-auto">
							<textarea
								className="form-control"
								id=""
								cols="30"
								rows="8"
								placeholder="Your message"
								name="message"
							></textarea>
						</div>
						<div className="col-8 pt-3 mx-auto">
							<input
								type="submit"
								className="btn btn-info"
								value="Send Message"
								style={{
									backgroundColor: "#414141",
									border: "1px solid #ff989c",
									color: "#ff989c",
									borderRadius: "3px",
									padding: "3px",
								}}
							></input>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
