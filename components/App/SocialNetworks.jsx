import {Box, IconButton, Tooltip} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialNetworks = [
  {
    name: 'Linkedin',
    icon: <LinkedInIcon/>,
    link: 'https://www.linkedin.com/in/alejandro-gomez-dev'
  },
  {
    name: 'Github',
    icon: <GitHubIcon />,
    link: 'https://github.com/Alejandrom8'
  }
];

export default function SocialNetworks() {
  return socialNetworks.map(({ icon, name, link }) => (
    <Tooltip key={name} title={name}>
      <Box
        sx={{ mr: 1, color: 'white', display: 'block' }}
      >
        <IconButton onClick={() => window.open(link)}>
          {icon}
        </IconButton>
      </Box>
    </Tooltip>
  ))
}