"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import AOS from "aos";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import { Home } from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook

import CssBaseline from "@mui/material/CssBaseline";

function HideOnScroll(props) {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const tripleClickThreshold = 500;
  const clickCountRef = React.useRef(0);
  const lastClickTimeRef = React.useRef(0);

  // Function to open the avatar menu

  const handleOpenAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };
  const [selectedItem, setSelectedState] = useState(null);
  const [isSecondListOpen, setIsSecondListOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setSelectedState(null); // Use the setSelectedState function correctly
    setIsSecondListOpen(false);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="cursorp"
              >
                <Avatar
                  alt="logo lg"
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  className="cursorp Tab8 animate__animated animate__backInLeft"
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar-nav"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                ></Menu>
              </Box>

              {/* <AdbIcon  /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {" "}
                <Avatar
                  alt="logo"
                  src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.preserve_transparency.progressive.sprite/v1693672396/logo_1_lk0neo.webp"
                  sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {isMatch ? (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <>
                    <Tabs centered sx={{ margin: "auto" }}>
                      <Tab
                        value="one"
                        label={
                          <span>
                            <Home /> Home
                          </span>
                        }
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        className="Tab1 animate__animated animate__zoomIn"
                      />
                      <Link href="/about">
                        <Tab
                          value="two"
                          label={
                            <span>
                              <InfoIcon /> About
                            </span>
                          }
                          // onClick={aboutb}
                          className="Tab2 animate__animated animate__zoomIn"
                        />
                      </Link>
                      <Link href="/skills">
                        <Tab
                          value="three"
                          label={
                            <span>
                              <ManageAccountsIcon /> Skills
                            </span>
                          }
                          //   onClick={() => {
                          //     skillb();
                          //   }}
                          className="Tab4 animate__animated animate__zoomIn"
                        />
                      </Link>
                      <Link href="/project">
                        <Tab
                          value="three"
                          label={
                            <span>
                              <TimelineIcon /> Projects
                            </span>
                          }
                          className="Tab3 animate__animated animate__zoomIn"
                        />
                      </Link>
                      <Tab
                        value="three"
                        label={
                          <span>
                            <Link href="/blog">
                              {" "}
                              <AddReactionIcon /> Blogs
                            </Link>
                          </span>
                        }
                        className="Tab5 animate__animated animate__zoomIn"
                      />
                      <Tab
                        value="three"
                        label={
                          <span>
                            <ContactMailIcon /> Contact
                          </span>
                        }
                        className="Tab6 animate__animated animate__zoomIn"
                      />

                      <Tab
                        value="four"
                        //   label={<DarkModeToggle />}
                        className="Tab6 animate__animated animate__zoomIn"
                      >
                        {/* <DarkModeToggle /> */}
                      </Tab>
                    </Tabs>
                  </>
                )}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt="sufi_sm_lg"
                      // src="https://res.cloudinary.com/dtvtphhsc/image/upload/fl_immutable_cache.lossy.preserve_transparency.progressive.sprite/v1693584686/sufi_p281ju.png"
                      className="Tab7 animate__animated animate__backInRight"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  id="menu-appbar-avatar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top", // Adjust to match the new position
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <List className="DrawerList">
                    <ListItemButton>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={"About"} />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Skill"} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <TimelineIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Projects"} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddReactionIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Blogs"} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ContactMailIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Contact"} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        //   primary={<DarkModeToggle />}
                        style={{ color: "white" }}
                      />
                    </ListItemButton>
                  </List>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
