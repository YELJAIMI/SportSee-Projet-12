import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/button.module.css";
import propTypes from "prop-types";

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
