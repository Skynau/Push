import React, { useState } from "react";
import "./ImageGallery.scss";

export default function ImageGallery({ media, toggleGallery }) {
    // console.log(media)

    const [currentIndex, setCurrentIndex] = useState(0);

    const arrayOfPictureUrls = [];

    media?.map((picture) => {
        arrayOfPictureUrls.push(picture.url);
    });

    // console.log(arrayOfPictureUrls)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? arrayOfPictureUrls.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === arrayOfPictureUrls.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${arrayOfPictureUrls[currentIndex]})`,
    };

    let pictureNumber = currentIndex + 1;
    let numberOfPictures = media?.length;
    // console.log(numberOfPictures);

    return (
        <div className="gallery_slider">
            <div className="gallery-quit" onClick={toggleGallery}>
                <p className="gallery-quit_cross">&#10006;</p>
            </div>
            <div className="left-arrow" onClick={goToPrevious}>
                <p>❰</p>
            </div>
            <div className="right-arrow" onClick={goToNext}>
                <p>❱</p>
            </div>
            <div style={slideStyles}></div>
            <div className="gallery-indexer">
                <p className="gallery-indexer_text">
                    {pictureNumber}/{numberOfPictures}
                </p>
            </div>
        </div>
    );
}
