import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState } from "react";
import Desciptionsection from "../Desciption";
import "./navbar.css";
import DoulatmaharImage from "./cartoonize_Untitled_design__1_.png";
const pages = ["About", "Skills", "Portfolio", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const ref = useRef(null);
  const handleClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <Container maxWidth="xxl" >
      <Container maxWidth="xl" >
      <AppBar position="static" sx={{ backgroundColor: "white",border:"none",boxShadow:"none",padding:"0px 30px 0px 30px" }}>
        {/* <Container maxWidth="xl"> */}
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 10 }}>
              <Tooltip>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={DoulatmaharImage} />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                 
                    className="PagesInNav"
                    textAlign="center"
                  ></Typography>
                 
                  
                   <button className="ButtonsOfNavRES">
              <a href="#SkillsMainDIv" className="PagesInNavRES">About</a>

              </button>
              <button className="ButtonsOfNavRES">
              <a  href="#ProfessionalSkills" className="PagesInNavRES">Skills</a>

              </button>
              <button className="ButtonsOfNavRES">
              <a href="#ContactMaindiv" className="PagesInNavRES">Contact</a>

              </button>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        
              <button className="ButtonsOfNav">
              <a href="#SkillsMainDIv" className="PagesInNav">About</a>

              </button>
              <button className="ButtonsOfNav">
              <a   href="#ProfessionalSkills" className="PagesInNav">Skills</a>

              </button>
              <button className="ButtonsOfNav">
              <a href="#ContactMaindiv" className="PagesInNav">Contact</a>

              </button>
            </Box>
          </Toolbar>
        {/* </Container> */}
      </AppBar>
      </Container>
    </Container>
  );
}
export default ResponsiveAppBar;
