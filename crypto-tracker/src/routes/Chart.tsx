import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

export interface IHistorical {
	time_open: number;
	time_close: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: string;
	market_cap: number;
}

export default function Chart() {
	const { coinId, isDark }: { coinId: string; isDark: boolean } =
		useOutletContext();
	const { isLoading, data } = useQuery<IHistorical[]>(
		["ohlcv", coinId],
		() => fetchCoinHistory(coinId),
		// {
		// 	refetchInterval: 10000,
		// },
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
							mode: isDark ? "dark" : "light",
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
							type: "datetime",
							categories: data?.map(price => price.time_close),
						},
						fill: {
							type: "gradient",
							gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
						},
						colors: ["#0fbcf9"],
						tooltip: {
							y: {
								formatter: value => `$${value.toFixed(1)}`,
							},
						},
					}}
				/>
			)}
		</div>
	);
}
