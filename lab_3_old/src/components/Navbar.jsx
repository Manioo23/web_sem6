import React from 'react'
import {
	MDBCollapse, MDBContainer,
	MDBDropdown, MDBDropdownItem,
	MDBNavbarBrand, MDBNavbarNav,
	MDBNavbarToggler, MDBNavItem,
	MDBFormInline, MDBLink, MDBNavbar,
	MDBDropdownMenu, MDBDropdownToggle,
} from 'mdbreact';

class Navbar extends React.Component {
	state = {
		isOpen: true
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		return (
			<MDBNavbar color='special-color' expand="lg" fixed="top" dark>
				<MDBContainer>
					<MDBNavbarBrand>PC-MR</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbar-collapse" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav left>
							<MDBNavItem active>
								<MDBLink to="#!">Strona główna</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBLink to="#!">Podróże</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBLink to="#!">Cennik</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										<span className="mr-2">Inne</span>
									</MDBDropdownToggle>
									<MDBDropdownMenu>
										<MDBDropdownItem>Podróże</MDBDropdownItem>
										<MDBDropdownItem>Podróże</MDBDropdownItem>
										<MDBDropdownItem>Podróże</MDBDropdownItem>
										<MDBDropdownItem>Podróże</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBNavItem>
						</MDBNavbarNav>
						<MDBNavbarNav right>
							<MDBNavItem>
								<MDBFormInline>
									<div className="md-form my-0">
										<input className="form-control mr-sm-2" type="text" placeholder="Szukaj..." aria-label="Search" />
									</div>
								</MDBFormInline>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar >
		);
	}
}

export default Navbar