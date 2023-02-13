import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	/**useSelector를 사용함으로써 해당 컴포넌트는 store를 자동으로 구독
	 *리덕스 저장소에서 데이터가 변경될때마다 자동으로 컴포넌트 함수가 재실행됨
	 */
	const show = useSelector(state => state.showCounter);

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const increaseHandler = () => {
		dispatch({ type: "increase", amount: 10 });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

/**
 * 클래스 기반 컴포넌트
 */
// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
// 					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }
// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		decrement: () => dispatch({ type: "decrement" }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
