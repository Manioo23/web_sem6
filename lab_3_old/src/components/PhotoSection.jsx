import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact';
import React from 'react';

const PhotoSection = () => (
	<MDBContainer fluid>
		<MDBRow className="mb=5">
			<MDBCol md="9">
				<div
					className="bg-image container-fluid bg-cover"
					style={{
						backgroundImage: `url("https://images.pexels.com/photos/3885493/pexels-photo-3885493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
						height: "100%",
						backgroundSize: "cover",
						backgroundPositionY: "85%"
					}}
				></div>

			</MDBCol>
			<MDBCol md="3">

				<MDBTypography blockquote>
					<MDBBox tag="p" mb={0}>Podróżowanie to nie jest coś, do czego się nadajesz. To coś, co robisz. Jak oddychanie.</MDBBox>
					<MDBBox tag="footer" mb={3} className="blockquote-footer">Gayle Forman <cite title="Ten jeden dzień">Ten jeden dzień</cite></MDBBox>
				</MDBTypography>
			</MDBCol>
		</MDBRow>
	</MDBContainer>
)


export default PhotoSection;