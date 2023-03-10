import ComputerIcon from "@mui/icons-material/Computer";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import as from "../assets/abhisarga_small.png";
import backgroundImage from "../assets/background.png";
import titleImage from "../assets/Final Iteration.png";
import gradient from "../assets/mesh-715.png";
import AboutUs from "../components/AboutUs";
import AuthCard from "../components/AuthCard";
import Modal from "../components/CustomCard";
import Fun from "../components/Fun";
import Logo from "../components/Logo";
import Members from "../components/Members";
import Prizes from "../components/Prizes";
import Queries from "../components/Queries";
import Quote from "../components/Quote";
import RegistrationCard from "../components/RegistrationCard";
import SmallBox from "../components/SmallBox";
import SmallCircle from "../components/SmallCircle";
import Socials from "../components/Socials";
import Sponsors from "../components/Sponsors";
import styles from "../styles/app.module.css";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import minimap from "../assets/mini-map.png";
import waterImage from "../assets/water.png";
import {
  technicalEvents as tEvents,
  culturalEvents as cEvents,
  colors as defaultColors,
  shuffle,
  Event,
  Session
} from "../helper";
import axios from 'axios'

const accommodationEvent: Event = {
  name: "ACCOMMODATION",
  rules: [
    "The user must treat the property with care and respect and ensure that they do not cause any damage to the property during their stay",
    "Tny damage caused to the property by the user must be reported immediately to the owner or property manager",
    "The user must not engage in any illegal activity on the property",
    "The user must not bring any pets onto the property without the express permission of the owner or property manager",
    "The user must keep the property clean and tidy during their stay",
    "The user must not smoke inside the property",
    "The user must not tamper with any appliances or equipment on the property",
    "The user must not remove any items from the property without the express permission of the owner or property manager",
    "The user must take responsibility for their own personal belongings and ensure that they are securely stored during their stay",
    "The user must comply with any additional rules or regulations set out by the owner or property manager for the duration of their stay",
  ],
  description: "The first 200 people to register for the accommodations are gonna get a 100% discount. The other have to pay ₹100/-",
};

const workshopEvent: Event = {
  name: "WORKSHOPS",
};

const culturalEvent: Event = {
  name: "CULTURAL EVENTS INFO",
};

const technicalEvent: Event = {
  name: "TECHNICAL EVENTS INFO",
};

