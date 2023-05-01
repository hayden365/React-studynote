import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CoinsList = styled.li``;

const Title = styled.h1`
	font-size: 48px;
	color: ${props => props.theme.accentColor};
`;

const Coin = styled.li`
	background-color: white;
	color: ${props => props.theme.bgColor};
	border-radius: 20px;
	margin-bottom: 10px;
	a {
		padding: 20px;
		transition: color 0.5s ease-in;
		display: block;
	}
	&:hover {
		a {
			color: ${props => props.theme.accentColor};
		}
	}
`;

interface CoinInterface {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

export default function Coins() {
	const [coins, setCoins] = useState<CoinInterface[]>([]);
	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			<CoinsList>
				{coins.map(coin => (
					<Coin key={coin.id}>
						<Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
					</Coin>
				))}
			</CoinsList>
		</Container>
	);
}
