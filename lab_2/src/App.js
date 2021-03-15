import React from 'react';
import './styles/index.sass'

class App extends React.Component {
	state = {
		isThemeSmall: true
	}
	render() {
		return (
			<div className={this.state.isThemeSmall ? "App" : "App-big"}>
				<div className='navbar'>
					<div className='navbar-logo'>
						Akwarela
					</div>
					<div className='navbar-links'>
						<a href="" className="link-no-style navbar-link">
							Galeria
						</a>
						<a href="" className="link-no-style navbar-link">
							Artyści
						</a>
						<a href="" className="link-no-style navbar-link">
							Odnośniki
						</a>
						<div className="link-no-style navbar-link" onClick={() => this.setState({ isThemeSmall: !this.state.isThemeSmall })}>
							{this.state.isThemeSmall ? "Większa czcionka" : "Mniejsza czcionka"}
						</div>
					</div>
				</div>
				<main>
					<section className="landing">
						<h1>
							Akwarele w sztuce
						</h1>
					</section>
					<section className="galery">
						<h2>
							Galeria
						</h2>
						<div className='wrapper'>
							<div>
								<h4>Świteź</h4>
								<h5>Juliana Fałata</h5>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
									alt="Świteź"
								/>
							</div>
							<div>
								<h4>Świteź</h4>
								<h5>Juliana Fałata</h5>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
									alt="Świteź"
								/>
							</div>
							<div>
								<h4>Świteź</h4>
								<h5>Juliana Fałata</h5>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
									alt="Świteź"
								/>
							</div>
						</div>
					</section>
					<div />
					<section>
						<h2>
							Artyści
						</h2>
						<div className="container">
							<div className="container-row">
								<div className="container-col-span-two">
									<h3>
										Juliusz Kossak
									</h3>
									<p className="paragraph-primary">
										Twórca wielkoformatowych akwarel o tematyce historycznej, przyrodniczej i folklorystycznej.
										Uważany jest za mistrza techniki akwarelowej, pioniera polskiego malarstwa batalistycznego oraz klasyka malarstwa „literackiego".
										Do ulubionych przez artystę tematów sztuki należały sceny z rycerskiej przeszłości Polaków, a także konie
									</p>
								</div>
								<div className="container-col-span-two">
									<h3>
										Juliusz Kossak
									</h3>
									<p className="paragraph-primary">
										Twórca wielkoformatowych akwarel o tematyce historycznej, przyrodniczej i folklorystycznej.
										Uważany jest za mistrza techniki akwarelowej, pioniera polskiego malarstwa batalistycznego oraz klasyka malarstwa „literackiego".
										Do ulubionych przez artystę tematów sztuki należały sceny z rycerskiej przeszłości Polaków, a także konie
									</p>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h2>
							Linki do źródeł
						</h2>
						<div>
							<ul className="link-list">
								<li className="link-wrapper">
									<a href="https://www.mnw.art.pl/" className="link-no-style">
										Muzeum Narodowe w Warszawie
									</a>
								</li>
								<li className="link-wrapper">
									<a href="https://www.mnw.art.pl/" className="link-no-style">
										Muzeum Narodowe w Warszawie
									</a>
								</li>
								<li className="link-wrapper">
									<a href="https://www.mnw.art.pl/" className="link-no-style">
										Muzeum Narodowe w Warszawie
									</a>
								</li>
								<li className="link-wrapper">
									<a href="https://www.mnw.art.pl/" className="link-no-style">
										Muzeum Narodowe w Warszawie
									</a>
								</li>
								<li className="link-wrapper">
									<a href="https://www.mnw.art.pl/" className="link-no-style">
										Muzeum Narodowe w Warszawie
									</a>
								</li>
							</ul>
						</div>
					</section>

				</main>
				<div className='footer-dark'>
					<footer>
						<h3>
							Strona stworzona przez:
						</h3>
						<div className="container">
							<div className="container-row">
								<div className="container-col-span-two"><p>Maciej Witkowski</p></div>
								<div className="container-col-span-two"><p>Szymon Panek</p></div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
