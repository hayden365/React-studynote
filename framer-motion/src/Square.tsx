import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Figure = styled(motion.div)`
	width: 150px;
	height: 150px;
	background-color: white;
	border-radius: 15px;
`;

export default function Square() {
	return (
		<Figure
			transition={{ type: "spring", bounce: 0.5 }}
			initial={{ scale: 0 }}
			animate={{ scale: 1, rotateZ: 360 }}
		/>
	);
}
