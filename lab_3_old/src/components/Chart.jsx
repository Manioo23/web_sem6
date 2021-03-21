import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Doughnut } from 'react-chartjs-2';


const data = {
	labels: ["Indie", "Stany Zjednoczone", "Japonia", "Atlantyda", "Włochy"],
	datasets: [
		{
			data: [30, 50, 70, 40, 60],
			backgroundColor: ["#F4F1DE", "#E07A5F", "#3D405B", "#81B29A", "#F2CC8F"],
			hoverBackgroundColor: [
				"#F5F1DD",
				"#E17A5E",
				"#3E405A",
				"#82B299",
				"#F3CC90"
			]
		}
	]
}


const Chart = () => (
	<MDBContainer>
		<h3 className="mt5">Najpopularniejsze cele podróży</h3>
		<Doughnut data={data} options={{ responsive: true }} />
	</MDBContainer>
)

export default Chart;