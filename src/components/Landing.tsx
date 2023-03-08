import { useState } from "react";
import landingBackground  from "../assets/landing.svg";
import { Button } from "@mui/material";
import Logo from "./Logo";


export default function Landing() {
    return (
        <div
            style={{
                backgroundImage: `url(${landingBackground})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
                top: "50%",
                paddingTop: "6rem"
            }}
        >
            <Logo />
            <Button 
                style={{
                    color: "black",
                    fontFamily: "ArcadeClassic",
                    fontSize: 28,
                    padding: ".5rem 1rem",
                    border: "5px solid black",
                }}
            >
                Enter the world of Abhisarga
            </Button>
        </div>
    )
}