import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="title">Biography</h3>
          </div>

          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Leon Fenzl</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>31 years</th>
                  </tr>
                  <tr>
                    <th>Nationality</th>
                    <th>Brazilian/Austrian</th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:leon.gameworks@gmail.com">
                        leon.gameworks@gmail.com
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Linkedin</th>
                    <th>
                      <a href="https://www.linkedin.com/in/leon-fenzl" target="_blank">
                        linkedin.com/in/leon-fenzl
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Art Station</th>
                    <th>
                      <a href="https://leonfenzl.artstation.com" target="_blank">
                        leonfenzl.arstation.com
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img\cv-leon_fenzl.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Toolbox
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Freelancer - Brasília, Brazil</h5>
                          <span>( 2016 — Today )</span>
                        </div>
                        <h3>Gameplay Programmer & 3D Modeler</h3>
                        <p>
                          I have been working as a freelancer for clients in
                          Brazil and abroad since 2016, focusing in 3D modeling,
                          riging and overall development using Unity and Godot
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>SENAC - Brasília, Brazil</h5>
                          <span>( 10.2022 - Today )</span>
                        </div>
                        <h3>Freelance teacher for Godot & Blender</h3>
                        <p>
                          Intermediary level workshops in animation and colision
                          detection using GdScript from the Godot engine and
                          modeling using Blender.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>
                            Development School Happy Code - Brasília, Brazil
                          </h5>
                          <span>( 01.2022 - 08.2022 )</span>
                        </div>
                        <h3>Teacher for Unity & C#</h3>
                        <p>
                          Introductory courses for kids and teenagers on Unity
                          and game development using C# and the Unity scripting
                          API.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Podcast "Jamcast IESB"</h5>
                          <span>( 2019 - 2020 )</span>
                        </div>
                        <h3>Moderator and researcher</h3>
                        <p>
                          Podcast created during my time at the university
                          covering recent developments in the local game
                          industry.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>

              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>IESB University - Brasília, Brazil</h5>
                          <span>( 2018 - 2021 )</span>
                        </div>
                        <h3>Digital Game Design</h3>
                        <p>
                          My graduation covered key aspects of game development
                          such as concept & sketching, modeling, riging and
                          programming using various tools like Unity, ZBrush,
                          Maya, Photoshop and their respective scripting
                          languages where available.
                          <br />I have also developed a solid foundation in
                          important areas like game psychology, narrative &
                          storytelling and marketing.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>University of Brasília - Brasília, Brazil</h5>
                          <span>( 05.2018 - 06.2018 )</span>
                        </div>
                        <h3>Design and Narrative, 64 hours</h3>
                        <p>
                          In this very important course I learned how to guide
                          users and help them achieve their goals through design
                          best practices and contextual nudges, using both
                          graphics and copy.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Game Total - Brasília, Brazil</h5>
                          <span>( 2014 - 2015 )</span>
                        </div>
                        <h3>3D Modeling and Game implementation, 500 hours</h3>
                        <p>
                          During this course entered the brave new world of game
                          design. I learned up to intermediary skills in 3D
                          modeling, riging and C# development using the Unity
                          framework.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Modeling (Maya, ZBrush, Modo & Blender)
                      </h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Riging (Maya & Blender)
                      </h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={75}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Gameplay programming (Unity, Godot & Unreal)
                      </h3>
                      <span
                        className="progress_percent"
                        style={{ right: "25%" }}
                      >
                        75%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="progress_item open" data-value={40}>
                    <div className="item_in">
                      <h3 className="progress_title">
                        Concept Art (Pen & Paper, Photoshop & Affinity)
                      </h3>
                      <span
                        className="progress_percent"
                        style={{ right: "60%" }}
                      >
                        40%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "40%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resumo_fn_desc">
                  <p>
                    A freelance game designer with a love for clean models
                    performant games and well-written code, located in Brazil
                    but available worldwide. I Provide high quality and cost
                    effective remote game related services.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
