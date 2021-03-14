import './styles/index.sass'

function App() {
	return (
		<div className="App">
			<header>
				<div>
					Left side
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
			</header>
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
					<div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
							alt="Świteź"
						/>
					</div>
					<div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
							alt="Świteź"
						/>
					</div>
					<div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fa%C5%82at_%C5%9Awite%C5%BA.jpg/440px-Fa%C5%82at_%C5%9Awite%C5%BA.jpg"
							alt="Świteź"
						/>
					</div>
				</section>
				<div />
				<section>
					<h2>
						Artyści
					</h2>
					<div class="container">
						<div class="container-row">
							<div class="container-col-span-two">
								<h3>
								Juliusz Kossak
								</h3>
								<p class="paragraph-primary">
									Twórca wielkoformatowych akwarel o tematyce historycznej, przyrodniczej i folklorystycznej.
									Uważany jest za mistrza techniki akwarelowej, pioniera polskiego malarstwa batalistycznego oraz klasyka malarstwa „literackiego".
									Do ulubionych przez artystę tematów sztuki należały sceny z rycerskiej przeszłości Polaków, a także konie
								</p>
							</div>
							<div class="container-col-span-two">
								<h3>
									Juliusz Kossak
								</h3>
								<p class="paragraph-primary">
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
			<footer>
				<p>
					Strona stworzona przez
				</p>
				<div class="container">
					<div class="container-row">
						<div class="container-col-span-two">Maciej Witkowski</div>
						<div class="container-col-span-two">Szymon Panek</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
