import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

/**createSlice로 액션을 전달 */
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
			/**redux toolkit은 내부적으로 immer가 존재해서
			 * 자동으로 원래있는 state를 복제합니다.
			 */
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

/**configureStore vs createStore
 * 둘다 저장소를 생성하지만, configureStore가 여러개의 리듀서를 하나의 리듀서로 합칠 수 있음.
 */

export const counterActions = counterSlice.actions;

export default store;
