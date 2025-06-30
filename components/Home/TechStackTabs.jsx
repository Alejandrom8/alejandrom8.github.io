import {Box, Tabs, Tab, Typography, Grid, Toolbar, Chip, Stack} from "@mui/material";
import StackIcon from "tech-stack-icons";
import React from "react";

const categories = [
  "frontend", "backend",
];

const skills = [
    { name: "reactjs", displayName: "React.js", category: "frontend" },
    { name: "redux", displayName: "Redux", category: "frontend" },
    { name: "typescript", displayName: "TypeScript", category: "frontend" },
    { name: "css3", displayName: "CSS", category: "frontend" },
    { name: "html5", displayName: "HTML", category: "frontend" },
    { name: "playwright", displayName: "Playwright", category: "frontend" },
    { name: "cypress", displayName: "Cypress", category: "frontend" },
    { name: "js", displayName: "JavaScript", category: "backend" },
    { name: "graphql", displayName: "GraphQL", category: "backend" },
    { name: "mysql", displayName: "MySQL", category: "backend" },
    { name: "python", displayName: "Python", category: "backend" },
    { name: "mongodb", displayName: "MongoDB", category: "backend" },
    { name: "redis", displayName: "Redis", category: "backend" },
    { name: "aws", displayName: "AWS", category: "backend" },
    { name: "elastic", displayName: "Elastic", category: "backend" },
    { name: "datadog", displayName: "DataDog", category: "backend" },
    { name: "git", displayName: "Git", category: "backend" },
    { name: "bash", displayName: "Bash", category: "backend" },
    { name: "nextjs2", displayName: "Next.js", category: "backend" },
    { name: "php", displayName: "PHP", category: "backend" },
    { name: "swift", displayName: "Swift", category: "backend" },
    { name: "electron", displayName: "Electron.js", category: "backend" },
];

const more = [
  { name: "digitalocean", displayName: "DigitalOcean", category: "backend" },
  { name: "docker", displayName: "Docker", category: "backend" },
  { name: "figma", displayName: "Figma", category: "backend" },
  { name: "flask", displayName: "Flask", category: "backend" },
  { name: "go", displayName: "Go", category: "backend" },
  { name: "ionic", displayName: "Iconic", category: "backend" },
  { name: "sass", displayName: "Sass", category: "backend" },
  { name: "postman", displayName: "Postman", category: "backend" },
  { name: "nodejs", displayName: "Node.js", category: "backend" },
  { name: "materialui", displayName: "MUI 5", category: "backend" },
  { name: "java", displayName: "Java", category: "backend" },
  { name: "jest", displayName: "Jest", category: "backend" },
];

function SkillCard ({ skill }) {
    return  <Box
      sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '18px',
          width: '220px',
          height: '80px',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          transition: 'all 0.3s ease',
          userSelect: 'none',
          color: '#BBB',
          margin: 2,
          '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.2)',
              boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
              cursor: 'pointer',
              color: '#fff'
          }
      }}
    >
        <Box marginRight={'30px'}>
            <StackIcon name={skill.name} style={{ width: '40px', height: '40px' }}/>
        </Box>
        <Typography color={'inherit'} fontSize={'15px'} fontWeight={'bold'}>{skill.displayName}</Typography>
    </Box>
}

// export default function TechStackTabs() {
//     return <>
//         <Box sx={{
//             width: '100%',
//             backgroundColor: 'transparent',
//             borderRadius: '28px',
//             // borderTopLeftRadius: 0, borderTopRightRadius: 0
//         }}>
//             <Marquee direction="left" speed={40}>
//                 {
//                     skills.sort((a, b) => {
//                         if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//                         if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//                         return 0;
//                     }).map((skill, index) => (
//                         <SkillCard key={index} skill={skill} />
//                     ))
//                 }
//             </Marquee>
//           <Marquee direction="right" speed={40}>
//             {
//               skills.sort((a, b) => {
//                 if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//                 if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//                 return 0;
//               }).map((skill, index) => (
//                 <SkillCard key={index} skill={skill} />
//               ))
//             }
//           </Marquee>
//           <Marquee direction="left" speed={40}>
//             {
//               skills.sort((a, b) => {
//                 if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
//                 if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
//                 return 0;
//               }).map((skill, index) => (
//                 <SkillCard key={index} skill={skill} />
//               ))
//             }
//           </Marquee>
//         </Box>
//     </>;
// };

export default function TechStackTabs() {
  return <>
    <Box sx={{
      width: '100%',
      backgroundColor: 'transparent',
      borderRadius: '28px',
      // borderTopLeftRadius: 0, borderTopRightRadius: 0
    }}>
      <Grid container sx={{ width: '100%', marginTop: '2vh' }} justifyContent={'center'} spacing={3}>
        {
          skills.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
          }).map((skill, index) => (
            <Grid item xs={6} md={2} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 2,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  width: '240px',
                  height: '80px',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  userSelect: 'none',
                  color: '#BBB',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
                    cursor: 'pointer',
                    color: '#fff'
                  }
                }}
              >
                <Box marginRight={'20px'}>
                  <StackIcon name={skill.name} style={{ width: '40px', height: '40px' }}/>
                </Box>
                <Typography color={'inherit'} fontSize={'14px'} fontWeight={'bold'}>{skill.displayName}</Typography>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  </>
}