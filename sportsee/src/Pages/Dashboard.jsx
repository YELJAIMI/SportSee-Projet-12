import React, { useState, useEffect } from "react";
import styles from "../Styles/dashboard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Activity from "../Components/Activity";
import Performance from "../Components/Performance";
import Average from "../Components/Average";
import Score from "../Components/Score";
import NutritionSideBar from "../Components/NutritionSideBar";
import Model from "../model";



/**
 * Composant Dashboard qui affiche les données utilisateur
 * @param {Object} props - Les propriétés du composant
 * @returns {JSX.Element} Composant Dashboard
*/

// eslint-disable-next-line no-empty-pattern
export default function Dashboard({}) {
	let { id } = useParams();
	let navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [userName, setUserName] = useState({});
	const [userScore, setUserScore] = useState({});
	const [userNutrition, setUserNutrition] = useState({});
	const [userActivity, setUserActivity] = useState({});
	const [userAverageSession, setUserAverageSession] = useState({});
	const [userPerformance, setUserPerformance] = useState({ data: [] });

	useEffect(() => {

		/**
		* Récupère les données de l'utilisateur
		* @async
		* @function getUserData
		*/

		const getUserData = async () => {
			setIsLoading(true);
			try {
				const userNamePromise = Model.getUserNameModel(id);

				const userScorePromise = Model.getUserScoreModel(id);

				const userNutritionalPromise = Model.getUserNutritionModel(id);

				const userActivityPromise = Model.getUserActivityModel(id);

				const userAverageSessionPromise = Model.getUserAverageSessionModel(id);

				const userPerformancePromise = Model.getUserPerformanceModel(id);
				const [
					userNameData,
					userScoreData,
					userNutritionalData,
					userActivityData,
					userAverageSessionData,
					userPerformanceData,
				] = await Promise.all([
					userNamePromise,
					userScorePromise,
					userNutritionalPromise,
					userActivityPromise,
					userAverageSessionPromise,
					userPerformancePromise,
				]);
				setUserName(userNameData);
				setUserScore(userScoreData);
				setUserNutrition(userNutritionalData);
				setUserActivity(userActivityData);
				setUserAverageSession(userAverageSessionData);
				setUserPerformance(userPerformanceData);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				navigate("/404");
				setIsLoading(false);
			}
		};

		getUserData();
	}, [id, navigate]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1 className={styles.title}>
				Bonjour
				<span> {userName.firstName}</span>
			</h1>
			<p className={styles.para}>
				Félicitation ! Vous avez explosé vos objectifs hier &#128079;
			</p>
			<div className={styles.container}>
				<div className={styles.charts}>
					<Activity data={userActivity.sessions} />
					<div>
						<Average data={userAverageSession.sessions} />
						<Performance data={userPerformance.data} />
						<Score data={userScore.score} />
					</div>
				</div>
				<div className={styles.nutritioanlSideBar}>
					<NutritionSideBar
						calorieCount={userNutrition.calorieCount}
						proteinCount={userNutrition.proteinCount}
						lipidCount={userNutrition.lipidCount}
						carbohydrateCount={userNutrition.carbohydrateCount}
					/>
				</div>
			</div>
		</>
	);
}
