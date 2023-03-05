import React from 'react'
import bg from '../../assets/landing.svg'
import {
    Container, 
    Typography,
    TextField,
    Button,
    OutlinedInput
} from "@mui/material"

const index = () => {
  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bg})`,
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            gap: "1rem"
        }}
    >
        <Typography 
            variant="h4"
            fontFamily="ArcadeClassic"
        >
            LOGIN
        </Typography>
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                border: "5px solid black",
                width: "30%",
                padding: "2rem",
                backgroundColor: "white",
                borderRadius: "1rem",
                minWidth: 350
            }}
        >
            <Container sx={{display: "flex", alignItems: "center", gap: "3rem"}}>
                <Typography 
                    variant="subtitle1"
                >
                    Email
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder='Enter your email'
                />
            </Container>
            <Container sx={{display: "flex", alignItems: "center", gap: "1rem"}}>
                <Typography 
                    variant="subtitle1"
                >
                    Password
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder='Enter your password'
                />
            </Container>
        </Container>
        <Button
            sx={{
                color: "white",
                fontFamily: "ArcadeClassic",
                backgroundColor: "black",
                
            }}
            variant="contained"
        >
            Login
        </Button>
    </div>
  )
}

export default index