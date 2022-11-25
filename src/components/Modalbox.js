import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Fan made Pokéball",
      tag: "3d modeling, rigging, animation",
      desc: [
        { p: "It wouldn`t be a portfolio without some piece representing some of my childhood. Gotta Catch 'Em All!" },
        { p: "This is a purely fan-made piece. I do not own any rights regarding Pokémon and the companys envolved" }
      ]
    },
    {
      name: "Male Elf",
      tag: "cartoon, anatomy, study",
      desc: [
        { p: "Sculpture portrait study, made in Blender." }
      ]
    },
    {
      name: "Female Elf 1",
      tag: "cartoon, anatomy, study", 
      desc: [
        { p: ""}
      ]

    },
    {
      name: "Female Elf 2",
      tag: "cartoon, anatomy, study",
      desc: [
        { p: "sculpture portrait study, made in Blender." }
      ]

    },
    {
      name: "Canary - Comission",
      tag: "3d modeling, rigging, animation",
      desc: [
        { p: "Comission from artist Lynn Carone" }
      ]

    }/*,
    {
      name: "",
      tag: "",
      desc: [
        { p: ""},
        { p: ""}
      ]

    }*/
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;