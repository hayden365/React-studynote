import { atom } from "recoil";

interface IToDoState {
	[key: string]: string[];
}

export const isDarkAtom = atom({
	key: "isDark",
	default: true,
});

export const toDostate = atom<IToDoState>({
	key: "toDo",
	default: {
		"To Do": ["a", "b"],
		Doing: ["c", "d"],
		Done: ["e", "f"],
	},
});
