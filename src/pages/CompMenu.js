import React from "react";
import {Link} from 'react-router-dom';
import "../styles/main.css"
import "../styles/app.css"
import "../styles/imgsadress.css"
export default function CompMenu(){
  return(
    <div className="pcMenu">
      <div className="actualMenu">
        <div className="name">
          <div className="photo" id="portrait"></div>
          <p className="name-text">León Fenzl</p>
          <p>Generalist Game Developer</p>
        </div>
      </div>
    </div>
  )
}