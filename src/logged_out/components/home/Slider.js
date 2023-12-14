import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import Grid from '@mui/material/Grid';
import CheckIcon from "@mui/icons-material/Check";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import GradientCover from "../../../shared/components/SlideImage";
import ScrollCarousel from 'scroll-carousel-react';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

const styles = (theme) => ({
    centerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
      
    centeredImage: {
        // maxWidth: "75%", /* Ensure the image doesn't exceed its container */
        // maxHeight: "75%", /* Ensure the image doesn't exceed its container */
    },
    title: {
      color: theme.palette.primary.main,
    },
});

const Slider = (props) => {
    const { classes, theme, title, pricing, features, highlighted } = props;
    const yourArrayOfComponents = [
        <GradientCover name="Two bedroom 690 sq. ft." img="outside/Back.jpg"/>,
        <GradientCover name="One bedroom 540 sq. ft." img="outside/Front.jpg"/>,
        <GradientCover name="Two bedroom 690 sq. ft." img="outside/Pacific_Rush_Exterior.jpg"/>,
        <GradientCover name="Studio 420 sq. ft." img="outside/Pine_Exterior.jpg"/>,
        <GradientCover name="One bedroom 540 sq. ft." img="outside/Stratford_Exterior.jpg"/>,
        // Add more components as needed
      ];
  
    return (
            <>
            <div style={{paddingTop: 100, paddingBottom:50, marginTop: 50}}>
              <Typography variant="h1" style={{color: '#666666', fontFamily: "Roboto", textAlign: "center"}}>Unlock the potential of your yard.</Typography>
            </div>
              <ScrollCarousel
                autoplay
                // autoplaySpeed={8}
                // speed={7}
                smartSpeed
                onReady={() => console.log('I am ready')}
              >
                <CssVarsProvider>
                {yourArrayOfComponents.map((component) => (
                  <div className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
                    {component}
                  </div>
                ))}
                </CssVarsProvider>
              </ScrollCarousel>
            </>
          );
  };

Slider.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    highlighted: PropTypes.bool,
};
  
export default withStyles(styles, { withTheme: true })(Slider);