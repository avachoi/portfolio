// import "../App.css";

import me from "../img/ava.png";
import resume from "../resume.pdf";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import emailjs from "emailjs-com";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import resumeIcon from "../img/resume.png";

import Projects from "./Projects";

function App({ mailto, label }) {
	const [sent, setSent] = useState("");

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
		setSent("sent");
		e.target.reset();
	};
	return (
		<div>
			<header>
				<div className="logo">
					<a href="#home"></a>
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
					NYC.
				</div>

				<button className="contact1">
					<a href="#contact" style={{ color: "#ff989c" }}>
						get in touch
					</a>
				</button>
			</div>

			<Projects />

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
						{/* As a full stack software engineer, with an excitement for challenges
						and thinking through how to anticipate the future, I continue to
						strive to learn all things software and tech related to solve
						problems with creative people and innovation. Here are a few
						technologies I’ve been working with recently: */}
						I am a software developer who loves to learn and has a strong
						passion for coding, problem solving and helping create bigger and
						better things. I take the empathy, ability to listen to others and
						willingness to always learn with me as I transition from the
						healthcare into the tech industry. Coding gives me new languages and
						tools to positively impact those around me and I am excited to
						continue building meaningful solutions to complex problems. I
						believe in working hard at achieving your goals and I aspire to
						never stop learning, growing and being better tomorrow than I am
						today.
						<div className="techList">
							<ul>
								<li>Javascript</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>React</li>
								<li>Redux</li>
							</ul>
							<ul>
								<li>Node.js</li>
								<li>Express</li>
								<li>PostgreSQL</li>
								<li>Sequelize</li>
							</ul>
						</div>
						<a
							href="https://www.linkedin.com/in/ava-jeongyeonchoi/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedin} className="icon" />
						</a>
						<a
							href="https://github.com/avachoi"
							target="_blank"
							rel="noreferrer"
						>
							<img src={github} className="icon" />
						</a>
						<a href={resume} target="_blank" rel="noreferrer">
							<img src={resumeIcon} className="icon" />
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
				<div style={{ color: "#ff989c" }}>avachoi12@gmail.com</div>

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
								className="btn-info"
								value="Send Message"
								style={{
									backgroundColor: "#414141",
									border: "1px solid #ff989c",
									color: "#ff989c",
									borderRadius: "3px",
									padding: "3px",
								}}
								// onClick={() => setSent("sent")}
							></input>
						</div>
					</div>
				</form>
				<div className="sent">
					{sent === "sent" ? <div>Message sent!</div> : <div></div>}
				</div>
			</div>
			<footer>Designed &amp; coded by Ava Choi </footer>
		</div>
	);
}

export default App;
