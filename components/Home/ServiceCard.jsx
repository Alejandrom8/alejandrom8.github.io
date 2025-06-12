import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useTranslation} from "react-i18next";

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
            sx={{ borderRadius: '0 0 20px 20px', objectFit: 'cover' }}
          />
        </CardActionArea>
        <CardContent className={classes.container}>
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
        {
          !!link && (
            <CardActions sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', justifyContent: 'center' }}>
              <Button
                variant={'text'}
                sx={{ textTransform: 'none' }}
                color={'secondary'}
              >
                {t('serviceCard.moreTitle')}
              </Button>
            </CardActions>
          )
        }
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ itHasLink }) => ({
    height: 500,
    display: 'grid',
    gridTemplateRows: itHasLink ? '45% 47% 8%' : '45% 55%',

    margin: theme.spacing(3, 0, 0, 0),
    borderRadius: 20,
    backgroundColor: '#111c45',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 0,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 16px 32px rgba(10,10,10,0.5)',
    },
  }),
  container: {
    padding: theme.spacing(2, 3),
    textAlign: 'left',
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