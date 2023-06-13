import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Header from "./Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tv" element={<Tv />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</Router>
	);
}

export default App;
