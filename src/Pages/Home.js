import React,{ useState, useEffect } from "react";
function Home({bgImgs=[]}) {
  const getRandomImage = ()=>{
    if (bgImgs===0)return null;
    const randomIndex = Math.floor(Math.random()*bgImgs.length);
    return bgImgs[randomIndex];
  };
  const randomImage = getRandomImage();
  
  return (
    <section className="section-flex" id="home">
      <div className="side"/>
      <div className="container">
        <div className="buffer"/>
        <div className="ramdomner" style={{backgroundImage:`url(${randomImage})`,
          backgroundRepeat:"no-repeat",backgroundSize:"cover",
          backgroundPosition:"center",backgroundAttachment: "local",
          transition:"background-image 2s ease-in-out"}}/>
      </div>
      <div className="side"/>
    </section>
  );
}
export default Home;