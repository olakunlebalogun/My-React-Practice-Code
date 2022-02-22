import React from "react";

const SetTasks = ({ task, setTask, handleSubmit }) => {
	// const [task, setTask] = useState("");

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (task) {
	// 		const newTask = {
	// 			id: new Date().getTime(),
	// 			task: task,
	// 		};
	// 		const newTasks = [...tasks, newTask];
	// 		setTasks(newTasks);
	// 		console.log("Task added");
	// 		setTask("");
	// 	}
	// };
	return (
		<div>
			<div className="card p-4">
				<h3 className="mt-3 header p-2">Task Manager</h3>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="row cont">
						<div className="col-md-8">
							<input
								type="text"
								name="task"
								id="task"
								value={task}
								onChange={(e) => setTask(e.target.value)}
							/>
						</div>
						<div className="col-md-4">
							<button type="submit" className="btn btn-dark">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SetTasks;
