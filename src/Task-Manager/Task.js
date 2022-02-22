import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ oneTask, deleteTask }) => {
	const { id, task } = oneTask;
	return (
		<div className="main">
			<div className="task-name">
				<h4>{task}</h4>
			</div>
			<div className="btns">
				<FontAwesomeIcon icon={faPenToSquare} className="edt" />
				<FontAwesomeIcon
					icon={faTrashCan}
					className="del"
					onClick={() => deleteTask(id)}
				/>
			</div>
		</div>
	);
};

export default Task;
