import React from 'react'
import { MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFormInline, MDBIcon, MDBLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem } from 'mdbreact';

class Navbar extends React.Component {
	state = {
		isOpen: true
	}
	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		return (
			<MDBNavbar dark={true} color='special-color' dark expand="lg">
				<MDBContainer>
					<MDBNavbarBrand>PC-MR</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbar-collapse" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav left>
							<MDBNavItem active>
								<MDBLink to="#!">Strona główna</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBLink to="#!">Gotowe komputery</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBLink to="#!">Cennik</MDBLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										<span className="mr-2">Sklep</span>
									</MDBDropdownToggle>
									<MDBDropdownMenu>
										<MDBDropdownItem>Części komputerowe</MDBDropdownItem>
										<MDBDropdownItem>Urządzenia peryferyjne</MDBDropdownItem>
										<MDBDropdownItem>Smart home</MDBDropdownItem>
										<MDBDropdownItem>Inne</MDBDropdownItem>
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
			</MDBNavbar>
		);
	}
}

export default Navbar