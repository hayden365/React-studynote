import React from "react";
import styled from "styled-components";
import Coin from "./Coin";

const Container = styled.div``;

const Header = styled.header``;

const CoinstList = styled.li``;

const Title = styled.h1``;

const coins = [
	{
		id: "btc-bitcoin",
		name: "Bitcoin",
		symbol: "BTC",
		rank: 1,
		is_new: false,
		is_active: true,
		type: "coin",
	},
	{
		id: "eth-ethereum",
		name: "Ethereum",
		symbol: "ETH",
		rank: 2,
		is_new: false,
		is_active: true,
		type: "coin",
	},
	{
		id: "usdt-tether",
		name: "Tether",
		symbol: "USDT",
		rank: 3,
		is_new: false,
		is_active: true,
		type: "token",
	},
];

export default function Coins() {
	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			<CoinstList>
				<Coin></Coin>
			</CoinstList>
		</Container>
	);
}
