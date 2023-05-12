import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { IHistorical } from "./Chart";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

export default function Price() {
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
					type="candlestick"
					options={{
						theme: {
							mode: "dark",
						},
						chart: {
							height: 300,
							width: 500,
							type: "candlestick",
							toolbar: {
								show: false,
							},
							background: "transparent",
						},
						xaxis: {
							type: "datetime",
						},
						yaxis: {
							tooltip: {
								enabled: true,
							},
						},
					}}
					series={[
						{
							data:
								data === undefined
									? []
									: data?.map(price => ({
											x: price.time_open,
											y: [price.open, price.high, price.low, price.close],
									  })),
						},
					]}
				/>
			)}
		</div>
	);
}
