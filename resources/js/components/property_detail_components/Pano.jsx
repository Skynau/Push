import React, { useEffect } from 'react';
import { Pannellum } from 'pannellum-react';


const Pano = ({pano}) => {
  console.log(pano)
  return (
    <div>
      {/* <iframe className="pano" allowFullScreen src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//i.imgur.com/6h98KYI.jpg&autoLoad=true"></iframe> */}
      <Pannellum
        width="100%"
        height="800px"
        image={pano}//THIS WILL BE DYMANIC path for pano from upload
        pitch={10}
        yaw={100}
        hfov={140}
        autoLoad
        // showZoomCtrl={false}
        // autoRotate={10}
      />
    </div>
  )
}

export default Pano