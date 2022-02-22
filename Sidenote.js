import React, { useState } from "react";

let myState = {};

const GrandParent = () => {
	const [name, setName] = useState("i'm Grand Parent");
	myState.name = name;
	myState.setName = setName;
	return (
		<>
			<div>{name}</div>
			<Parent />
		</>
	);
};
export default GrandParent;

const Parent = () => {
	return (
		<>
			<button onClick={() => myState.setName("i'm from Parent")}>
				from Parent
			</button>
			<Child />
		</>
	);
};

const Child = () => {
	return (
		<>
			<button onClick={() => myState.setName("i'm from Child")}>
				from Child
			</button>
		</>
	);
};
