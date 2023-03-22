import React from "react";
import styles from "../Styles/sideNavBar.module.css";
import iconByke from "../Assets/iconByke.png";
import iconGym from "../Assets/iconGym.png";
import iconSwim from "../Assets/iconSwim.png";
import iconYoga from "../Assets/iconYoga.png";

function SideNavBar() {
	return (
		<div className={styles.side_nav_bar}>
			<nav>
				<ul>
					<li>
						<img src={iconYoga} alt=""/>
					</li>
					<li>
						<img src={iconSwim} alt=""/>
					</li>
					<li>
						<img src={iconByke} alt=""/>
					</li>
					<li>
						<img src={iconGym} alt=""/>
					</li>
				</ul>
			</nav>
			<p className={styles.copyright}>Copyright, SportSee 2023</p>
		</div>
	);
}

export default SideNavBar;
