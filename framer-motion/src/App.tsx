import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(180deg, #f08, #d0e);
`;

export default function App() {
	return (
		<Wrapper>
			<Square />
		</Wrapper>
	);
}
