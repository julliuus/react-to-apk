import { useState } from "react";

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="d-flex flex-column gap-4">
			<span className="text-center">Count : {count}</span>
			<button
				className="btn btn-dark border"
				onClick={() => setCount((prev) => prev + 1)}
			>
				Increase
			</button>
			<button
				className="btn btn-dark border"
				onClick={() => {
					setCount((prev) => (prev > 0 ? prev - 1 : prev));
				}}
			>
				Decrease
			</button>
		</div>
	);
};

