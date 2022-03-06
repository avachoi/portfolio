import woa from "../img/woa.png";
import bakery from "../img/bakery.png";
import React, { useState } from "react";
import github from "../img/github.png";

const Project = () => {
	const [project, setProject] = useState(0);
	return (
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
				<div className="sectionName">projects</div>
			</div>

			{project === 0 ? (
				<div id="projectList">
					<div className="singleProject">
						<div onClick={() => setProject(project + 1)}>
							<img src={bakery} width="100%" padding="0px" />
							<div className="projectTitle">Bulbasour's Bakery</div>
							<div className="projectDescription">
								A mock e-commerce site where users can browse a selection of
								deserts, add to their cart, and checkout their selected items
							</div>
						</div>
					</div>

					<div className="singleProject">
						<div onClick={() => setProject(project + 2)}>
							<img src={woa} width="100%" padding="0px" />
							<div className="projectTitle">World of Arcana</div>
							<div className="projectDescription">
								A Massively Multiplayer Online Role Playing Game written in
								Javascript
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>
					{project === 1 ? (
						<div className="project">
							<button
								className=" viewAllProjects"
								onClick={() => setProject(0)}
							>
								View All Projects
							</button>
							<div className="titleNicon">
								<div className="projectTitle">Bulbasour's Bake Shop</div>
								<div>
									<a
										href="https://github.com/2108-bulbasaur-bunch/grace-shopper/"
										target="_blank"
										rel="noreferrer"
									>
										<img src={github} className="icon" />
									</a>
								</div>
							</div>
							<div>
								A mock e-commerce site where users can browse a selection of
								deserts, add to their cart, and checkout their selected items
							</div>
							<div>
								<a
									href="https://bulbasaur-bake-shop.herokuapp.com"
									target="_blank"
									rel="noreferrer"
								>
									<img src={bakery} className="projectImg" />
								</a>
							</div>

							<h3>Technologies</h3>
							<div>
								Node.js, HTML5, CSS, React, Redux, Express, PostgreSQL, and
								Heroku.
							</div>
							<h3>My role</h3>
							<div>
								In this project, I built a database and server routes for users,
								orders, and products and developed front-end components for user
								interface on the cart and checkout.
							</div>
						</div>
					) : (
						<div className="project">
							<button className="viewAllProjects" onClick={() => setProject(0)}>
								View All Projects
							</button>
							<div className="titleNicon">
								<div className="projectTitle">World of Arcana</div>
								<div>
									<a
										href="https://github.com/capstone-2108/world-of-arcana"
										target="_blank"
										rel="noreferrer"
									>
										<img src={github} className="icon" />
									</a>
								</div>
							</div>
							<div>
								World of Arcana, is an MMORPG in a top down style written in
								Javascript . To build this project we utilized Phaser as the
								game engine, React + Redux to power the player UI such as the
								player health and chat, Postgres to store our persistent world
								data, Express to handle logging in, and Socket.io to setup
								persistent 2-way connections between server and client. Through
								this process we discovered how to get two separate systems
								(Phaser and React) to be able to communicate using the Event
								Emitter Pattern.As our project progressed, the volume of code
								quickly ballooned due to our efforts to keep the game
								synchronized; to combat this, we utilized the State Machine
								Pattern which allowed us to reduce the complexity of how our
								players and monsters behaved, as well as the ability to
								essentially ""record"" their movements so that they could be
								transmitted to other players and played back.
							</div>
							<div>
								<a
									href="https://world-of-arcana.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={woa} className="projectImg" />
								</a>
							</div>

							<h3>Technologies</h3>
							<div>
								NodeJS, Javascript, PostgreSQL, Sequelize, Express, React, JWT,
								Redux, and Material UI, Socket.io, Phaser, Tiled, Texture
								Packer, Photoshop
							</div>
							<h3>My role</h3>
							<div>
								In this project, I Built a database and server for users,
								characters, and maps and developed front-end components for user
								experience on the dashboard
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Project;
