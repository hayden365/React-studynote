import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

interface IRouterProps {
	toggleDark: () => void;
	isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:coinId" element={<Coin isDark={isDark} />}>
					<Route path="/:coinId/price" element={<Price />} />
					<Route path="/:coinId/chart" element={<Chart />} />
				</Route>

				<Route path="/" element={<Coins toggleDark={toggleDark} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
