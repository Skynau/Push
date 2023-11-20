import React from 'react';
import './DetailInfo.scss';

const DetailInfo = () => {

    return (
        <div className="main__container">
          <div className="container">
            <div className="header__container">
              <h1 className="header">Property Types</h1>
              <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>Apartment</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>Villa</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>House</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>Office</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>Townhouse</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div className="row g-4">
              <a href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt="Apartment Icon" />
                  </div>
                  <h6>Shop</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      );
};

export default DetailInfo