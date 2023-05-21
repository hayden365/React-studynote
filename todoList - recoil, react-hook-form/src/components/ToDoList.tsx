import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};
	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<select value={category} onInput={onInput}>
				<option value={Categories.TO_DO}>To Do</option>
				<option value={Categories.DOING}>Doing</option>
				<option value={Categories.DONE}>Done</option>
			</select>
			<CreateToDo />
			{toDos.map(toDo => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</div>
	);
}

// interface IForm {
// 	email: string;
// 	firstName: string;
// 	lastName: string;
// 	username: string;
// 	password: string;
// 	password1: string;
// 	extraError?: string;
// }

// function ToDoList() {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 		setError,
// 	} = useForm<IForm>({
// 		defaultValues: {
// 			email: "@naver.com",
// 		},
// 	});
// 	const onValid = (data: IForm) => {
// 		if (data.password !== data.password1) {
// 			setError(
// 				"password1",
// 				{
// 					message: "Password are not the same",
// 				},
// 				{ shouldFocus: true },
// 			);
// 		}
// 		setError("extraError", { message: "Server offline." });
// 	};
// 	console.log(errors, "에러");

// 	return (
// 		<div>
// 			<form
// 				style={{ display: "flex", flexDirection: "column" }}
// 				onSubmit={handleSubmit(onValid)}
// 			>
// 				<input
// 					{...register("email", {
// 						required: "Email is required",
// 						pattern: {
// 							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
// 							message: "Only naver.com emails allowed",
// 						},
// 					})}
// 					placeholder="Email"
// 				/>
// 				<span>{errors?.email?.message}</span>
// 				<input
// 					{...register("firstName", {
// 						required: "write here",
// 						validate: {
// 							noNico: value =>
// 								value.includes("nico") ? "no nicos allowed" : true,
// 							noNick: value =>
// 								value.includes("nick") ? "no nick allowed" : true,
// 						},
// 					})}
// 					placeholder="FirstName"
// 				/>
// 				<span>{errors?.firstName?.message}</span>
// 				<input
// 					{...register("lastName", { required: "write here" })}
// 					placeholder="LastName"
// 				/>
// 				<span>{errors?.lastName?.message}</span>
// 				<input
// 					{...register("username", { required: "write here", minLength: 10 })}
// 					placeholder="Username"
// 				/>
// 				<span>{errors?.username?.message}</span>
// 				<input
// 					{...register("password", { required: "write here" })}
// 					placeholder="Password"
// 				/>
// 				<span>{errors?.password?.message}</span>

// 				<input
// 					{...register("password1", {
// 						required: "Pssword is required",
// 						minLength: {
// 							value: 5,
// 							message: "Your password is too short.",
// 						},
// 					})}
// 					placeholder="Password1"
// 				/>
// 				<span>{errors?.password1?.message}</span>

// 				<button>Add</button>
// 				<span>{errors?.extraError?.message}</span>
// 			</form>
// 		</div>
// 	);
// }

export default ToDoList;
