import { client } from "@/app/lib/sanity";
import React from "react";
import { urlFor } from "@/app/lib/sanityImageUrl";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
// import Skillcard from "./SkillCardDetail";
import AOS from "aos";
import "aos/dist/aos.css";

import Typography from "@mui/material/Typography";

import "animate.css/animate.min.css";

import Divider from "@mui/material/Divider";
import { PortableText } from "@portabletext/react";

async function getData(slug) {
  const query = `*[_type == "skill" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({ params }) {
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  ></link>;
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

  return (
    <div style={{ marginTop: "60px" }}>
      <>
        <style type="text/css">
          {`   
  
  .progress-bar{  background-color:  rgba(78, 78, 246, 0.647); 
    font-size:17px;
  color:black; }
  .progress{
    background-color: rgba(247, 90, 216, 0.696);
  }
  
  
  }
  
  `}
        </style>
      </>
      <br></br>
      <br></br>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11}>
          <div className="moreproject item About3">
            <h1>{data.title}</h1>
            <br />
            <div className="flex">{/* <Skillcard /> */}</div>
            <ListItem
              style={{
                width: "90%",
                position: "relative",
                left: "5%",

                textAlign: "center",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  style={{
                    height: "60px",
                    width: "60px",
                    background: "none",
                  }}
                >
                  <img
                    className="i-swing"
                    src={urlFor(data.skillimg).url()}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Avatar>
              </ListItemAvatar>
              <div className="progress" style={{ width: "100%" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${data.percentage}%` }}
                >
                  <span className="progress-label-color">{`${data.percentage}%`}</span>
                </div>
              </div>
              {/* <ProgressBar
                  animated
                  now={skill.percentage}
                  style={progress}
                  label={
                    <span className="progress-label-color">{`${skill.percentage}%`}</span>
                  } // Apply the class to the label
                /> */}
            </ListItem>
            <br></br>
            <div className="About3">
              <PortableText
                data-aos="zoom-in"
                data-aos-duration="800"
                value={data.content}
                components={PortableTextComponent}
              />
            </div>
            <br></br>
          </div>
        </Grid>
      </Grid>{" "}
      <br></br>
      <br></br>
    </div>
  );
}
