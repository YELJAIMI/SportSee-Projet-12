import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";

/**
 * Le composant Home affiche une page d'accueil avec des boutons pour accéder aux pages des utilisateurs.
 * @function Home
 * @returns {JSX.Element} Le composant Home avec les boutons pour les utilisateurs.
 */

function Home() {
	return (
		<>
			<Title>Utilisateurs</Title>
			<Container>
				<Button pathname="user/12">Utilisateur 12</Button>
				<Button pathname="user/18">Utilisateur 18</Button>
			</Container>
		</>
	);
}

const Title = styled.h1`
	font-weight: 700;
	font-size: 48px;
	margin-bottom: 40px;
	text-align: center;
	margin-left: 117px;
`;
const Container = styled.div`
	display: flex;
	gap: 60px;
	justify-content: center;
	margin-left: 117px;
`;
export default Home