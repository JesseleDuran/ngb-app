import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ImageAsButton = ({ handleClick, src, value }) => {
    const handleClickWithParam = () => {
      // Call the handleClick function with the provided value
      handleClick(value);
    };
  
    return (
      <IconButton onClick={handleClickWithParam} variant="contained" color="primary">
        <Avatar
          src={src}
          alt="Button Image"
          sx={{ width: 35, height: 35, borderRadius: '50%', border: '2px solid #bab3ab', padding: '2px'}}
          
        />
      </IconButton>
    );
  };

export default ImageAsButton;
