import React, {useState} from 'react'
import './ImageSlider.scss'


const ImageSlider = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideStyles = {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url`,
    };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='slider'>
        <div className='left-arrow' onClick={goToPrevious}>
            <p>❰</p>
        </div>
        <div className='right-arrow' onClick={goToNext}>
            <p>❱</p>
        </div>
        <div style={slideStyles}>

        </div>
    </div>  
  )
}

export default ImageSlider