import React from 'react'
import { Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Socials = () => {
  return (
    <div 
      style={{ 
        display: "flex", 
        color: "black", 
        border: "10px solid black", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        gap: "4rem", 
        paddingTop: "5rem", 
        paddingBottom: "5rem", 
        borderRadius: "15px",
        animation: "transform 0.2s",
        backgroundColor: "white"
      }}
    >
      <IconButton
        sx={{
          padding: "0",
          margin: "0",
          color: "black"
        }}  
        href='https://www.instagram.com/abhisarga/?hl=en'
        target={'_blank'}
      >
        <Instagram
          fontSize={'large'} 
          sx={{ 
            fontSize: "4.5rem",
            "&:hover": {
              scale: 1.02,
              cursor: "pointer"
            }
          }} 
        />
      </IconButton>
      <IconButton
        style={{
          padding: "0",
          margin: "0",
          color: "black"
        }}  
        href='https://twitter.com/IIITSC'
        target='_blank'
      >
        <Twitter
          fontSize={'large'} 
          sx={{ 
            fontSize: "4.5rem",
            "&:hover": {
              scale: 1.02,
              cursor: "pointer"
            }
          }} 
        />
      </IconButton>
      <IconButton
        style={{
          padding: "0",
          margin: "0",
          color: "black"
        }}  
        href='https://www.linkedin.com/school/indian-institute-of-information-technology-sricity/?originalSubdomain=in'
        target='_blank'
      >
        <LinkedIn
          fontSize={'large'} 
          sx={{ 
            fontSize: "4.5rem",
            "&:hover": {
              scale: 1.02,
              cursor: "pointer"
            }
          }} 
        />
      </IconButton>
      <IconButton
        style={{
          padding: "0",
          margin: "0",
          color: "black"
        }}  
        href='https://www.youtube.com/@iiitsricity-abhisarga6830'
        target={'_blank'}
      >
        <YouTube
          fontSize={'large'} 
          sx={{ 
            fontSize: "4.5rem",
            "&:hover": {
              scale: 1.02,
              cursor: "pointer"
            }
          }} 
        />
      </IconButton>
    </div>
  )
}

export default Socials