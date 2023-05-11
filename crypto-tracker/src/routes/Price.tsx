import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Price() {
	const coinId = useOutletContext();
	return <div>Price</div>;
}
