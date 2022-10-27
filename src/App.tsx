import "./App.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

/*	Redux Toolkit start */
import {RootState} from "./services/store/index";
import {getTestingText} from "./services/reducers/cartSlice";
import {addTodo} from "./services/reducers/commonSlice";
/* Redux Tool kit End */

// Components start
import Home from "./Pages/Home/Home";
// Components end
function App(): JSX.Element {
	const dispatch = useDispatch();
	//RootState es el store por default de Redux pero exportado
	const existText = useSelector((state: RootState) => state.cart.text);
	const existPost: any = useSelector(
		(state: RootState) => state.common.posts
	);
	useEffect(() => {
		addText();
		getTodo();
	}, [dispatch]);

	function addText(): void {
		dispatch(
			getTestingText(String("Acá podes cargar texto. En src/App.tsx"))
		);
	}

	function getTodo(): void {
		const data = {id: 4, title: "soy titulo", content: "Soy content"};
		dispatch(addTodo(data));
	}
	console.log("ExistPost?: ", existPost);
	return (
		<div className='App'>
			{existText ? <h2>{existText}</h2> : <h2>Nop</h2>}
			{existPost ? (
				existPost.map((post: any) => (
					<h2 key={post.id}>{post.title}</h2>
				))
			) : (
				<h2>Nop</h2>
			)}
			<Home />
		</div>
	);
}

export default App;

// Saber más? https://bluelight.co/blog/redux-toolkit-with-typescript
