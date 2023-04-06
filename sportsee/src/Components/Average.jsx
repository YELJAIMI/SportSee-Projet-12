import styled from "styled-components";
import propTypes from "prop-types";

import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";


/**
 * Composant pour afficher le graphique de durée moyenne des sessions.
 * @param {Object[]} data - Tableau d'objets contenant les données du graphique.
 * @param {number} data[].day - Jour de la semaine.
 * @param {number} data[].sessionLength - Durée moyenne des sessions en minutes.
 * @returns {JSX.Element} - Element JSX représentant le graphique de durée moyenne des sessions.
 */
export default function AverageChart({ data }) {
	return (
		<>
			<LineChart width={258} height={303} data={data}>
				<rect
					width="258"
					height="263"
					fill="#FF0000"
					x="0"
					y="5"
					rx="5px"
					stroke="none"
				></rect>

				<text
					y={20}
					fill="white"
					opacity={0.7}
					textAnchor="middle"
					dominantBaseline="central"
				>
					<tspan x="90" dy="15" fontSize="15px" fontWeight="500">
						Durée moyenne des
					</tspan>
					<tspan x="54" dy="22" fontSize="15px" fontWeight="500">
						sessions
					</tspan>
				</text>
				<XAxis
					dy={-40}
					padding={{ left: 10, right: 10 }}
					type="number"
					dataKey="day"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					allowDecimals={false}
					tickCount={10}
					tickFormatter={getDay}
					domain={["dataMin - 0", "dataMax +0"]}
					stroke="white"
					tick={{ opacity: 0.7 }}
				/>
				<YAxis
					hide
					dataKey="sessionLength"
					type="number"
					domain={["dataMin - 60", "dataMax +90"]}
					allowDecimals={false}
				/>
				<Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />

				<Line
					type="natural"
					stroke="#FFFFFF"
					dataKey="sessionLength"
					dot={false}
					activeDot={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 10 }}
				/>
			</LineChart>
		</>
	);
}

/**
 * Composant personnalisé pour le tooltip du graphique.
 * @param {Object} props - Props du composant.
 * @param {boolean} props.active - Si le tooltip est actif.
 * @param {Object[]} props.payload - Tableau d'objets contenant les données à afficher dans le tooltip.
 * @returns {JSX.Element|null} - Element JSX représentant le tooltip personnalisé ou null si pas de données.
 */

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<StyleTooltip>
				<p>{`${payload[0].value} min`}</p>
			</StyleTooltip>
		);
	}
	return null;
};

/**
 * Composant graphique personnalisé pour l'affichage de l'effet de survol.
 * @param {Object[]} points - Tableau d'objets contenant les coordonnées du point survolé.
 * @returns {JSX.Element} - Element JSX représentant l'effet de survol.
 */

const CustomHover = ({ points }) => {
	return <rect width="258" height="263" fill="rgba(0, 0, 0, 0.1)" y="5" x={points[0].x} />;
};

/**
 * Fonction utilitaire qui retourne le jour de la semaine à partir d'un nombre.
 * @param {number} day - Le jour de la semaine sous forme de nombre (1 pour lundi, 2 pour mardi, etc.).
 * @returns {string} - Le jour de la semaine sous forme de lettre (L pour lundi, M pour mardi, etc.).
 */

const getDay = (day) => Days[day - 1];
const Days = ["L", "M", "M", "J", "V", "S", "D"];

const StyleTooltip = styled.div`
	background: #ffffff;
	font-weight: 500;
	padding: 10px;
`;

AverageChart.propTypes = {
	 /**
   * Données du graphique.
   */
	data: propTypes.arrayOf(
		propTypes.shape({
			day: propTypes.number,
			sessionLenght: propTypes.number,
		}),
	),
};

CustomTooltip.propTypes = {
	/**
   * Indique si l'infobulle est active.
   */
	active: propTypes.bool,
	/**
   * Données de l'infobulle.
   */
	payload: propTypes.array,
};

CustomHover.propTypes = {
	/**
   * Coordonnées du point survolé.
   */
	points: propTypes.array,
};
