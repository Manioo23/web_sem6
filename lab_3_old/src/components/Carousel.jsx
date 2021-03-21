import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardGroup, MDBRow } from
    "mdbreact";

const Carousel = () => (
    <section id="workers" class="text-center">
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardImage src="https://i.redd.it/y5oxjq2booc01.png" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <p className='font-weight-bold blue-text'>Photographer</p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://images.pexels.com/photos/6000090/pexels-photo-6000090.jpeg?cs=srgb&dl=pexels-ono-kosuki-6000090.jpg&fm=jpg" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <p className='font-weight-bold blue-text'>Photographer</p>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://images.pexels.com/photos/6000090/pexels-photo-6000090.jpeg?cs=srgb&dl=pexels-ono-kosuki-6000090.jpg&fm=jpg" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>

                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                        <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardImage src="https://images.pexels.com/photos/6000090/pexels-photo-6000090.jpeg?cs=srgb&dl=pexels-ono-kosuki-6000090.jpg&fm=jpg" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://i.redd.it/y5oxjq2booc01.png" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://images.pexels.com/photos/6000090/pexels-photo-6000090.jpeg?cs=srgb&dl=pexels-ono-kosuki-6000090.jpg&fm=jpg" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                        <MDBCardGroup>
                                <MDBCard>
                                    <MDBCardImage src="https://images.pexels.com/photos/6000090/pexels-photo-6000090.jpeg?cs=srgb&dl=pexels-ono-kosuki-6000090.jpg&fm=jpg" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://i.redd.it/y5oxjq2booc01.png" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardImage src="https://i.redd.it/y5oxjq2booc01.png" alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5"><strong>Alice Mayer</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                        <MDBBtn color="primary" size="md">
                                            read more
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    </section >
);

export default Carousel;