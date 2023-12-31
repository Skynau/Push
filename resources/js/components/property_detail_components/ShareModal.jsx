import React, { useState } from "react";
import QRCode from "react-qr-code";
import './ShareModal.scss'

export const ShareModal = ({ propertyId, toggleShare }) => {
    const [copy, setCopy] = useState(
        `http://www.push.test/property/${propertyId}`
    );
    const [shareOpen, setShareOpen] = useState(true);
    const [copySuccess, setCopySuccess] = useState(null);

    const handleCopy = () => {
        navigator.clipboard?.writeText(copy);
    };

    const hideOnBackdrop = (e) => {
        const modal = e.target;
        modal.classList.remove("active");
    };

    return (
        <div className="modal-content">
            <div className="share-quit" onClick={toggleShare}>
                <p className="share-quit_cross">&#10006;</p>
            </div>
            <div className="modal-text">
                <h2>Share property</h2>
                <p>http://www.push.test/property/{propertyId}</p>
            </div>
            <div
                style={{
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 64,
                    width: "100%",
                }}
            >
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
    );
};
