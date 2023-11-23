import React, { useEffect, useState } from 'react';
import './DetailInfo.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailInfo = () => {

  const [latest, setLatest] = useState('');

  const getLatest = async () => {
    try{
      const response = await axios('/api/latest');
      setLatest(response.data)
    } catch (error) {
            console.error("Error fetching data:", error);
        }
  }

  useEffect(()=>{
    getLatest();
  },[])

  // console.log(latest);
    return (
        <div className="main__container">
          <div className="container">
            <div className="header__container">
              <h1 className="header">Latest Properties</h1>
              <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>

            { latest ?
            latest.map((apt)=>(
            <Link to={`/property/${apt?.id}`} className="row g-4" key={apt?.id} >
            <div  className="row g-4">
              <div href="#" className="outter_box">
                <div className="main__box">
                  <div className="icon">
                    <img className="img-fluid" src={apt?.media[0].url}
                    alt="Apartment Icon" />
                  </div>
                  <h6>{apt?.disposition.disposition}</h6>
                  <span>{apt?.price_rent} CZK</span>
                </div>
              </div>
            </div>
            </Link>
            ))
          :
          ""}
            {/* <div className="row g-4">
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
            </div> */}
          </div>
        </div>
      );
};

export default DetailInfo