import React from 'react';

const Carousel = () => (
	<section id="workers" class="text-center">
        <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    class="d-block w-100"
                    alt="..."
                />
                </div>
                <div class="carousel-item">
                <img
                    src="https://mdbootstrap.com/img/new/slides/042.jpg"
                    class="d-block w-100"
                    alt="..."
                />
                </div>
                <div class="carousel-item">
                <img
                    src="https://mdbootstrap.com/img/new/slides/043.jpg"
                    class="d-block w-100"
                    alt="..."
                />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
	</section >
);

export default Carousel;