import React, { useEffect } from 'react';
import { Pannellum } from 'pannellum-react';


const Pano = () => {
  return (
    <div>
      {/* <iframe className="pano" allowFullScreen src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//i.imgur.com/6h98KYI.jpg&autoLoad=true"></iframe> */}
      <Pannellum
        width="100%"
        height="500px"
        image="/uploads/pano/R0010148-Edit-HDR.jpg"//THIS WILL BE DYMANIC path for pano from upload
        // pitch={10}
        // yaw={180}
        // hfov={110}
        autoLoad
        showZoomCtrl={false}
      />
    </div>
  )
}

export default Pano