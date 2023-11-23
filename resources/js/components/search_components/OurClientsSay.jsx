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
                                "I've been renting properties for years, but my experience with this rental property website was by far the best. Their website is user-friendly, making it easy to search for available properties based on my specific criteria. The team was prompt in answering my inquiries and arranging viewings. Thanks to them, I found the perfect apartment in no time."
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
                                "We were blown away by the professionalism and dedication of the team at this rental property website. They listened to our needs, understood our preferences, and helped us find the ideal apartment within our budget. The whole process was seamless, and we couldn't be happier with our new home."
                            </p>
                        </div>
                        <div className="testimonial-author">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Client Avatar"
                                className="author-avatar"
                            />
                            <div className="author-info">
                                <h4 className="author-name">Sophie Martin</h4>
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