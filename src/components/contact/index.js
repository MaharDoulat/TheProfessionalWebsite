import React from "react";
import { Container } from "@mui/material";
import "./contact.css";
import CircleDoulatIMage from "./cartoonize_Untitled_design__1_.png"
import { useNavigate } from "react-router-dom";
const ContactSection = () => {
  
 
  return (
  
    <Container maxWidth="lg" sx={{ marginTop: "250px" }}>
      <div id="ContactMaindiv">
        <h1 id="feelfreetocontactme">Feel free to contact me!</h1>
        <div id="Imagecontactsection">
          <img id="ContactImageFree" src={CircleDoulatIMage} alt="Image"/>
        </div>
        <div id="mainSocialIconsDiv">
          <a href="https://twitter.com/doulat_mahar" target="_blank">

          <i class="fa-brands ContactSocialIcons fa-square-x-twitter fa-2xl" ></i>
          </a>
          <a href="https://www.linkedin.com/in/doulat-mahar-61569a289/" target="_blank">

          <i class="fa-brands ContactSocialIcons fa-linkedin fa-2xl"></i>
          </a>
          <a href="https://github.com/MaharDoulat" target="_blank">
            
          <i class="fa-brands ContactSocialIcons fa-square-github fa-2xl"></i>
            </a>
          </div>

      </div>
    </Container>
  );
};

export default ContactSection;
