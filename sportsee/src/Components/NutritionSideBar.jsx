import React from "react";
import styles from "../Styles/nutritionSideBar.module.css";
import calories from "../Assets/caloriesIcon.png";
import protein from "../Assets/proteinIcon.png";
import carbs from "../Assets/carbsIcon.png";
import fat from "../Assets/fatIcon.png";
import propTypes from "prop-types";

export default function userNutrition({
	calorieCount,
	proteinCount,
	carbohydrateCount,
	lipidCount,
}) {
	const data = [
		{ title: "Calories", icon: calories, value: calorieCount, unit: "kCal" },
		{ title: "Protéines", icon: protein, value: proteinCount, unit: "g" },
		{ title: "Glucides", icon: carbs, value: carbohydrateCount, unit: "g" },
		{ title: "Lipides", icon: fat, value: lipidCount, unit: "g" },
	];

	return (
		<>
			{data &&
				data.map((e, i) => (
					<div className={styles.nutritionalElt} key={e.title}>
						<img src={e.icon} alt="icon"></img>
						<div className={styles.nutritionalText}>
							<p>
								{e.value}
								{e.unit}
							</p>
							<p>{e.title}</p>
						</div>
					</div>
				))}
		</>
	);
}

userNutrition.prototype = {
	calorieCount: propTypes.number,
	proteinCount: propTypes.number,
	carbohydrateCount: propTypes.number,
	lipidCount: propTypes.number,
};
