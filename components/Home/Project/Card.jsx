import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useTranslation} from "next-i18next";
import React from "react";
import 'next-cloudinary/dist/cld-video-player.css';
import MediaExplorer from "./MediaExplorer";

const ProjectCard = ({ title, description, projectMediaId = 'astro', link }) => {
  const classes = useStyles({ itHasLink: !!link });
  const { t } = useTranslation();

  return (
    <Card className={classes.rootProjectCard}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <MediaExplorer projectId={projectMediaId} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={5} pt={2}>
              <Typography variant="h4" gutterBottom className={classes.title}>
                {title}
              </Typography>
              <Typography className={classes.description}>
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  rootProjectCard: ({ itHasLink }) => ({
    height: 600,
    borderRadius: 20,
    backgroundColor: 'rgba(17, 28, 69, 0.7)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }),
  container: {
    padding: 0,
    margin: 0,
    height: '100%',
    textAlign: 'left',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white,
  },
  description: {
    textAlign: 'justify',
    paddingTop: 4,
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#DDD',
  },
}));

export default ProjectCard;