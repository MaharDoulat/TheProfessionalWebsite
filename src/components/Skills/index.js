import React from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./skillsSec.css" ;
import Grid from '@mui/material/Unstable_Grid2';
// images imported
import webdesign from "./responsive.png"
import webdevelopment from "./app-development.png"
import socialmediamarketing from "./digital-marketing.png"
import database from "./database.png"
import Framework from "./library.png"
import github from "./github.png"
// images imported end
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const SkillsList = () => {
  return (
    <Container maxWidth="xxl" id="SkillsConatinerwhitewave">
    <Container maxWidth="lg" sx={{marginTop:"300px"}} >
  <div>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid md={12} xs={12} sm={12}>
          <h1 id="ProfessionalSkills">
 
          Professional Skills
          </h1>
        </Grid>
        <Grid   md={4} xs={12} sm={6}>
         <div className="CardsSkillMain" >
          <img src={webdesign} className="SkillsListImages"/>
          <h1 className="SkillsListHeadings">Web Design</h1>
          <h1 className="SkillsListParagraph">
            I have great experience in creating visually appealing designs for your website with best web design principles and best practices.
          </h1>
         </div>
        </Grid>
        <Grid    md={4} xs={12} sm={6}>
        <div className="CardsSkillMain">
        <img src={webdevelopment} className="SkillsListImages"/>
        <h1 className="SkillsListHeadings">Web Development</h1>
        <h1 className="SkillsListParagraph">I have 3+ years experience in web development. I am conversant with HTML, CSS, Javascript, React Js. I have extensive websites for clientele, including bussiness, organization and etc.</h1>

        </div>
        </Grid>
        <Grid    md={4} xs={12} sm={6}>
        <div className="CardsSkillMain">
        <img src={socialmediamarketing} className="SkillsListImages"/>
        <h1 className="SkillsListHeadings">Social Media Marketing</h1>
        <h1 className="SkillsListParagraph">I am a strategic and results-oriented social media marketer with a deep understanding of the social media landscape. Increasing brand awareness, engagement, and conversions. Promoting and monetizing youtube channels. </h1>

        </div>
        </Grid>
        <Grid    md={4} xs={12} sm={6}>
        <div className="CardsSkillMain">
        <img src={Framework} className="SkillsListImages"/>
        <h1 className="SkillsListHeadings">Framework</h1>
        <h1 className="SkillsListParagraph">I have huge experience of working on Front end Frameworks such as React js, Bootstrap, Material UI, jQuery etc.</h1>

        </div>
        </Grid>
        <Grid    md={4} xs={12} sm={6}>
        <div className="CardsSkillMain">
        <img src={database} className="SkillsListImages"/>
        <h1 className="SkillsListHeadings">Firebase</h1>
        <h1 className="SkillsListParagraph">
          I have worked on firebase for databases, services, authentication, and integration for a variety of applications.
        </h1>

        </div>
        </Grid>
       
        <Grid    md={4} xs={12} sm={6}>
        <div className="CardsSkillMain">
        <img src={github} sx={{width:"10px"}} className="SkillsListImages"/>
        <h1 className="SkillsListHeadings">Github</h1>
        <h1 className="SkillsListParagraph">
          I have expertise in using Github for the collaboration and Code Hosting. 
        </h1>

        </div>
        </Grid>
      </Grid>
    </Box>
  </div>
    </Container>
    </Container>
  );
};

export default SkillsList;
