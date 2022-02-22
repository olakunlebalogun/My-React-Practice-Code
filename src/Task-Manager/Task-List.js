import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask }) => {
	return (
		<div className="task-list">
			<h2 className="task-head">Task List</h2>
			{tasks.map((tsk) => {
				return <Task key={tsk.id} oneTask={tsk} deleteTask={deleteTask} />;
			})}
		</div>
	);
};

export default TaskList;
