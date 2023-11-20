import React from 'react';
import './OurClientsSay.scss';

const OurClientsSay = () => {
    return (
        <div className="our-clients-say">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonial-container">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris varius, velit vitae pulvinar euismod, urna urna blandit
                                sem, vel fringilla odio arcu vel orci."
                            </p>
                        </div>
                        <div className="testimonial-author">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Client Avatar"
                                className="author-avatar"
                            />
                            <div className="author-info">
                                <h4 className="author-name">John Doe</h4>
                                <span className="author-position">Lawyer, Company Inc.</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial">
                    <div className="testimonial-content">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris varius, velit vitae pulvinar euismod, urna urna blandit
                                sem, vel fringilla odio arcu vel orci."
                            </p>
                        </div>
                        <div className="testimonial-author">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Client Avatar"
                                className="author-avatar"
                            />
                            <div className="author-info">
                                <h4 className="author-name">John Doe</h4>
                                <span className="author-position">Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClientsSay;