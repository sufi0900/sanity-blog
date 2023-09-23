import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "animate.css";
import Grid from "@mui/material/Grid";

import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import SteamHomePage from "./SteamHomePage";
// import Spin from "./Spin";
// import { Helmet } from "react-helmet";
import SvgHomePage from "./SvgHomePage";

// Dynamically import components that you want to code-split
// const AsyncALLComponents = lazy(() => import("./HomePage"));
// const AsyncSvgHomePage = lazy(() => import("./SvgHome"));

const Home = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const button = {
    fontSize: "58px",
    color: "rgba(249, 43, 208, 0.696)",
    position: "relative",
    top: "16px",
  };

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Sufian Mustafa - Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of SuFiaN MusTaFa, a passionate web developer based in Pakistan. Explore my projects and skills in web development.( sufian mustafa website)"
        />
        <link rel="canonical" href="https://sufianmustafa.com/" />
      </Helmet> */}

      <Grid
        container
        padding={2}
        flex
        sx={{
          margin: "auto",
          alignItems: "center", // Center vertically
          minHeight: "100vh",
          // Set minimum height of the container to the viewport height
        }}
      >
        <Grid
          item
          lg={12}
          sm={12}
          sx={{ marginTop: "60px" }}
          container
          className="flex"
        >
          <div className="Home">
            <div className="_CSS" id="ContainerHome">
              <div className="Home_Circle ">
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.no_overflow.preserve_transparency.progressive.sprite/v1693672583/624-6241203_css-icon-png-cascading-style-sheets_jeglsu.webp"
                  style={{ width: "100%", height: "auto" }}
                  alt="css"
                  loading="lazy"
                />
                <SteamHomePage />
              </div>
            </div>
            <div
              className="_JAVASCRIPT"
              style={{
                marginTop: "250px",
                marginBottom: "200px",
                marginLeft: "100px",
              }}
              id="ContainerHome"
            >
              <div className="Home_Circle">
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive/v1693674528/mern_jdtkww.webp"
                  style={{ width: "90%", height: "auto" }}
                  alt="javascript.png"
                  loading="lazy"
                />
                <SteamHomePage />
              </div>
            </div>
            <div
              className="_HTML"
              style={{
                marginTop: "350px",
                marginLeft: "-400px",
              }}
              id="ContainerHome"
            >
              <div className="Home_Circle">
                <img
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite.strip_profile/v1693672396/HTML5_Logo_512_eujwir.webp"
                  style={{ width: "100%", height: "auto" }}
                  alt="html"
                  loading="lazy"
                />
                <SteamHomePage />
              </div>
            </div>
            <div>
              <div
                className="_REACT"
                style={{
                  marginTop: "200px",
                }}
                id="ContainerHome"
              >
                <div className="Home_Circle">
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite/v1692819141/Images/rr_htw6kq.webp"
                    style={{ width: "100%", height: "auto" }}
                    alt="react"
                    loading="lazy"
                  />
                  <SteamHomePage />
                </div>
              </div>
              <div
                className="_NEXTJS"
                id="ContainerHome"
                style={{
                  marginTop: "500px",
                  marginLeft: "100px",
                }}
              >
                <div className="Home_Circle">
                  <img
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive/v1693672398/nextjs-boilerplate-logo_oomhza.webp"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="nodejs"
                    loading="lazy"
                  />
                  <SteamHomePage />
                </div>
              </div>

              <div>
                <div className="HomeDiv">
                  <h1>
                    <div className="animate__animated animate__bounce Animateiv0">
                      Hi there 👋
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv1">
                      I am <span>SuFiaN MusTaFa</span>
                    </div>
                    <div className="animate__animated animate__backInLeft Animateiv2">
                      Web Developer
                    </div>
                  </h1>
                  <div className="animate__animated animate__backInLeft Animateiv3">
                    <p
                      style={{
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 12px",
                      }}
                    >
                      I am <span>27 years old</span> , residing in the province
                      of <span>KPK</span> , <span>Pakistan</span>, with a strong
                      passion for <span>coding,</span> and currently a{" "}
                      <span>student</span> in my last semester of{" "}
                      <span> MCS (Computer Science)</span>.
                    </p>
                  </div>

                  <p className="animate__animated animate__backInLeft Animateiv4">
                    I am an experienced web developer with a passion for
                    creating <span> high-quality</span> ,{" "}
                    <span>user-friendly</span>, and{" "}
                    <span>responsive websites</span>. I am always improving my
                    skills to stay at the forefront of the industry. I have
                    hands-on experience in <span>backend development</span> as
                    well.
                  </p>
                  <div className="HomeInnerDiv animate__animated animate__backInLeft Animateiv5">
                    <p>
                      <span
                        style={{
                          color: "white",
                          textShadow: "1px 1px black",
                        }}
                      >
                        Some of the web technologies <br></br> i mostly used
                        are:
                      </span>{" "}
                    </p>
                    <div className="animate__animated animate__backInLeft Animateiv6">
                      <div>
                        <p>
                          {/* <ReactRota
                            items={[
                              " React Bootstrap",

                              " MaterialUI (React)  ",
                              " NextJS (ReactJS)",

                              " AOS (animate on scroll) ",

                              " Animate.css",

                              " Sanity IO",
                              " NodeJS",
                              " MogoDB",
                              " ExpressJS",

                              " FramerMotion",
                            ]}
                          /> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="animate__animated animate__lightSpeedInRight  Animateiv7">
                    {/* {showComponent ? (
                      <b className="glow-text">Now scroll down </b>
                    ) : ( */}
                    <>
                      <p
                        className="glow-text"
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "12px",
                        }}
                      >
                        {" "}
                        Looking to discover my background, work and technical
                        abilities <span>?</span>
                      </p>
                    </>
                    {/* )} */}
                    <br />

                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "20px",
                      }}
                    >
                      {/* {showComponent ? "Or Click to hide" : "Click to Explore "} */}
                    </span>
                    <ArrowForwardOutlinedIcon />

                    <button
                      animate={{
                        y: [-10, 10],
                      }}
                      transition={{
                        ease: "linear",
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        backgroundColor: "none",
                        borderColor: "transparent",
                        marginRight: "50px",
                      }}
                      //   onClick={handleClick}
                      className="cursorp"
                    >
                      <MouseOutlinedIcon
                        // onClick={handleClick}
                        className="cursorp"
                        style={button}
                      />
                    </button>
                    <div
                      className="Homeresume animate__animated animate__backInRight"
                      style={{
                        // display: showComponent ? "inline-block" : "none",
                        marginBottom: "20px",
                        marginRight: "50px",
                      }}
                    >
                      <span>Or download My </span> <PictureAsPdfIcon />
                      <span>Resume</span>
                      <a
                        // href={Resume} // Use the imported Resume as the href // Replace with the actual path to your PDF file
                        download="sufi.pdf" // Specify the desired downloaded file name
                      >
                        <button
                          animate={{
                            y: [-9, 9],
                          }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            backgroundColor: "none",
                            borderColor: "transparent",
                          }}
                          className="cursorp"
                        >
                          <FileDownloadOutlinedIcon
                            style={button}
                            className="cursorp"
                          />
                        </button>
                      </a>
                    </div>
                    <div
                      className="Homeresume animate__animated animate__backInRight"
                      style={
                        {
                          // display: showComponent ? "inline-block" : "none",
                        }
                      }
                    >
                      <span>Or Email ME </span>
                      &nbsp;
                      <a
                        href="mailto:sufianmustafa0900@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          animate={{
                            y: [-9, 9],
                          }}
                          transition={{
                            ease: "linear",
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          style={{
                            cursor: "pointer",
                            background: "none",
                            backgroundColor: "none",
                            borderColor: "transparent",
                          }}
                          className="cursorp"
                        >
                          <EmailOutlinedIcon
                            style={button}
                            className="cursorp"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <SvgHomePage />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
