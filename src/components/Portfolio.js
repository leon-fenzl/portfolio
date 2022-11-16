import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/pokeball.jpg" />
              </div>
              <div className="title_holder">
                <p>3d modeling, rigging, animation</p>
                <h3>
                  <a href="#">Fan made Pokéball</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">3d modeling, rigging, animation</p>
                <h3 className="fn__title">Fan made Pokéball</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/pokeball.jpg" />
                </div>
                <p className="fn__desc">
                  It wouldn`t be a portfolio without some piece representing some of my childhood.
                  Gotta Catch 'Em All!

                  This is a purely fan-made piece. 
                  I do not own any rights regarding Pokémon and the companys envolved.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/2.jpg" />
              </div>
              <div className="title_holder">
                <p>cartoon, anatomy, study</p>
                <h3>
                  <a href="#">Male Elf</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">cartoon, anatomy, study</p>
                <h3 className="fn__title">Male Elf</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/maleelf.jpg" />
                </div>
                <p className="fn__desc">
                  Sculpture portrait study, made on Blender.
                </p>
                <p className="fn__desc">
                  Sculpture portrait study, made on Blender.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/femaleelf1.jpg" />
              </div>
              <div className="title_holder">
                <p>cartoon, anatomy, study</p>
                <h3>
                  <a href="#">Female Elf 1</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">cartoon, anatomy, study</p>
                <h3 className="fn__title">Female Elf 1</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/femaleelf1.jpg" />
                </div>
                <p className="fn__desc">
                  Cartoon portrait study.
                </p>
                <p className="fn__desc">
                  Cartoon portrait study.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/femaleelf2.jpg" />
              </div>
              <div className="title_holder">
                <p>cartoon, anatomy, study</p>
                <h3>
                  <a href="#">Female Elf 2</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">cartoon, anatomy, study</p>
                <h3 className="fn__title">Female Elf 2</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/femaleelf2.jpg" />
                </div>
                <p className="fn__desc">
                  A somewhat more anatomical cartoon portrait study.
                </p>
                <p className="fn__desc">
                  A somewhat more anatomical cartoon portrait study.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/sculptTest.jpg" />
              </div>
              <div className="title_holder">
                <p>mobile, design</p>
                <h3>
                  <a href="#">Ice Cream</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">mobile, design</p>
                <h3 className="fn__title">Ice Cream</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/sculptTest.jpg" />
                </div>
                <p className="fn__desc">
                  Test to see how far Blender can go with sculpture.
                </p>
                <p className="fn__desc">
                  Test to see how far Blender can go with sculpture.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