function App() {

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

  const handleLogout = () => {
    localStorage.removeItem("session")
    setCurrentUser(null)
  }

  const colors = shuffle(defaultColors);
  const technicalEvents = shuffle(tEvents);
  var technicalCounter = 0;
  const culturalEvents = shuffle(cEvents);
  var culturalCounter = 0;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nav, setNav] = useState<string>("0px");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  setTimeout(() => setIsLoading(false), 10000);
  useEffect(() => {
    const element = document.getElementsByClassName(styles.main)[0];
    const view = document.defaultView;
    window.addEventListener("load", () => {
      view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2,
        top: (element.clientHeight - view.innerHeight) / 2,
      });
    });
    view.scrollTo({
      left: (element.clientWidth - view.innerWidth) / 2,
      top: (element.clientHeight - view.innerHeight) / 2,
    });
  }, []);

  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    let _startX = 0,
      _startY = 0,
      _scrollTop = 0,
      _scrollLeft = 0;

    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;

    function OnMouseDown(event) {
      document.onmousemove = OnMouseMove;
      _startX = event.clientX;
      _startY = event.clientY;
      _scrollTop = document.documentElement.scrollTop;
      _scrollLeft = document.documentElement.scrollLeft;
    }

    function OnMouseMove(event) {
      window.scrollTo({
        left: _scrollLeft + (_startX - event.clientX),
        top: _scrollTop + (_startY - event.clientY),
      });
    }

    function OnMouseUp() {
      document.onmousemove = null;
    }
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${waterImage})`,
        width: 3975,
        height: 2809,
      }}
    >
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 20,
          left: 20,
          // padding: ".5rem",
          // paddingRight: "0.5rem",
          // border: "6px solid black",
          // fontSize: "25px",
          zIndex: "1500",
          borderRadius: "15px",
          borderColor: "transparent",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <img
          src={as}
          height={"70rem"}
          alt="kuch bhi"
          style={{
            borderRadius: "10px",
          }}
        />
      </button>
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 20,
          right: 20,
          padding: ".5rem",
          paddingRight: "0.5rem",
          border: "6px solid black",
          fontSize: "25px",
          zIndex: "1500",
          borderRadius: "15px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          if (nav === "100vw") {
            setNav("0px");
          } else {
            setNav("100vw");
          }
        }}
      >
        <MenuIcon
          sx={
            width > 600 && {
              marginRight: ".5rem",
              fontSize: "40px",
            }
          }
        />
        {window.innerWidth > 600 && (
          <span style={{ marginRight: "1.5rem" }}>MENU</span>
        )}
      </button>
      <div
        className={styles.main}
        style={{
          width: 3975,
          height: 2809,
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#aaa9a9",
        }}
      >
        <div
          id="fulScrNav"
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
            backgroundRepeat: "repeat",
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              zIndex: "2002",
            }}
            className={styles.navMainDiv}
          >
            {nav === "100vw" && (
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
                  marginLeft: window.innerWidth < 450 ? "1rem" : "0rem",
                }}
                className={styles.buttonScale}
                onClick={() => {
                  if (nav === "100vw") {
                    setNav("0px");
                  } else {
                    setNav("100vw");
                  }
                }}
              >
                <CloseIcon
                  sx={
                    width > 600
                      ? {
                          marginRight: ".5rem",
                        }
                      : {
                          fontSize: "40px",
                        }
                  }
                />
                {window.innerWidth > 600 && (
                  <span style={{ marginRight: "1.5rem" }}>CLOSE</span>
                )}
              </button>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "2rem",
              }}
              className={styles.navFlex}
            >
              {/* <img
                src={abhisargaGrad}
                style={{
                  position: "relative",
                  minWidth: "150px",
                  maxWidth:
                }}>
              </img> */}
              <img
                src={titleImage}
                alt="Kuch bhi"
                width={"85%"}
                style={{
                  minWidth: "150px",
                  maxWidth: "500px",
                  border: "10px solid black",
                  borderRadius: "15px",
                  backgroundColor: "#E6F5DA",
                }}
                className={styles.abhisargaNav}
              ></img>
              {/* <Logo 
                sx={{
                  scale: "0.8"
                }}
              /> */}
              <div
                style={{
                  marginLeft: "2rem",
                  color: "white",
                  cursor: "pointer",
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700",
                }}
                className={`${styles.hover} ${styles.menuItem}`}
              >
                <MusicNoteIcon
                  sx={{
                    fontSize: "3rem",
                    marginRight: "1rem",
                  }}
                />
                CULTURAL EVENTS
                <EastIcon
                  sx={{
                    fontSize: "1.5rem",
                    marginLeft: "2rem",
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: "2rem",
                  color: "white",
                  cursor: "pointer",
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700",
                }}
                className={`${styles.hover} ${styles.menuItem}`}
              >
                <ComputerIcon
                  sx={{
                    fontSize: "3rem",
                    marginRight: "1rem",
                  }}
                />
                TECHNICAL EVENTS
                <EastIcon
                  sx={{
                    fontSize: "1.5rem",
                    marginLeft: "2rem",
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: "2rem",
                  color: "white",
                  cursor: "pointer",
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  paddingRight: "2rem",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700",
                }}
                className={`${styles.hover} ${styles.menuItem} ${styles.teamIcon}`}
              >
                <GroupsIcon
                  sx={{
                    fontSize: "3rem",
                    marginRight: "4rem",
                    marginLeft: "1rem",
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
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  paddingRight: "2rem",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700",
                }}
                className={`${styles.hover} ${styles.menuItem}`}
              >
                <StarIcon
                  sx={{
                    fontSize: "3rem",
                    marginRight: "1rem",
                  }}
                />
                SPONSORS
                <EastIcon
                  sx={{
                    fontSize: "1.5rem",
                    marginLeft: "2rem",
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
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "5px solid black",
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  maxWidth: "350px",
                }}
                className={styles.minimap}
              >
                <img
                  src={minimap}
                  alt="kuch bhi"
                  style={{
                    borderRadius: "15px",
                    maxWidth: "100%",
                  }}
                  // className={styles.minimap}
                ></img>
              </div>
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
                  alignSelf:
                    window.innerWidth > 768 ? "flex-end" : "flex-start",
                  border: "6px solid black",
                }}
                className={`${styles.buttonScale} ${styles.logoutButton}`}
                onClick={handleLogout}
              >
                <LogoutIcon
                  sx={
                    width > 600
                    ? {
                        marginRight: ".5rem",
                      }
                    : {
                        fontSize: "40px",
                      }
                  }
                />
                <span style={{ marginRight: ".5rem" }}>LOGOUT</span>
              </button>
            </div>
          </div>
        </div>
        {/* <Navigation /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // left: "90%",
            gap: "3rem",
            marginLeft: "27rem",
            paddingTop: "28.9rem",
            // width: "12rem"
          }}
        >
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            vertical={true}
          />
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            style={{ height: 385, marginTop: "5px" }}
            vertical={true}
          />
          <Quote
            className={`${styles.modal} ${styles.reg_card}`}
            sx={{
              margin: 0,
              marginBottom: "-1.5rem",
              width: "25rem",
              marginLeft: "-1rem",
              marginTop: "-2px",
            }}
          />
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            style={{ height: 385, marginTop: "12px" }}
            vertical={true}
          />
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            style={{ height: 385 }}
            vertical={true}
          />
        </div>
        <div className={styles.gridCenterMain}>
          <div className={styles.gridCenterTop}>
            <div className={styles.top1}>
              <div className={styles.top1left}>
                <div className={styles.top1lefttop}>
                  <div>.</div>
                  <div>
                    <Socials />
                  </div>
                </div>
                <div className={styles.top1leftbottom}>
                  <div></div>
                  <div className={styles.tempflex}>
                    <Modal
                      color={colors[2]}
                      event={accommodationEvent}
                      style={{ height: 385, width: 600 }}
                    />
                    <Modal
                      color={colors[3]}
                      event={technicalEvent}
                      style={{ height: 385, width: 600 }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.top1right}>
                <div></div>
                <div>
                  <RegistrationCard color={colors[4]} />
                </div>
              </div>
            </div>
            <div className={styles.top2}>
              <Prizes color={colors[4]} />
              <div className={styles.logo}>
                <Logo />
              </div>
            </div>
          </div>
          <div className={styles.gridCenterBottom}>
            <div className={styles.gridBottomLeft}>
              <Modal
                color={colors[0]}
                event={culturalEvents[culturalCounter++]}
                style={{ height: 385 }}
              />
              <div className={styles.nav}>
                <div className={styles.navtop}>
                  <SmallBox title="CULTURAL EVENTS" color={colors[0]} />
                  <SmallCircle title="TEAM" color={colors[2]} />
                </div>
                <div className={styles.navbot}>
                  <SmallCircle title="SPONSORS" color={colors[3]} />
                  <SmallBox title="TECHNICAL EVENTS" color={colors[1]} />/
                </div>
              </div>
              <Modal
                color={colors[0]}
                event={culturalEvents[culturalCounter++]}
                style={{
                  height: 385,
                  width: 430,
                  marginTop: "-7rem",
                  marginRight: "1rem",
                }}
              />
              <div className={styles.team}>
                <Members
                  sx={{
                    height: "18.5rem",
                    // marginBottom: "-3rem",
                    marginTop: "-3rem",
                    width: "96.5%",
                    justifyContent: "center",
                    marginLeft: "-1rem",
                    borderColor: "orange",
                  }}
                  sx2={{
                    padding: 0,
                    borderColor: "orange",
                  }}
                  color={colors[4]}
                />
              </div>
            </div>
            <div className={styles.gridBottomRight}>
              <AboutUs color={colors[2]} />
            </div>
          </div>
        </div>
        <div className={styles.rightGridMain}>
          <div className={styles.rightGridTop}>
            <div className={styles.topLeft}>
              <Modal
                color={colors[1]}
                event={technicalEvents[technicalCounter++]}
                style={{ height: 385 }}
              />
              <Modal
                color={colors[1]}
                event={technicalEvents[technicalCounter++]}
                style={{ height: 385, marginTop: "-3rem" }}
              />
            </div>
            <div className={styles.topRight}>
              <div></div>
              <div className={styles.topRightMid}>
                <Modal
                  color={colors[1]}
                  event={technicalEvents[technicalCounter++]}
                  style={{
                    height: 400,
                    marginLeft: "-.5rem",
                  }}
                />
                <Modal
                  color={colors[1]}
                  event={technicalEvents[technicalCounter++]}
                  style={{
                    height: 400,
                    marginLeft: ".5rem",
                  }}
                />
              </div>
              <Fun
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "7rem",
                  width: "23rem",
                  height: "10.5rem",
                  marginLeft: "22.5rem",
                  marginTop: "-1rem",
                }}
                color={colors[4]}
              />
            </div>
          </div>
          <div className={styles.rightGridBottom}>
            <div className={styles.bottomLeft}>
              <AuthCard
                color="black"
                sx={{
                  height: "17rem",
                  width: "20rem",
                }}
                user={currentUser}
                setUser={setCurrentUser}
              />
              <Queries
                color="black"
                email={email}
                sx={{
                  height: "19rem",
                  width: "20rem",
                  color: "blue",
                }}
              />
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.bottomRightTop}>
                <Modal
                  color={colors[2]}
                  event={workshopEvent}
                  style={{ height: 385, marginLeft: "-.5rem" }}
                />
                <Modal
                  color={colors[1]}
                  event={technicalEvents[technicalCounter++]}
                  style={{ height: 385, marginLeft: "-2rem" }}
                />
              </div>
              <div className={styles.bottomRightBottom}>
                <Sponsors
                  sx={{
                    height: "28rem",
                    marginLeft: "-0.3rem",
                    marginTop: "-0.2rem",
                    width: "29rem",
                    borderWidth: "15px",
                    borderRadius: "10px",
                  }}
                  color={colors[3]}
                />
                <Modal
                  color={colors[3]}
                  event={culturalEvent}
                  style={{ height: 385, width: 420, marginLeft: "-19px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;