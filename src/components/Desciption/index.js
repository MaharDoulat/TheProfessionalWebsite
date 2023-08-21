import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { createRoot } from "react-dom/client";
import "./description.css";
import Container from "@mui/material/Container";
import Myimage from "./cartoonize_Untitled_design__1_.png";
import { useRef } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Desciptionsection = () => {

  return (
    <Container maxWidth="xxl" id="ConatinerOfDescription">
      <Container maxWidth="xl">
      <Grid container>
        <Grid xs={12} lg={6}>
          <div id="DesciprtionMainDIv">
            <h1 className="DescriptionWelcome">Welcome to my world</h1>
            <h1 className="DescrptionMainText">
              Hi, I'm{" "}
              <span className="DescrptionMainTextSpan">Doulat Mahar</span>
            </h1>
            <h1
              className="DescrptionMainProfession"
              id="DescrptionMainProfession"
            >
              a Developer 
            </h1>
            <p id="DescrptionParagraph">
              I am a highly skilled and experienced web developer and social
              media marketer with over 3 years of experience. I have got huge
              success in this field with vast experience of creating best
              designed Websites. Have expertise in developing websites using the
              languages such as HTML, CSS, JavaScript, Bootstrap, Firebase and
              React Js.
            </p>
            <p id="DescrptionParagraph">
              As a social media Marketing Manager, I will generate lead for your
              bussiness and brand awareness growth. Working on all social media
              platforms including Youtube, Facebook, Twitter, Instagram,
              LinkedIn, and TikTok. Also managing Youtube account for organic
              growth of Channel.
            </p>
          </div>
        </Grid>
        <Grid xs={12} lg={6}>
          <div id="DesciprtionImageDIv">
            <img alt="Image" id="ImageDescription" src={Myimage} />
          </div>
        </Grid>
      </Grid>
      </Container>
    </Container>
  );
};

export default Desciptionsection;
