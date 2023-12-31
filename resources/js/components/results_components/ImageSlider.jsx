import React, {useState} from 'react'
import './ImageSlider.scss'


const ImageSlider = ({pictures}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // console.log(pictures)

    const arrayOfPictureUrls = []

    pictures.map((picture) => {
      arrayOfPictureUrls.push(picture.url)
    })


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? arrayOfPictureUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === arrayOfPictureUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
      width: "22em",
      height: "12em",
      borderRadius: "1vh 1vh 0px 0px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${arrayOfPictureUrls[currentIndex]})`
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