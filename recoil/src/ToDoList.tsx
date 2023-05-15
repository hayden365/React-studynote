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
	const { register, handleSubmit } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};

	return (
		<div>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit(onValid)}
			>
				<input
					{...register("Email", {
						required: true,
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
							message: "Only naver.com emails allowed",
						},
					})}
					placeholder="Email"
				/>
				<input
					{...register("firstName", { required: true })}
					placeholder="FirstName"
				/>
				<input
					{...register("lastName", { required: true })}
					placeholder="LastName"
				/>
				<input
					{...register("username", { required: true, minLength: 10 })}
					placeholder="Username"
				/>
				<input
					{...register("password", { required: true })}
					placeholder="Password"
				/>
				<input
					{...register("password1", {
						required: "Pssword is required",
						minLength: {
							value: 5,
							message: "Your password is too short.",
						},
					})}
					placeholder="Password1"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
