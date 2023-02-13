const redux = require("redux");

/**중앙 저장소 만듦.
 * 디스패치된 액션에 따라 다른 과정이 있기를 원함.
 */
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSubscriber);
/**실행시키지 않고, 가리킬뿐
 * 리듀서, 구독 함수를 모두 리덕스가 실행하기 때문
 */

/**액션 */
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
