import React, { useState } from "react";
import "./response.css";

const Response = ({ code, response }) => {
	const [isShow, setIsShow] = useState(false);

	const toggleChange = (e) => {
		e.preventDefault();
		setIsShow(!isShow);
	};
	return (
		<div className="container">
			<div className="section-one">
				<div className="left">
					<select name="code" id="code">
						<option disabled defaultValue>
							cURL
						</option>
						<option value="code">Code</option>
						<option value="node">Node</option>
					</select>
				</div>
				<div className="right">
					<h6>Show response</h6>
					<label className="switch">
						<input type="checkbox" onChange={(e) => toggleChange(e)} />
						<span className="slider"></span>
					</label>
				</div>
			</div>
			<div className="section-two">
				<p>{code}</p>
			</div>
			{isShow && (
				<div className="section-three">
					<p>{response}</p>
				</div>
			)}
		</div>
	);
};

export default Response;
