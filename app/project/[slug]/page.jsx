import React from "react";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { PortableText } from "@portabletext/react";

async function getData(slug) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export default async function ProjectCardDetail({ params }) {
  const data = await getData(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <div
          className="QuillDescription flex"
          style={{ right: "5%", position: "relative" }}
        >
          <div>
            <img
              src={urlFor(value).url()}
              alt="Image"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>
        </div>
      ),
    },
  };

  const Item = {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "80%",
    cursor: "pointer",
  };

  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <>
          <div className="About3">
            <h1>
              {" "}
              {/* <a href={Project.link} className="link" target="site">
                Visit this site
              </a>{" "} */}
            </h1>{" "}
          </div>
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "97%",
                padding: "20px",
              }}
              className="item"
            >
              <div className="ProjectTop">
                <div
                  style={{
                    width: "70%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    cursor: "pointer",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="500"
                >
                  <img
                    src={urlFor(data.projectimg1).url()}
                    alt="img not uploaded"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <br />
                <div
                  style={{
                    width: "70%",

                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                  className="ProjectTextSm"
                >
                  <span
                    className="ProjectTopTextDiv item"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <div className="About3">
                      {" "}
                      <h1 style={{ fontSize: "27px" }}> {data.title} </h1>
                    </div>

                    {data.toptext1}
                  </span>
                </div>
              </div>
            </div>
            <br />
            <br />
          </Grid>
          <br />
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "97%",
                padding: "20px",
              }}
              className="item"
            >
              <div className="ProjectTop">
                <div
                  style={{
                    width: "70%",
                    position: "relative",
                    left: "10%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    zIndex: "1",
                  }}
                >
                  <span
                    className="ProjectTopTextDiv item"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="500"
                  >
                    {data.toptext2}
                    <div className="About3">
                      {" "}
                      <h1 style={{ fontSize: "27px" }}>
                        {" "}
                        {/* <a href={Project.link} className="link" target="site">
                          Visit this site
                        </a>{" "} */}
                      </h1>
                    </div>
                  </span>
                </div>

                <br />

                <div
                  style={{
                    width: "70%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    marginRight: "80px",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <a href={urlFor(data.projectimg2).url()}>
                    <img
                      src={urlFor(data.projectimg2).url()}
                      alt="img not uploaded"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        cursor: "pointer",
                        borderRadius: "10px",

                        zIndex: "-1",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
          </Grid>
          <br />
          <br />
          <br />
          <Grid
            container
            spacing={1}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <br />
            <br />
            <br />

            <Grid item xs={11}>
              <div className="moreproject item">
                <div className="QuillDescription ">
                  <h1> More About this Project </h1>
                  <div
                    className="PrjectsDescription QuillDescription"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <PortableText
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      value={data.content}
                      components={PortableTextComponent}
                    />
                  </div>
                </div>

                <br />

                <Divider />
                <br />
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="QuillDescription"
                    style={{ right: "5%", position: "relative" }}
                  >
                    <div>
                      <img
                        src={Project.imageFile2}
                        alt="img not uploaded"
                        style={imgStyle}
                      />
                    </div>
                  </div>
                </div> */}

                <br></br>
              </div>
              <br />
            </Grid>
          </Grid>{" "}
        </>
      </div>
    </>
  );
}
