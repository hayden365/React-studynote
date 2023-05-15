import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
// 	const [todo, setTodo] = useState("");
// 	const [todoError, setTodoError] = useState("");
// 	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = event;
// 		setTodoError("");
// 		setTodo(value);
// 	};
// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		if (todo.length < 10) {
// 			return setTodoError("To do should be longer");
// 		}
// 		console.log("submit");
// 	};
// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<input onChange={onChange} placeholder="Write a to do" />
// 				<button>Add</button>
// 				{todoError !== "" ? todoError : null}
// 			</form>
// 		</div>
// 	);
// }

function ToDoList() {
	const { register, watch } = useForm();
	return (
		<div>
			<form>
				<input {...register("toDo")} placeholder="Write a to do" />
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
