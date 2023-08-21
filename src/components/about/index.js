import React from "react";
import "./skills.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from "@mui/material";
import MycartoonImageSkills from "./cartoonize_Untitled_design__1_.png"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SkillsSection=()=>{
return(
    <Container maxWidth="lg">
    <div>
        
          <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{marginTop:"100px"}}>
        <Grid xs={12} lg={4}>
        <div id="SkillsImageDIv">
            <img alt="Image" id="ImageSkills" src={MycartoonImageSkills} />
          </div>
        </Grid>
        <Grid xs={12} lg={8}>
        <div id="SkillsMainDIv">
            <h1 className="AboutUs"> 
                About me
            </h1>
            <h1 id="SkillsHireMe">
                Why to Hire me for your next project?
            </h1>
            <h1 className="AboutUsProfession"> 
               Web Developer & Social Media Marketer
            </h1>
            <h1 id="WhyHireMePara">
            I have 3+ years of experience in web development. I am proficient in HTML, CSS, JavaScript, React Js and other libraries. I am a great communicator and I am able to work effectively with clients to understand their needs and deliver a website that meets their expectations.
            </h1>
            <div>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        // spacing={2}
        id="StacKAbout"
      >
        <Item sx={{boxShadow:"none",minWidth:"22%", textAlign:"left"}}><span className="StackNamesSpan">Name :</span> <span className="StackNamesSpanValue">Doulat Mahar</span></Item>
        <Item sx={{boxShadow:"none",minWidth:"22%", textAlign:"left"}}><span className="StackNamesSpan">Language :</span>  <span className="StackNamesSpanValue">English, German, French, Spanish</span></Item>
        <Item sx={{boxShadow:"none",minWidth:"22%", textAlign:"left"}}><span className="StackNamesSpan">Address :</span>  <span className="StackNamesSpanValue">Mithi, Pakistan</span></Item>
        <Item sx={{boxShadow:"none",minWidth:"22%" , textAlign:"left"}}><span className="StackNamesSpan">Email :</span> <span className="StackNamesSpanValue">doulatsingh960@gmail.com</span></Item>
      </Stack>
    
    </div>
            </div>

        </Grid>
      
      </Grid>
    </Box>
    </div>
    </Container>
)
}

export default SkillsSection