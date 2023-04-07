import styles from "../styles/home.module.css";
import landingLogo from "../assets/landing-logo.png";
import { lazy, useEffect, useState } from "react"
import { Button } from "@mui/material";
import { Session } from "../helper";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState<Session|null>()
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("session")))
    if(currentUser && currentUser.timestamp) {
      if((new Date(Date.now()).getTime() - new Date(currentUser.timestamp).getTime())>86400000) {
        localStorage.removeItem("session")
        setCurrentUser(null)
      }
    }
  }, [])

  const [clicked, setClicked] = useState<boolean>(false)
  useEffect(() => {
    if(clicked) {
      navigate("/home")
    }
  })
  return (
    <div className={styles.main}>
      <Button
        className={styles.button}
        variant="outlined"
        style={{
          fontFamily: "ArcadeClassic",
          color: "black",
          borderTop: "3px solid black",
          borderLeft: "3px solid black",
          borderRight: "6px solid black",
          borderBottom: "6px solid black",
          borderRadius: "10px",
          padding: "1rem",
          marginTop: "15px",
          fontSize: "20px",
          marginBottom: "10px",
          animation: "transform 0.2s",
          position: "fixed",
          backgroundColor: "#ffffff"
        }}
        sx={{
          "&:hover": {
            backgroundColor: "#ffffff"
          }
        }}
        onClick={() => setClicked(true)}
      >
        ENTER THE WORLD OF ABHISARGA
      </Button>
    </div>
  )
}