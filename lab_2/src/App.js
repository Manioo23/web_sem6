import './styles/index.sass'

function App() {
	return (
		<div className="App">
			<div className='navbar'>
				<div>
					Akwarela
				</div>
				<div>
					<a>
						Galeria
					</a>
					<a>
						Artyści
					</a>
					<a>
						Odnośniki
					</a>
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
								<h2>
									Juliusz Kossak
								</h2>
								<p className="paragraph-primary">
									Twórca wielkoformatowych akwarel o tematyce historycznej, przyrodniczej i folklorystycznej.
									Uważany jest za mistrza techniki akwarelowej, pioniera polskiego malarstwa batalistycznego oraz klasyka malarstwa „literackiego".
									Do ulubionych przez artystę tematów sztuki należały sceny z rycerskiej przeszłości Polaków, a także konie
								</p>
							</div>
							<div className="container-col-span-two">
								<h2>
									Juliusz Kossak
								</h2>
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
					<ul>
						<li>
							<a>
								Link do muzeum sztuki w Warszawie
							</a>
						</li>
						<li>
							<a>
								Link do muzeum sztuki w Warszawie
							</a>
						</li>
						<li>
							<a>
								Link do muzeum sztuki w Warszawie
							</a>
						</li>
						<li>
							<a>
								Link do muzeum sztuki w Warszawie
							</a>
						</li>
						<li>
							<a>
								Link do muzeum sztuki w Warszawie
							</a>
						</li>
					</ul>
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

export default App;
