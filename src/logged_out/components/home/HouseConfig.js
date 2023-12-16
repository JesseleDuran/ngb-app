import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import Grid from '@mui/material/Grid';
import CheckIcon from "@mui/icons-material/Check";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ImgButton from "../../../shared/components/ImgButton";

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

const ImageConfigurator = (props) => {
    const { classes, theme, title, pricing, features, highlighted } = props;

    const [selectedKitchen, setSelectedKitchen] = useState('1');
    const [selectedWall, setSelectedWall] = useState('1');
    const [selectedFloor, setSelectedFloor] = useState('1');
    const [selectedWindow, setSelectedWindow] = useState('1');
  
    const handleKitchenChange = (kitchen) => {
      setSelectedKitchen(kitchen);
    };
  
    const handleWallChange = (wall) => {
      setSelectedWall(wall);
    };

    const handleFloorChange = (floor) => {
        setSelectedFloor(floor);
    };

    const handleWindowChange = (window) => {
        setSelectedWindow(window);
    };  
  
    return (
      <div style={{color: '#666666', fontFamily: "Roboto"}}>
        <Typography variant="h1" style={{padding: '10vh', color: '#666666', fontFamily: "Roboto", textAlign: "center"}}>Tons of possibilities to choose.</Typography>
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} md={9}>
                <img className={classes.centeredImage}
                    src={`config/variations/kc${selectedKitchen}_wp${selectedWall}_ff${selectedFloor}_wc${selectedWindow}.jpg`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Grid>
        <Grid item xs={12} md={3} container direction="column">    
            <Grid item>
                <div>
                    <h3>Kitchen Cabinets:</h3>
                    <ImgButton
                        handleClick={handleKitchenChange}
                        src="selection_icons/kc1.jpg"
                        value={1}
                    />
                    <ImgButton
                        handleClick={handleKitchenChange}
                        src="selection_icons/kc2.jpg"
                        value={2}
                    />
                    <ImgButton
                        handleClick={handleKitchenChange}
                        src="selection_icons/kc3.jpg"
                        value={3}
                    />
                    <ImgButton
                        handleClick={handleKitchenChange}
                        src="selection_icons/kc4.jpg"
                        value={4}
                    />
                </div>
            </Grid>
        <Grid item>
            <div>
            <h3>Wall paint:</h3>
            <ImgButton
                handleClick={handleWallChange}
                src="selection_icons/wp1.jpg"
                value={1}
            />
            <ImgButton
                handleClick={handleWallChange}
                src="selection_icons/wp2.jpg"
                value={2}
            />
            <ImgButton
                handleClick={handleWallChange}
                src="selection_icons/wp3.jpg"
                value={3}
            />
            </div>
        </Grid>
        <Grid item>
            <div>
            <h3>Finish floor:</h3>
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff1.png"
                value={1}
            />
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff2.png"
                value={2}
            />
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff3.png"
                value={3}
            />
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff4.png"
                value={4}
            />
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff4.png"
                value={4}
            />
            <ImgButton
                handleClick={handleFloorChange}
                src="selection_icons/ff5.png"
                value={5}
            />
            </div>
        </Grid>
        <Grid item>
            <div>
            <h3>Window color:</h3>
            <ImgButton
                handleClick={handleWindowChange}
                src="selection_icons/wc1.jpg"
                value={1}
            />
            <ImgButton
                handleClick={handleWindowChange}
                src="selection_icons/wc2.jpg"
                value={2}
            />
            </div>
        </Grid>
        </Grid>
        </Grid>
      </div>
    );
  };

ImageConfigurator.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    highlighted: PropTypes.bool,
};
  
export default withStyles(styles, { withTheme: true })(ImageConfigurator);