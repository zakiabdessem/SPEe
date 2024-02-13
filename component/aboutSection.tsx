import React, { useRef } from "react";
import "./aboutSection.scss";
import { useInView } from "framer-motion";

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="next-section" id="about">
      <div className="container">
        <div className="about">
          <div
            className="about-img"
            data-sr-id={6}
            style={{
              visibility: "visible",
              opacity: 1,
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              transition:
                "opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s",
            }}>
            <i>
              <img src="assets/images/about.png" alt="" />
            </i>
          </div>
          <div className="about-content">
            <h3
              data-sr-id={4}
              style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}>
              Get to Know Us
            </h3>
            <div ref={ref}>
              <h2
                data-sr-id={5}
                style={{
                  transform: isInView ? "none" : "translateX(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}>
                Who are we?
              </h2>
              <div
                className="d1"
                data-sr-id={7}
                style={{
                  transform: isInView ? "none" : "translateX(175px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                }}>
                <p
                  className="p1"
                  style={{
                    transform: isInView ? "none" : "translateX(175px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                  }}>
                  Established on October 15th, 2019, the SPE-University of Batna
                  2 Student Chapter proudly stands as the third chapter in
                  Algeria, following OUERGLA and BOUMERDES. Since our inception,
                  we have been dedicated to fostering a community of passionate
                  individuals committed to the exploration, development, and
                  production of oil and gas resources.
                </p>
              </div>
              <div
                className="d2"
                data-sr-id={8}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}>
                <p
                  className="p2"
                  style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}>
                  What distinguishes our chapter from other chapters is that it
                  includes various majors, such as Geology, IT, HSE, and ST .
                  Providing a diverse and comprehensive platform for knowledge
                  exchange and collaboration between our members .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;