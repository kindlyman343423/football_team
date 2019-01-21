import React from 'react';
import {Link} from 'react-router-dom';
import mancityLogo from '../../Resources/images/logos/manchester_city_logo.png';

const CityLogo = (props) => {
    const template = <div className="img_cover" style={{
        height: props.height,
        width: props.width,
        background: `url(${mancityLogo}) no-repeat`
      }}>
      </div>

      
        if(!props.isLink){
          return {template}
        }else{
          return <Link to={props.linkTo} className="link_logo">
           {template}
          </Link>
        }
  }

export default CityLogo;