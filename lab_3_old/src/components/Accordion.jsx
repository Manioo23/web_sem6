import React from 'react';

const Accordion = () => (
	<section className="my-5">
		<div class="accordion" >
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						Czy można podróżować samemu?
      </button>
				</h2>
				<div
					id="collapseOne"
					class="accordion-collapse collapse show"
					aria-labelledby="headingOne"
					data-mdb-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong>Lorem ipsum dolor sit</strong>  amet, consectetur adipisicing elit. Reprehenderit maiores n
				am, aperiam minima assumenda deleniti hic. <strong>Lorem ipsum y</strong>dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores n
				am, aperiam minima assumenda deleniti hic.
        overflow.
      </div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button
						class="accordion-button collapsed"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Gdzie wyjechać w pierwszą podróż?
      </button>
				</h2>
				<div
					id="collapseTwo"
					class="accordion-collapse collapse"
					aria-labelledby="headingTwo"
					data-mdb-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong>Lorem ipsum dolor sit</strong>  amet, consectetur adipisicing elit. Reprehenderit maiores n
						am, aperiam minima assumenda deleniti hic. <strong>Lorem ipsum y</strong>dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores n
						am, aperiam minima assumenda deleniti hic.
						overflow.
     				 </div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button
						class="accordion-button collapsed"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						Gdzie kupić dobrą walizkę?
      </button>
				</h2>
				<div
					id="collapseThree"
					class="accordion-collapse collapse"
					aria-labelledby="headingThree"
					data-mdb-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong>Lorem ipsum dolor sit</strong>  amet, consectetur adipisicing elit. Reprehenderit maiores n
				am, aperiam minima assumenda deleniti hic. <strong>Lorem ipsum y</strong>dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores n
				am, aperiam minima assumenda deleniti hic.
        overflow.
      </div>
				</div>
			</div>
		</div>
	</section>
)

export default Accordion;