import React, { useState } from "react";
import SetTasks from "./Set-Tasks";
import TaskList from "./Task-List";
import data from "./data";

const Manager = () => {
	const [tasks, setTasks] = useState(data);
	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task) {
			const newTask = {
				id: new Date().getTime(),
				task,
			};
			let newTasks = [...data, newTask];
			setTasks(newTasks);
			console.log("Task added");
			setTask("");
		}
	};

	const deleteTask = (id) => {
		let newTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(newTasks);
		console.log("Item deleted");
	};
	return (
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6 p-3 my-3 bg-dark text-white">
				{/* <SetTasks tasks={tasks} setTasks={setTasks} /> */}
				<SetTasks task={task} setTask={setTask} handleSubmit={handleSubmit} />
				<TaskList tasks={tasks} deleteTask={deleteTask} />
			</div>
			<div className="col-md-3"></div>
		</div>
	);
};

export default Manager;
