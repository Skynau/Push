import React, { useState } from 'react'
import QRCode from "react-qr-code";

export const ShareModal = ({propertyId}) => {
              
const [copy, setCopy] = useState(`http://www.push.test/property/${propertyId}`)
const [shareOpen, setShareOpen] = useState(true);
const [copySuccess, setCopySuccess] = useState(null);

// const propertyId = {propertyId}

 const handleCopy = () => {
  navigator.clipboard?.writeText(copy);
  // console.log(copy)
 };

  // const copyToClipBoard = async (copyMe) => {
  //     try {
  //        await navigator.clipboard.writeText(copyMe);
  //         setCopySuccess('Copied!');
  //    } 
  //     catch (err) {
  //        setCopySuccess('Failed to copy!');
  //     }
  // };

  const hideOnBackdrop = (e) => {
    const modal = e.target;
    modal.classList.remove("active");
  };


  const toggleShare = () => {
      setShareOpen((prevValue) => !prevValue);
      };

      // console.log(copy)
  return (
            <div className="modal-content">
          {/* <span className="close" onClick={toggleShare}>
            &#10005;
          </span> */}
          <div className="modal-text">
            <h2>Share property</h2>
            <p>http://www.push.test/property/{propertyId}</p>
          </div>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
          <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={copy}
              viewBox={`0 0 256 256`}
              />
            </div>

          <div className="modal-btns">
            <button type="submit" onClick={handleCopy}>
              Copy to clipboard
            </button>
          </div>
        </div>
  )
}
