import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const ServiceCard = ({ title, description, image, SectionIcon }) => {
  const classes = useStyles();

  return <Card className={classes.root}>
    <CardActionArea style={{ height: '100%' }}>
      <CardContent className={classes.container}>
        {
          SectionIcon && <Box sx={{ width: '100%', height: '150px', display: 'grid', placeItems: 'center' }}>
            <Icon style={{ fontSize: 90 }}>
              <SectionIcon fontSize={'inherit'} color={'secondary'} />
            </Icon>
          </Box>
        }
        <Typography variant={'h5'} gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography sx={{ paddingTop: 2, fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#DDD' }}>
          {description}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 280 }}
        image={image}
        title="green iguana"
      />
    </CardActionArea>
  </Card>
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '450px',
    minHeight: '65vh',
    margin: theme.spacing(3),
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: '25px',
    backgroundColor: '#111c45',
    backdropFilter: 'blur(10px)',
    //border: '1px solid rgba(255, 255, 255, 0.1)',
    border: 0,
    [theme.breakpoints.down('md')]: {
      minHeight: '200px',
    }
  },
  container: {
    paddingBottom: theme.spacing(4),
    textAlign: 'left',
    height: '55%',
    padding: theme.spacing(2.5),
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  }
}));

export default ServiceCard;