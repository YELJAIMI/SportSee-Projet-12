import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/button.module.css";
import propTypes from "prop-types";

/**
 * Composant Button qui renvoie un lien React-router-styled et stylisé avec un nom de classe 'button'
 * @param {Object} props - Propriétés du composant
 * @param {string} props.pathname - URL de destination du lien
 * @param {string} props.children - Contenu texte du lien
 * @returns {JSX.Element} Composant Button
 */
function Button(props) {
	return (
		<Link to={props.pathname} className={styles.button}>
			{props.children}
		</Link>
	);
}
export default Button

Button.propTypes = {
	pathname: propTypes.string,
	children: propTypes.string,
};
