import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useTranslation} from "next-i18next";

const ServiceCard = ({ title, description, image, imageAlt, link }) => {
  const classes = useStyles({ itHasLink: !!link });
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            width={'100%'}
            height={'100%'}
            alt={imageAlt || title}
            sx={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </CardActionArea>
        <CardContent className={classes.container}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography
            sx={{
              paddingTop: 2,
              fontSize: 19,
              fontWeight: 500,
              textAlign: 'center',
              color: '#DDD',
            }}
          >
            {description}
          </Typography>
          {/*<div style={{ flexGrow: 1 }}/>*/}
          {/*<Box sx={{ display: 'grid', placeItems: 'center' }}>*/}
          {/*    <Button variant={'outlined'} color={'secondary'}>*/}
          {/*      Let's schedule a meet!*/}
          {/*    </Button>*/}
          {/*</Box>*/}
        </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ itHasLink }) => ({
    height: 570,
    display: 'grid',
    gridTemplateRows: itHasLink ? '45% 47% 8%' : '45% 55%',

    margin: theme.spacing(3, 0, 0, 0),
    borderRadius: 20,
    backgroundColor: 'rgba(17, 28, 69, 1)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 16px 32px rgba(10,10,10,0.5)',
    },
  }),
  container: {
    padding: theme.spacing(2, 3),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    color: theme.palette.common.white,
    textShadow: '0 1px 3px rgba(0,0,0,0.5)',
    textAlign: 'center'
  },
  description: {
    color: theme.palette.grey[300],
    fontWeight: 400,
    paddingTop: theme.spacing(1),
  },
}));

export default ServiceCard;