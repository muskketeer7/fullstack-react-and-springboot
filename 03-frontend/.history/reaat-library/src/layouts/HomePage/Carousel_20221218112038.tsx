export const Carousel = () => {
    return (
        <div className="container mt-5" style={{ height: 550 }}>
            <div className="homepage-carousel-title">
                <h3>Find your next "I stayed up too late reading books."</h3>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval='false'>
                {/* Desktop */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="text-center">
                                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                        width='151'
                                        height='233'
                                        alt="book"
                                    />
                                    <h6 className='mt-2'>Book</h6>
                                    <p>Luv2Code</p>
                                    <a href="#" className='btn main-color text-white' >Reserve</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type="button" data-bs-target='#carouselExampleControls' data-bs-slide='prev'></button>
            </div>
        </div>
    );
};