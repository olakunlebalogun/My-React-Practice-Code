import React from "react";
import { Bar } from "react-chartjs-2";

import Chart from "chart.js/auto";

const BarChart = () => {
	const data = [
		{ x: "Jan", net: 100, cogs: 50, gm: 50 },
		{ x: "Feb", net: 120, cogs: 55, gm: 75 },
		{ x: "Mar", net: 90, cogs: 56, gm: 58 },
		{ x: "Apr", net: 102, cogs: 61, gm: 77 },
		{ x: "May", net: 110, cogs: 57, gm: 73 },
		{ x: "Jun", net: 105, cogs: 53, gm: 72 },
	];
	return (
		<div>
			<Bar
				data={{
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
					datasets: [
						{
							label: "Net sales",
							data: data,
							parsing: {
								yAxisKey: "net",
							},
							backgroundColor: "blue",
						},
						{
							label: "Cost of goods sold",
							data: data,
							parsing: {
								yAxisKey: "cogs",
							},
							backgroundColor: "yellow",
						},
						{
							label: "Gross margin",
							data: data,
							parsing: {
								yAxisKey: "gm",
							},
							backgroundColor: "red",
						},
					],
				}}
			/>
		</div>
	);
};

export default BarChart;

// data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
// backgroundColor: [
//     'rgba(255, 99, 132, 0.2)',
//     'rgba(54, 162, 235, 0.2)',
//     'rgba(255, 206, 86, 0.2)',
//     'rgba(75, 192, 192, 0.2)',
//     'rgba(153, 102, 255, 0.2)',
//     'rgba(255, 159, 64, 0.2)'
// ],
// borderColor: [
//     'rgba(255, 99, 132, 1)',
//     'rgba(54, 162, 235, 1)',
//     'rgba(255, 206, 86, 1)',
//     'rgba(75, 192, 192, 1)',
//     'rgba(153, 102, 255, 1)',
//     'rgba(255, 159, 64, 1)'
// ],
// borderWidth: 1
//     }]
// }
