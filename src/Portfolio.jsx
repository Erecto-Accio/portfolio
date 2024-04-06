import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="container-fluid d-flex align-items-center mt-4">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 text-center">
              <h1 className="fw-bold">Tousif Tasrik</h1>
              <p className="text-center">
                I'm a Mernstack Developer | Competitive Programmer{" "}
              </p>
            </div>

            <div className="col-md-12 text-center">
              <img
                src="https://i.ibb.co/KVmsY6D/main2.jpg"
                alt=""
                className="hero-img img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-3 mb-3">
        <div className="row row-1 row-cols-1 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Social</h5>
                <div className="col-md-12 d-flex gap-3">
                  <p className="card-text">
                    <a href="https://www.facebook.com/tousif.tasrik">
                      Facebook
                    </a>
                  </p>
                  <p className="card-text">
                    <a href="https://www.instagram.com/xxtra_curricular_/">
                      Instagram
                    </a>
                  </p>
                  <p className="card-text">
                    <a href="https://wa.me/+8801915559979">Whatsapp</a>
                  </p>
                  <p className="card-text">
                    <a href="mailto:tousif2567@gmail.com">Gmail</a>
                  </p>
                  <p className="card-text">
                    <a href="https://www.github.com/Erecto-Accio">Github</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projects</h5>
                <div className="row">
                  <div className="col-12 d-flex gap-4">
                    <p className="card-text">
                      <a href="#">Ecommerce (MERN)</a>
                    </p>
                    <p className="card-text">
                      <a href="#">ToDo(React)</a>
                    </p>
                    <p className="card-text">
                      <a href="#">Stopwatch(React)</a>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex gap-4">
                      <p className="card-text">
                        <a href="#">Iems software (MERN)</a>
                      </p>
                      <p className="card-text">
                        <a href="#">Spotify Clone (MERN)</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Skill</h5>
                <div className="row">
                  <div className="col-12 d-flex gap-3">
                    <p className="card-text">Html</p>
                    <p className="card-text">Css</p>
                    <p className="card-text">JavaScript</p>
                    <p className="card-text">Node Js</p>
                    <p className="card-text">Express Js</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex gap-3">
                    <p className="card-text">MongoDB</p>
                    <p className="card-text">Firebase</p>
                  </div>
                  <h5 className="card-title">Other</h5>
                  <div className="row">
                    <div className="col-12 d-flex gap-3">
                      <p className="card-text">C</p>
                      <p className="card-text">C++</p>
                      <p className="card-text">Java</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Details About Me</h5>
                <p className="card-text">
                  Hey, Myself Tousif Tasrik. Currently Studying CSE at
                  International University of Scholars.I have been doing MERN
                  stack development since 2022 .Almost it is like 2 years now.
                  Also i have been doing Competitive programming for enriching
                  my knowledge about programming.
                </p>

                <p className="card-text">
                  Hobby : Programming, Singing, Travelling
                </p>

                <p className="card-text">I love my nondini so much 🥰</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
