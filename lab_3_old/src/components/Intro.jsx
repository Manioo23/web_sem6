import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React, { Component } from 'react';
import '../styles/Intro.sass'

class Intro extends Component {
	render() {
		return (
			<MDBView id="intro">
				<MDBMask overlay="stylish-strong">
					<MDBContainer fluid className="d-flex justify-content-center h-100">

						<MDBCol md="10" className="d-flex flex-column justify-content-center text-center">
							<MDBRow class="d-flex flex-column">
								<MDBCol>
									<h2 className="display-4 font-weight-bold white-text pt-25 mb-2">Podróże</h2>
									<hr className="hr-light" />
									<h4 className="white-text my-4"> Z nami polecisz na koniec świata i jeszcze dalej</h4>
									<MDBBtn color="white" outline>Dowiedz się więcej<MDBIcon icon="book" className="ml-2" /></MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBContainer>
				</MDBMask>
			</MDBView>
		);
	}
}

export default Intro;