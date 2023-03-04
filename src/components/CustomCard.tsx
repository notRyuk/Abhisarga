import { useState } from "react";
import { Card, SxProps, Container, Typography, CardContent, alpha } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import CodeIcon from '@mui/icons-material/Code';

interface Props {
    style?: SxProps
    image?: string
    color: string
    title: string
}

export default function CustomCard({ style, image, color, title }: Props){
    const icons = [NorthEastIcon, NorthIcon, NorthWestIcon, SouthEastIcon, SouthIcon, SouthWestIcon]
    const RandomIcon = icons[Math.floor(Math.random()*6)]
    return (
        <Card
            sx={{
                maxWidth: 400,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "1.2rem",
                bgcolor: color,
                gap: "1rem",
                padding: 0,
                ...style,
            }}
        >
            <img
                src={"https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png"}
                alt="SOM"
                style={{
                    backgroundColor: "white",
                    marginTop: "1rem",
                    border: `6px solid white`,
                    width: "90%",
                    borderTopLeftRadius: "1.2rem",
                    borderTopRightRadius: "1.2rem",
                }}
            ></img>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <LaptopIcon sx={{ padding: ".4rem", color: "white", backgroundColor: alpha(color, 0.5), border: "5px solid white", borderRadius: ".5rem"}}/>
                <CodeIcon sx={{ padding: ".4rem", color: "white", backgroundColor: alpha(color, 0.5), border: "5px solid white", borderRadius: ".5rem"}}/>
                <AddIcon sx={{ padding: ".4rem", color: "white", backgroundColor: alpha(color, 0.5), border: "5px solid white", borderRadius: ".5rem"}}/>
            </Container>
            <CardContent
                sx={{
                    display: "flex",
                    gap: "2rem"
                }}
            >
                <RandomIcon sx={{color: "white"}}  fontSize={"large"}/>
                <Typography variant="h4" fontFamily="Dosis" color="white">{title}</Typography>
            </CardContent>
        </Card>
    )
}