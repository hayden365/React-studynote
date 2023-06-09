import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 10px 10px;
	background-color: ${props => props.theme.cardColor};
`;

interface IDragabbleCardProps {
	toDo: string;
	index: number;
}

function DraggableCard({ toDo, index }: IDragabbleCardProps) {
	return (
		<Draggable key={index} draggableId={toDo} index={index}>
			{magic => (
				<Card
					ref={magic.innerRef}
					{...magic.draggableProps}
					{...magic.dragHandleProps}
				>
					{toDo}
				</Card>
			)}
		</Draggable>
	);
}

export default memo(DraggableCard);
