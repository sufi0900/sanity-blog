import React from "react";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}
export default async function AllBlogs() {
  const data = await getData();
  return (
    <div>
      <br></br>
      <br></br>
      <div className="about41" style={{ marginTop: "60px" }}>
        <h3>
          My Blogs
          <span
            style={{
              float: "right",
              marginTop: "5px",
            }}
            className="searchicon0"
          >
            {" "}
          </span>
        </h3>
      </div>
      <div>
        <br></br>
        <br></br>
        <div>
          <div>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {data.map((post) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </Grid>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
