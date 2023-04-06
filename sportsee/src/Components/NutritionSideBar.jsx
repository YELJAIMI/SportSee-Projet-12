import React from "react";
import styles from "../Styles/nutritionSideBar.module.css";
import calories from "../Assets/caloriesIcon.png";
import protein from "../Assets/proteinIcon.png";
import carbs from "../Assets/carbsIcon.png";
import fat from "../Assets/fatIcon.png";
import propTypes from "prop-types";

/**
 * Affiche les informations nutritionnelles d'un utilisateur sous forme d'icônes.
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.calorieCount - Le nombre de calories consommées.
 * @param {number} props.proteinCount - Le nombre de protéines consommées.
 * @param {number} props.carbohydrateCount - Le nombre de glucides consommés.
 * @param {number} props.lipidCount - Le nombre de lipides consommés.
 * @returns {JSX.Element} - Le composant UserNutrition.
 */
export default function UserNutrition({
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

UserNutrition.prototype = {
	calorieCount: propTypes.number,
	proteinCount: propTypes.number,
	carbohydrateCount: propTypes.number,
	lipidCount: propTypes.number,
};
