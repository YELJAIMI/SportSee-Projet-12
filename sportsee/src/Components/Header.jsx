import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/header.module.css";
import logo from "../Assets/logo.png";

function Header() {
	return (
		<header>
			<nav>
				<h1>
					<img src={logo} alt="logo SportSee" />
				</h1>
				<ul>
					<li>
						<NavLink
						exact
							to="/"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Accueil
						</NavLink>
					</li>

					<li> 
						<NavLink   
						to="/profil"
              			className={({ isActive }) => (isActive ? styles.active : "")}> 
						Profil
						</NavLink>
					</li>

					<li>
						<NavLink 
						to="/réglage"
						className={({ isActive }) => (isActive ? styles.active : "")}> 
						Réglage
						</NavLink>
					</li>

					<li>
						<NavLink 
						to="/communauté"
						className={({ isActive }) => (isActive ? styles.active : "")}>
						Communauté
						</NavLink>
					</li>
					
				</ul>
			</nav>
		</header>
	);
}

export default Header;
