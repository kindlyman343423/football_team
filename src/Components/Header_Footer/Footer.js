import React from 'react'
import CityLogo from '../ui/CityLogo';

const Footer = () => {
  return (
    <footer className="bck_blue" style={{marginTop: "200px"}}>
      <div className="footer-logo">
      <CityLogo 
        height= "70px"
        width= "70px"
        isLink={true}
        linkTo="/"
      />
      </div>
      <div className="footer-discl">
      Machester City 2018. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
