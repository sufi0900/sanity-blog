import React from "react";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
async function getData() {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query);

  return data;
}
export default async function ProjectAll() {
  const data = await getData();
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="about41" style={{ marginTop: "90px" }}>
        <h3>
          My projects
          <span
            style={{
              float: "right",
              marginTop: "5px",
            }}
            className="searchicon0"
          ></span>
        </h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div>
          <Grid container spacing={2} className="flex">
            <div className="About3" style={{ width: "90%" }}>
              <p>
                I am actively working on several projects in development on my
                local computer, which are currently in the final stages of
                development. While they have not yet been deployed to
                production, I have plans to carefully prepare and upload each
                project in the near future. As they reach completion, I will
                showcase them in the project sections.
              </p>
            </div>
            {data.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </Grid>
          <br />
          <div className="about41">
            <p style={{ fontSize: "20px" }}>
              More proJects coming soon IN SHAA ALLAH...{" "}
            </p>
            <img
              src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.progressive/v1694015121/Screenshot_190_oaffgj.png"
              alt="img"
              style={{
                width: "90%",
                height: "auto",
                border: "2px solid white",
                borderRadius: "10px",
              }}
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
