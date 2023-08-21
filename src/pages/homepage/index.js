import React from "react";
import { ResponsiveAppBar ,Desciptionsection,SkillsSection,SkillsList,ContactSection} from "../../components"; 
let Homepage=()=>{
return(
 <div>
   <ResponsiveAppBar/>
   <Desciptionsection/>
   <SkillsSection/>
   <SkillsList/>
   <ContactSection/>
 </div>   
)
}
export default Homepage