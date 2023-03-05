import React from 'react'
import {Instagram, Twitter, LinkedIn, YouTube} from '@mui/icons-material';

const Socials = () => {
  return (
    <div style={{ 
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
          animation: "transform 0.2s"
        }}
      >
        <Instagram 
          fontSize={'large'} 
          sx={{ fontSize: "4.5rem" }} 
        />
        <Twitter 
          fontSize={'large'} 
          sx={{ fontSize: "4.5rem" }} 
        />
        <LinkedIn 
          fontSize={'large'} 
          sx={{ fontSize: "4.5rem" }} 
        />
        <YouTube 
          fontSize={'large'} 
          sx={{ fontSize: "4.5rem" }} 
        />
    </div>
  )
}

export default Socials