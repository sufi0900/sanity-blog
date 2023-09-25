import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { urlFor } from "@/app/lib/sanityImageUrl";

import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { motion } from "framer-motion";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Card } from "@mui/material";

export default function RecipeReviewCard({ postimg, title, slug }) {
  const h5 = {
    color: "black",
    textDecoration: "underline",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
      transform: "translateZ(50px)",
    },
  };

  return (
    <>
      <Grid
        item
        lg={4}
        sm={6}
        xl={3}
        md={4}
        xs={12}
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Card className="BlogCard ProjectCard item">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                S
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <div style={{ display: "inline-block" }}>
                <h1 style={{ fontSize: "22px", margin: 0 }}>Sufian Mustafa</h1>
              </div>
            }
          />
          {/* <p> {date}</p> */}
          <div className="CardHeading">
            {" "}
            <h1 style={{ left: "0%", fontSize: "22px" }}> {title} </h1>
          </div>

          <figure
            className="imghvr-push-right"
            style={{ borderRadius: "20px" }}
          >
            <img
              src={urlFor(postimg).url()}
              alt="blogImg"
              style={{
                height: "250px",
                width: "97%",
                borderRadius: "20px",
              }}
            />

            <figcaption
              style={{
                backgroundColor: "white",
                color: "black",
                overflowX: "auto",
              }}
            >
              <div className="BlogP"></div>
              <div>
                <CardActions disableSpacing>
                  <IconButton>
                    {/* <Link href={`/post/${slug.current}`} className="themecard">
                      {" "}
                      <Typography style={{ color: "blue", fontSize: "17px" }}>
                        Read More..
                      </Typography>
                    </Link> */}
                  </IconButton>
                </CardActions>
              </div>
            </figcaption>
          </figure>

          <br></br>
          <br></br>

          <h1>
            <Link href={`/post/${slug.current}`} className="themecard">
              <Typography
                variant="h5"
                sx={h5}
                className="custom-input-color themecard"
              >
                Read More..
              </Typography>
            </Link>
          </h1>

          <Divider />
          <br></br>
        </Card>
      </Grid>
    </>
  );
}
