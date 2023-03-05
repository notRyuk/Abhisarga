import React from 'react'
import { Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

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
    </div>
  )
}

export default Socials