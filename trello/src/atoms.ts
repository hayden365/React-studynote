import { atom } from "recoil";

interface IToDoState {
	[key: string]: ITodo[];
}

export interface ITodo {
	id: number;
	text: string;
}

export const isDarkAtom = atom({
	key: "isDark",
	default: true,
});

export const toDostate = atom<IToDoState>({
	key: "toDo",
	default: {
		"To Do": [],
		Doing: [],
		Done: [],
	},
});
