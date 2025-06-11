import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const ServiceCard = ({ title, description, image, SectionIcon, imageAlt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={imageAlt || title}
          sx={{ borderRadius: '0 0 25px 25px', objectFit: 'cover' }}
        />
        <CardContent className={classes.container}>
          {SectionIcon && (
            <Box
              sx={{
                width: '100%',
                height: 150,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <SectionIcon fontSize="large" color="secondary" />
            </Box>
          )}

          <Typography variant="h5" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography
            sx={{
              paddingTop: 2,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: '#DDD',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 450,
    minHeight: '65vh',
    margin: theme.spacing(3, 0, 0, 0),
    borderRadius: 20,
    backgroundColor: '#111c45',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 0,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.5)',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 250,
    },
  },
  container: {
    padding: theme.spacing(3),
    textAlign: 'left',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white,
    textShadow: '0 1px 3px rgba(0,0,0,0.5)',
  },
  description: {
    color: theme.palette.grey[300],
    fontWeight: 400,
    lineHeight: 1.6,
    paddingTop: theme.spacing(1),
  },
}));

export default ServiceCard;