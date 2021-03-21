import React, { Component } from 'react'
import Contact from './Contact';
import LastTravels from './LastTravels';

class Main extends Component {
	render() {
		return (
			<main class="mt-5">
				<div class="container">
					<LastTravels />
					<hr class="my-5" />
					<section id="gallery">
					</section>
					<hr class="my-5" />
					<Contact />
				</div>
			</main>
		)
	}
}

export default Main;