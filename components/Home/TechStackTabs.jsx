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
];

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
                    skills.map((skill, index) => (
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
    </>;
};