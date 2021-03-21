import React, { Component } from 'react'
import Contact from './Contact';
import LastTravels from './LastTravels';
import '../styles/index.sass'

class Main extends Component {
	render() {
		return (
			<main class="mt-5">
				<div class="container">
					<LastTravels />
					<hr class="my-5" />
					<section id="gallery">
					</section>
					<section id='map'>
							<div class="container-fluid m-0 p-0">
								<div id="map-container-google-4" class="z-depth-1-half map-container-4">
									<iframe title="Map of Manhatan" src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
								</div>
							</div>
					</section>
					<hr class="my-5" />
					<Contact />
				</div>
			</main>
		)
	}
}

export default Main;