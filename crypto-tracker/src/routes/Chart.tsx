import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
	time_open: number;
	time_close: number;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
	market_cap: number;
}

export default function Chart() {
	const { coinId }: { coinId: string } = useOutletContext();
	const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
		fetchCoinHistory(coinId),
	);
	return (
		<div>
			{isLoading ? (
				"Loading chart..."
			) : (
				<ApexChart
					type="line"
					series={[
						{
							name: "price",
							data:
								data === undefined
									? []
									: data?.map(price => Number(price.close)),
						},
					]}
					options={{
						theme: {
							mode: "dark",
						},
						chart: {
							height: 300,
							width: 500,
							toolbar: {
								show: false,
							},
							background: "transparent",
						},
						grid: {
							show: false,
						},
						stroke: {
							curve: "smooth",
							width: 4,
						},
						yaxis: {
							show: false,
						},
						xaxis: {
							axisBorder: { show: false },
							labels: { show: false },
							axisTicks: {
								show: false,
							},
						},
					}}
				/>
			)}
		</div>
	);
}
