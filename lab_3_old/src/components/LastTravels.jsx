import { MDBCol, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React from 'react';

const img_srcs = [
	`https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
	`https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
	`https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
	`https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
	`https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
	`https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
]

const prepareImage = (src, index) => (
	<MDBCol lg="4" md={!index % 3 ? "12" : "6"} mb="4" className="mb-5">
		<MDBView className="overlay z-depth-1-half">
			<img src={src} class="img-fluid" alt={"Trip Photo " + (index + 1)} />
			<a href="#!">
				<MDBMask overlay="blue-light" />
			</a>
			<h4 class="my-4 font-weight-bold">Podróż {index + 1}</h4>
			<p class="grey-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores n
				am, aperiam minima assumenda deleniti hic.
 			</p>
		</MDBView>
	</MDBCol>
)

const LastTravels = () => (
	<section id="lastTravels" class="text-center">
		<MDBRow>
			{
				img_srcs.slice(0, 3).map(prepareImage)
			}
		</MDBRow>
		<MDBRow>
			{
				img_srcs.slice(3, 6).map((v, i) => prepareImage(v, i + 3))
			}
		</MDBRow >
	</section >
);

export default LastTravels;