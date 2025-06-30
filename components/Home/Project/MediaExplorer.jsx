import {Box, Grid, Stack} from "@mui/material";
import {CldImage} from "next-cloudinary";
import {makeStyles} from "@mui/styles";
import React from "react";

function getProjectMediaSrc(projectId, itemId) {
  return `${projectId}-${itemId}`;
}

const MediaExplorer = ({ projectMediaId }) => {
  const classes = useMediaExplorerStyles();
  return <Grid container direction={'column'} flexWrap={'nowrap'} sx={{ height: '100%', background: 'white' }}>
    <Grid item xs={8}>
      <Box sx={{ p: 2 }}>
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 1)}
          width="540"
          height={'445'}
          className={classes.cover}
          crop={{
            type: 'auto',
            source: true
          }}
        />
      </Box>
    </Grid>
    <Grid item xs={4}>
      <Stack direction={'row'} justifyContent={'center'} spacing={2} sx={{ p: 2, backgroundColor: '#000', height: '100%' }}>
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 1)}
          width="120"
          height="90"
          className={classes.cover}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 2)}
          width="120"
          height="90"
          className={classes.cover}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 3)}
          width="120"
          height="90"
          className={classes.cover}
          crop={{
            type: 'auto',
            source: true
          }}
        />
        <CldImage
          src={getProjectMediaSrc(projectMediaId, 4)}
          width="120"
          height="90"
          className={classes.cover}
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

}));

export default MediaExplorer;