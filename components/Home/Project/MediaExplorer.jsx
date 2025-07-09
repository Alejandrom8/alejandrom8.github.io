import {Box, Grid, Stack} from "@mui/material";
import {CldImage} from "next-cloudinary";
import {makeStyles} from "@mui/styles";
import React, {useState} from "react";

function getProjectMediaSrc(projectId, itemId) {
  const id = `${projectId}-${itemId}`;
  return id;
}

const MediaExplorer = ({ projectMediaId }) => {
  const classes = useMediaExplorerStyles();
  const [activeImage, setActiveImage] = useState(1);

  return <Grid container direction={'column'} flexWrap={'nowrap'} sx={{ height: '100%', background: 'white' }}>
    <Grid item xs={8}>
      <Box sx={{ p: 2 }}>
        <CldImage
          src={getProjectMediaSrc(projectMediaId, activeImage)}
          width="540"
          height={'445'}
          crop={{
            type: 'auto',
            source: true
          }}
        />
      </Box>
    </Grid>
    <Grid item xs={4}>
      <Stack direction={'row'} justifyContent={'space-evenly'} spacing={2} sx={{ p: 2, backgroundColor: '#000', height: '100%' }}>
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 1)}
          onClick={() => setActiveImage(1)}
          width="120"
          height="90"
          className={classes.miniature}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 4)}
          onClick={() => setActiveImage(4)}
          width="120"
          height="90"
          className={classes.miniature}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 2)}
          onClick={() => setActiveImage(2)}
          width="120"
          height="90"
          className={classes.miniature}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 3)}
          onClick={() => setActiveImage(3)}
          width="120"
          height="90"
          className={classes.miniature}
          crop={{
            type: 'auto',
            source: true
          }}
        />
      </Stack>
    </Grid>
  </Grid>;
};

const useMediaExplorerStyles = makeStyles((theme) => ({
  miniature: {
    border: '5px solid #fff',
    cursor: 'pointer',
  }
}));

export default MediaExplorer;