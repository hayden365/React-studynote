import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams<{ coinId: string }>();
	/** 홈을 통해서 해당 페이지에 들어올 때만 name을 받을 수 있다. */
	const { state } = useLocation() as RouteState;
	const [info, setInfo] = useState<InfoData>();
	const [priceInfo, setPriceInfo] = useState<PriceData>();

	useEffect(() => {
		(async () => {
			const infoData = await (
				await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
			).json();
			const priceData = await (
				await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
			).json();
			setInfo(infoData);
			setPriceInfo(priceData);
			setLoading(false);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<Title>
					{state?.name ? state.name : loading ? "loading..." : info?.name}
				</Title>
			</Header>
			{loading ? (
				<Loader>"Loading"</Loader>
			) : (
				<div>
					<Overview>
						<OverviewItem>
							<span>Rank:</span>
							<span>{info?.rank}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Symbol:</span>
							<span>${info?.symbol}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Open Source:</span>
							<span>{info?.open_source ? "Yes" : "No"}</span>
						</OverviewItem>
					</Overview>
					<Description>{info?.description} </Description>
					<Overview>
						<OverviewItem>
							<span>Total Suply:</span>
							<span>{priceInfo?.total_supply}</span>
						</OverviewItem>
						<OverviewItem>
							<span>Max Suply:</span>
							<span>{priceInfo?.max_supply}</span>
						</OverviewItem>
					</Overview>
					<Link to={`/${coinId}/chart`}>Chart</Link>
					<Link to={`/${coinId}/price`}>Price</Link>
					<Outlet />
				</div>
			)}
		</Container>
	);
}
