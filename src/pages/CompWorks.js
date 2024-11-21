import React, { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import WorkModal from "./WorkModal";
import "../styles/main.css"
import "../styles/app.css"
import "../styles/imgsadress.css"
import img1 from "../images/portfolio/canary.jpg"
import img2 from "../images/portfolio/elf1.jpg"
import img3 from "../images/portfolio/elf3.jpg"
import img4 from "../images/portfolio/elf2.jpg"
import img5 from "../images/portfolio/pokéball.jpg"
import img6 from "../images/portfolio/sculptest.jpg"

export default function CompWorks(){
  const [dialogContent,setDialogContent] = useState(null);
  const dialogRef = React.useRef(null);
  function togleDialog(){
    if(!dialogRef.current){
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }
  return(
    <>
      <div className="reels">
        <button onClick={() => {setDialogContent(<WorkModal src={img1} id ={"canary"} h2={'Canary'}
         p={`
          Comission for artist Lynn Carone, to her video about the Samsara circle.
          `}/>);togleDialog();}} className="work" id="canary">
          <h2 className="client-name">Samsara</h2>
        </button>

        <button onClick={() => {setDialogContent(<WorkModal src={img2} h2={'Canary'}
         p={`
          Comission for artist Lynn Carone, to her video about the Samsara circle.
          `}/>);togleDialog();}} className="work" id="canary">
          <h2 className="client-name">Samsara</h2>
        </button>

        <button onClick={() => {setDialogContent(<WorkModal src={img3} h2={'Canary'}
         p={`
          Comission for artist Lynn Carone, to her video about the Samsara circle.
          `}/>);togleDialog();}} className="work" id="canary">
          <h2 className="client-name">Samsara</h2>
        </button>

        <button onClick={() => {setDialogContent(<WorkModal src={img4} h2={'Canary'}
         p={`
          Comission for artist Lynn Carone, to her video about the Samsara circle.
          `}/>);togleDialog();}} className="work" id="canary">
          <h2 className="client-name">Samsara</h2>
        </button>
        
        <button onClick={() => {setDialogContent(<WorkModal src={img5} h2={'Canary'}
         p={`
          Comission for artist Lynn Carone, to her video about the Samsara circle.
          `}/>);togleDialog();}} className="work" id="canary">
          <h2 className="client-name">Samsara</h2>
        </button>
      </div>
      <dialog ref={dialogRef} onClick={(e) => {if (e.currentTarget === e.target){setDialogContent();togleDialog()}}}>
        {dialogContent}
      </dialog>
    </>
  )
}