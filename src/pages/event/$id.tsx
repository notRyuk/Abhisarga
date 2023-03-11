import React, { useState, useEffect } from 'react'
import NameCard from '../../components/NameCard'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../styles/namecard.module.css'
import styles2 from "../../styles/app.module.css";
import as from '../../assets/abhisarga_small.png'
import StarIcon from '@mui/icons-material/Star';
import gradient from '../../assets/mesh-715.png';
import LogoutIcon from '@mui/icons-material/Logout';
import ComputerIcon from '@mui/icons-material/Computer'
import GroupsIcon from '@mui/icons-material/Groups';
import titleImage from "../../assets/Final Iteration.png"
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import minimap from '../../assets/mini-map.png'
import { useNavigate } from 'react-router-dom';
import { Session, events, decrypt, encrypt, colors as defaultColors, shuffle } from '../../helper';
import { useParams } from 'react-router-dom';
import { alpha } from "@mui/material"

const index = () => {
    const { id } = useParams();
    const colors = shuffle(defaultColors)
    const eventInfo = decrypt(id).split("=>")
    const [currentUser, setCurrentUser] = useState<Session | null>()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("session")))
        if (currentUser && currentUser.timestamp) {
            if ((new Date(Date.now()).getTime() - new Date(currentUser.timestamp).getTime()) > 86400000) {
                localStorage.removeItem("session")
                setCurrentUser(null)
            }
            else {
                setIsLoggedIn(true)
            }
        }
    }, [])

    const [nav, setNav] = useState<string>("0px")
    const [width, setWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("session")
        setCurrentUser(null)
        setNav(nav === "0px" ? "100vw" : "0px")
    }


    return (
        <div
            className={styles.main}
            style={{
                backgroundColor: alpha(eventInfo?.[2] || "#CA7CD8", 0.5)
            }}
        >
            {width > 600 && (
                <button
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "fixed",
                        top: 40,
                        left: 20,
                        zIndex: "1500",
                        borderRadius: "15px",
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate('/')}
                >
                    <img
                        src={as}
                        height={"70rem"}
                        alt="kuch bhi"
                        style={{
                            borderRadius: "10px"
                        }}
                    />
                </button>
            )

            }
            <div
                id='fulScrNav'
                style={{
                    height: "100vh",
                    width: nav,
                    position: "fixed",
                    zIndex: "2000",
                    top: "0",
                    left: "0",
                    backgroundColor: "#e6f5da",
                    color: "black",
                    overflowX: "hidden",
                    transition: "0.5s",
                    backgroundImage: `url(${gradient})`,
                    backgroundRepeat: "repeat"
                }}
            >
                <div
                    style={{
                        position: "relative",
                        textAlign: "center",
                        zIndex: "2002"
                    }}
                    className={styles2.navMainDiv}
                >
                    {nav === "100vw" &&
                        <button
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "fixed",
                                top: window.innerWidth > 450 ? 40 : 20,
                                right: window.innerWidth > 450 ? 20 : 5,
                                padding: ".5rem",
                                paddingRight: "0.5rem",
                                // border: "6px solid black",
                                // gap: ".5rem",
                                fontSize: "30px",
                                borderRadius: "10px",
                                color: "black",
                                cursor: "pointer",
                                border: "5px solid black",
                                marginLeft: window.innerWidth < 450 ? "1rem" : "0rem"
                            }}
                            className={styles2.buttonScale}
                            onClick={() => {
                                if (nav === "100vw") {
                                    setNav("0px")
                                }
                                else {
                                    setNav("100vw")
                                }
                            }}
                        >
                            <CloseIcon
                                sx={width > 600 ? {
                                    marginRight: ".5rem"
                                } : {
                                    fontSize: "40px",
                                }}
                            />
                            {window.innerWidth > 600 &&
                                <span style={{ marginRight: "1.5rem" }}>
                                    CLOSE
                                </span>
                            }
                        </button>
                    }
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            gap: "2rem"
                        }}
                        className={styles2.navFlex}
                    >
                        <img src={titleImage} alt="Kuch bhi" width={"85%"}
                            style={{
                                minWidth: "150px",
                                maxWidth: "500px",
                                border: "10px solid black",
                                borderRadius: "15px",
                                backgroundColor: "#E6F5DA",
                            }}
                            className={styles2.abhisargaNav}
                        />
                        <div
                            style={{
                                marginLeft: "2rem",
                                color: "white",
                                cursor: "pointer",
                                // borderBottom: "5px solid white",
                                textAlign: "center",
                                fontFamily: "NimbusSansExtended",
                                fontWeight: "700"
                            }}
                            className={`${styles2.hover} ${styles2.menuItem}`}
                            onClick={() => {
                                navigate(`/events/${encrypt(`type=>CULTURAL=>${colors[0]}`)}`)
                                if (nav === "100vw") {
                                    setNav("0px")
                                }
                                else {
                                    setNav("100vw")
                                }
                            }}
                        >
                            <MusicNoteIcon
                                sx={{
                                    fontSize: "3rem",
                                    marginRight: "1rem"
                                }}
                            />
                            CULTURAL EVENTS
                            <EastIcon
                                sx={{
                                    fontSize: "1.5rem",
                                    marginLeft: "2rem"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                marginLeft: "2rem",
                                color: "white",
                                cursor: "pointer",
                                textAlign: "center",
                                fontFamily: "NimbusSansExtended",
                                fontWeight: "700"
                            }}
                            className={`${styles2.hover} ${styles2.menuItem}`}
                            onClick={() => {
                                navigate(`/events/${encrypt(`type=>TECHNICAL=>${colors[1]}`)}`)
                                if (nav === "100vw") {
                                    setNav("0px")
                                }
                                else {
                                    setNav("100vw")
                                }
                            }}
                        >
                            <ComputerIcon
                                sx={{
                                    fontSize: "3rem",
                                    marginRight: "1rem"
                                }}
                            />
                            TECHNICAL EVENTS
                            <EastIcon
                                sx={{
                                    fontSize: "1.5rem",
                                    marginLeft: "2rem"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                marginLeft: "2rem",
                                color: "white",
                                cursor: "pointer",
                                textAlign: "center",
                                paddingRight: "2rem",
                                fontFamily: "NimbusSansExtended",
                                fontWeight: "700"
                            }}
                            className={`${styles2.hover} ${styles2.menuItem} ${styles2.teamIcon}`}
                        >
                            <GroupsIcon
                                sx={{
                                    fontSize: "3rem",
                                    marginRight: "4rem",
                                    marginLeft: "1rem"
                                }}
                            />
                            TEAM
                            <EastIcon
                                sx={{
                                    fontSize: "1.5rem",
                                    marginLeft: "4rem",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                marginLeft: "2rem",
                                color: "white",
                                cursor: "pointer",
                                textAlign: "center",
                                paddingRight: "2rem",
                                fontFamily: "NimbusSansExtended",
                                fontWeight: "700"
                            }}
                            className={`${styles2.hover} ${styles2.menuItem}`}
                        >
                            <StarIcon
                                sx={{
                                    fontSize: "3rem",
                                    marginRight: "1rem"
                                }}
                            />
                            SPONSORS
                            <EastIcon
                                sx={{
                                    fontSize: "1.5rem",
                                    marginLeft: "2rem"
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingRight: "20px",
                            paddingTop: "50px",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div
                            style={{
                                border: "5px solid black",
                                padding: "10px",
                                backgroundColor: "white",
                                borderRadius: "15px",
                                maxWidth: "350px"
                            }}
                            className={styles2.minimap}
                        >
                            <img
                                src={minimap}
                                alt="kuch bhi"
                                style={{
                                    borderRadius: "15px",
                                    maxWidth: "100%"
                                }}
                            >
                            </img>
                        </div>
                        {isLoggedIn && (
                            <button
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1rem",
                                    paddingRight: "0.5rem",
                                    fontSize: "30px",
                                    borderRadius: "10px",
                                    color: "black",
                                    cursor: "pointer",
                                    marginTop: "20px",
                                    maxWidth: "20rem",
                                    fontFamily: "NimbusSansExtended",
                                    fontWeight: "700",
                                    alignSelf: window.innerWidth > 768 ? "flex-end" : "flex-start",
                                    border: "6px solid black"
                                }}
                                className={`${styles2.buttonScale} ${styles2.logoutButton}`}
                                onClick={handleLogout}
                            >
                                <LogoutIcon
                                    sx={
                                        (width > 600) ? {
                                            marginRight: ".5rem"
                                        } : {
                                            fontSize: "40px"
                                        }
                                    }
                                />
                                <span style={{ marginRight: ".5rem" }}>
                                    LOGOUT
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "fixed",
                    top: 40,
                    right: 20,
                    padding: ".5rem",
                    paddingRight: "0.5rem",
                    border: width > 600 ? "6px solid black" : "2px solid black",
                    fontSize: "25px",
                    zIndex: "1500",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    cursor: "pointer"
                }}
                onClick={() => {
                    if (nav === "100vw") {
                        setNav("0px")
                    }
                    else {
                        setNav("100vw")
                    }
                }}
            >
                <MenuIcon
                    sx={width > 600 && {
                        marginRight: ".5rem",
                        fontSize: "40px"
                    }}
                />
                {window.innerWidth > 1050 &&
                    <span style={{ marginRight: "1.5rem" }}>
                        MENU
                    </span>
                }
            </button>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                    left: 0,
                    margin: 0,
                    boxSizing: "border-box",
                    minHeight: "100vh",
                }}
                className={styles.eventMainDiv}
            >
                <NameCard 
                    event={events.filter(({ club, name }) => (club === eventInfo[0] && name === eventInfo[1]))[0]} 
                    color={eventInfo?.[2]}
                />
            </div>
        </div>
    )
}

export default index