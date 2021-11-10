import logo from "./logo.svg";
import "./App.css";
import bulbasour from "./bulbasour.png";
import woa from "./woa.png";
import me from "./me.JPG";
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
					<div class="nav-item">
						<a href="#projects">project</a>
					</div>
					<div class="nav-item">
						<a href="#aboutMe">about me</a>
					</div>
					<div class="nav-item">
						<a href="#contact">contact</a>
					</div>
					<div class="nav-item">
						<a href={resume} target="_blank" rel="noreferrer">
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
					<a href="#contact">get in touch</a>
				</button>
			</div>

			<div id="projects">
				<div className="section">project</div>
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
						World of Arcana is a web-based top-down fantasy-themed MMORPG. Join
						your friends in an epic multiplayer quest to rid the land of the
						invading horde of monsters
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

			<div id="aboutMe">
				<div className="section">About me</div>
				<img src={me} width="400px" hight="200px" />
				<div className="description">
					As a full stack software engineer, with an excitement for challenges
					and thinking through how to anticipate the future, I continue to
					strive to learn all things software and tech related to solve problems
					with creative people and innovation. Here are a few technologies I’ve
					been working with recently:
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
				</div>
				<a
					href="https://www.linkedin.com/in/ava-jeongyeonchoi/"
					target="_blank"
					rel="noreferrer"
				>
					linkedin
				</a>
				<a href="https://github.com/avachoi" target="_blank" rel="noreferrer">
					github
				</a>
				<a href={resume} target="_blank" rel="noreferrer">
					resume
				</a>
			</div>

			<div id="contact">
				<div className="section">Contact</div>
				<div>
					if you'd like to work with me or would like more information then
					email me to get in touch.
				</div>
				<div>alexbchoi@gmail.com</div>
				<button>Email me</button>

				<form onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="from_name" />
					<label>Email</label>
					<input type="email" name="email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
}

export default App;
