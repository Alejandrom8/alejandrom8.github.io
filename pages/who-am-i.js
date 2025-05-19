import {Container, Grid, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

export default function WhOIAmPage() {
  const classes = useStyles();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - 1999;

  return <>
    <main className={classes.main}>
      <Toolbar />
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <img
              width={'100%'}
              src={'/me_airplane.jpeg'}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant={'h3'}>
              Hola, mi nombre es Alejandro Gómez, nací en Junio de 1999, y así es, tengo {age} años. <br />
              Nací crecí y me desarrolle en la gigantesca Ciudad de México, una ciudad ruidosa, llena de gente y algo contaminada, pero también llena de amigos, familia,
              naturaleza, actividades y sobre todo, oportunidades para la gente que sabe buscarlas.<br/><br/>
              Desde que tengo memoria me gusta construir cosas, empecé a hacer torres con mis juguetes a los 6 años y a los 8 a construir Legos.
              Estos bloques marcaron mi vida para siempre, me enseñaron que si sabes seguir un manual, tienes un poco de creatividad y una pizca
              de lógica, puedes construir lo que sea!
              A los 16 años encontré mi pasión por la programación gracias a la carrera técnica en computación de mi Escuela Nacional Preparatoria N° 8 de la UNAM,
              Entré por curiosidad y recomendación de una amiga, pero permanecí porque encontré la misma pasión que tuve por los Legos cuando era pequeño.
              Cuando descubrí las posiblidades que habían detrás de unas cuantas palabras de lenguaje lógico quede encantado y maravillado, no podía
              creer lo fácil que sería hacer un impacto en las personas, en los negocios y en el mundo escribiendo solo unas cuantas palabras.
              No podía parar de aprender cosas nuevas relacionadas a la programación, devoraba lenguajes de programación, implementaba frameworks
              en proyectos personales y tomaba todos los cursos que podía.
              PHP fue mi primer lenguaje de programación seguido de C, Java y JavaScript.
              Al terminar mi carrera técnica en computación realice mi servicio social en mi preparatoria, tenía la ambición de reconstruir el sitio web de mi prepa,
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  </>
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#fb5607',
    color: '#333',
    minHeight: '100vh',
  },
  container: {
    paddingTop: theme.spacing(10),
  }
}));