import React, {useRef} from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

const ServiceCardCarousel = ({ items }) => {
  const sliderRef = useRef();

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'visible', // 👈 importante para que se vean fuera
        mt: 3,
        px: 1, // espacio para que las tarjetas no choquen con los botones
      }}
    >
      {/* Botón izquierdo */}
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Botón derecho */}
      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(50%, -50%)',
          zIndex: 2,
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Slider */}
      <Slider
        ref={sliderRef}
        dots={true}
        arrows={false}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}
      >
        {items.map((ItemComponent, index) => (
          <Box key={index} sx={{ px: 2, width: '100%' }}>
            {ItemComponent}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ServiceCardCarousel;
