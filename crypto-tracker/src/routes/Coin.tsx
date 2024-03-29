import React, { useState, useEffect } from "react";
import {
	Outlet,
	useLocation,
	useMatch,
	useNavigate,
	useParams,
} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Arrow = styled.button`
	position: absolute;
	left: 5px;
	color: white;
	font-weight: 700;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: ${props => props.theme.accentColor};
`;

const Header = styled.header`
	position: relative;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
	text-align: center;
`;

const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 20px;
	border-radius: 10px;
`;

const OverviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	span:first-child {
		font-size: 10px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
`;

const Description = styled.p`
	margin: 20px 0px;
`;

const Tabs = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0px;
	gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
	text-align: center;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 400;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 7px 0px;
	border-radius: 10px;
	color: ${props =>
		props.isActive ? props.theme.accentColor : props.theme.textColor};
	a {
		display: block;
	}
`;

interface RouteState {
	state: {
		name: string;
	};
}

interface InfoData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	logo: string;
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}

interface PriceData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: string;
			market_cap: string;
			market_cap_change_24h: string;
			percent_change_1h: string;
			percent_change_1y: string;
			percent_change_6h: string;
			percent_change_7d: string;
			percent_change_12h: string;
			percent_change_15m: string;
			percent_change_24h: string;
			percent_change_30d: string;
			percent_change_30m: string;
			percent_from_price_ath: string;
			price: string;
			volume_24h: string;
			volume_24h_change_24h: string;
		};
	};
}

interface ICoinProps {
}

export default function Coin({  }: ICoinProps) {
	const { coinId } = useParams() as { coinId: string };
	/** 홈을 통해서 해당 페이지에 들어올 때만 name을 받을 수 있다. */
	const { state } = useLocation() as RouteState;
	const priceMatch = useMatch("/:coinId/price");
	const chartMatch = useMatch("/:coinId/chart");

	const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
		["info", coinId],
		() => fetchCoinInfo(coinId),
		// {
		// 	refetchInterval: 5000,
		// },
	);
	const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
		["tickers", coinId],
		() => fetchCoinTickers(coinId),
	);

	// const [loading, setLoading] = useState(true);
	// const [info, setInfo] = useState<InfoData>();
	// const [priceInfo, setPriceInfo] = useState<PriceData>();
	// useEffect(() => {
	// 	(async () => {
	// 		const infoData = await (
	// 			await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
	// 		).json();
	// 		const priceData = await (
	// 			await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
	// 		).json();
	// 		setInfo(infoData);
	// 		setPriceInfo(priceData);
	// 		setLoading(false);
	// 	})();
	// }, []);
	const loading = infoLoading || tickersLoading;
	const navigate = useNavigate();
	return (
		<Container>
			<Helmet>
				<title>
					{state?.name ? state.name : loading ? "Loading..." : infoData?.name}
				</title>
			</Helmet>
			<Header>
				<Arrow onClick={() => navigate(-1)}>&#60;</Arrow>
				<Title>
					{state?.name ? state.name : loading ? "Loading..." : infoData?.name}
				</Title>
			</Header>
			{loading ? (
				<Loader>"Loading"</Loader>
			) : (
				<div>
					<Overview>
						<OverviewItem>
							<span>Rank:</span>
							<span>{infoData?.rank}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Symbol:</span>
							<span>${infoData?.symbol}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Price:</span>
							<span>${Number(tickersData?.quotes.USD.price).toFixed(3)}</span>
						</OverviewItem>
					</Overview>
					<Description>{infoData?.description} </Description>
					<Overview>
						<OverviewItem>
							<span>Total Suply:</span>
							<span>{tickersData?.total_supply}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Max Suply:</span>
							<span>{tickersData?.max_supply}</span>
						</OverviewItem>
					</Overview>
					<Tabs>
						<Tab isActive={chartMatch !== null}>
							<Link to={`/${coinId}/chart`}>Chart</Link>
						</Tab>
						<Tab isActive={priceMatch !== null}>
							<Link to={`/${coinId}/price`}>Price</Link>
						</Tab>
					</Tabs>
					<Outlet context={{ coinId }} />
				</div>
			)}
		</Container>
	);
}
