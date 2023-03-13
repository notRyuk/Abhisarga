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
  Session,
  encrypt
} from "../helper";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

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
  description: "All the people who register for the accommodations are gonna get a 100% discount.",
  banner: "https://r1imghtlak.mmtcdn.com/d834d79017f611e9abe10242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg"
};

const workshopEvent: Event = {
  name: "WORKSHOPS",
  description: "Workshops will be held at Abhisarga '23. More info will be shared soon!",
  club: "Abhisarga IIIT Sri City"
};

const culturalEvent: Event = {
  name: "CULTURAL EVENTS INFO",
  banner: "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-campus-culture-and-art-festival-poster-design-image_190716.jpg"
};

const technicalEvent: Event = {
  name: "TECHNICAL EVENTS INFO",
  banner: "data:image/jpeg;base64,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",
  description: "Abhisarga is holding 5 technical events covering different domains like Development, Artificial Intelligence/Machine Learning (AI/ML), Internet of Things (IoT), Data Science and Competitive Programming",
  club: "Abhisarga IIIT Sri City"
};

const technicalEvents = shuffle(tEvents);
const culturalEvents = shuffle(cEvents);
function App() {
  const colors = shuffle(defaultColors);
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

  const handleLogout = () => {
    localStorage.removeItem("session")
    setCurrentUser(null)
  }

  var technicalCounter = 0;
  var culturalCounter = 0;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nav, setNav] = useState<string>("0px");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  setTimeout(() => setIsLoading(false), 10000);
  
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const session = (JSON.parse(localStorage.getItem("session")) as Session) 
    setEmail(session ? session.username : "")
    if (email.length > 0) {
      setIsLoggedIn(true)
    }
  }, [email])

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    const element = document.getElementsByClassName(styles.main)[0];
    const view = document.defaultView;
    window.addEventListener("load", () => {
      width < 750 ? (width < 650 ? (width <= 600 ? (width <=400 ? view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2 + 500,
        top: (element.clientHeight - view.innerHeight) / 2 + 600,
      }): view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2 + 330,
        top: (element.clientHeight - view.innerHeight) / 2 + 450,
      })): view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2 + 30,
        top: (element.clientHeight - view.innerHeight) / 2 + 200,
      })): view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2 - 170,
        top: (element.clientHeight - view.innerHeight) / 2 - 100,
      })): view.scrollTo({
        left: (element.clientWidth - view.innerWidth) / 2,
        top: (element.clientHeight - view.innerHeight) / 2,
      });
    });
  }, []);

  useEffect(() => {
    let _startX = 0, _startY = 0, _scrollTop = 0, _scrollLeft = 0;
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
    if(!isOpen) {
      document.onmousedown = OnMouseDown;
      document.onmouseup = OnMouseUp;
    }
    else {
      document.onmousedown = null
      document.onmouseup = null
    }
  }, [isOpen]);

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
            setIsOpen(false)
          } else {
            setNav("100vw");
            setIsOpen(true)
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
                    setIsOpen(false)
                  } else {
                    setNav("100vw");
                    setIsOpen(true)
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
                onClick={() => {
                  navigate(`/events/${encrypt(`type=>CULTURAL=>${colors[0]}`)}`)
                  if (nav === "100vw") {
                    setNav("0px")
                    setIsOpen(false)
                  }
                  else {
                    setNav("100vw")
                    setIsOpen(true)
                  }
                }}
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
                onClick={() => {
                  navigate(`/events/${encrypt(`type=>TECHNICAL=>${colors[1]}`)}`)
                  if (nav === "100vw") {
                    setNav("0px")
                    setIsOpen(false)
                  }
                  else {
                    setNav("100vw")
                    setIsOpen(true)
                  }
                }}
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
                />
              </div>
              {isLoggedIn ? (
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
                  className={`${styles.buttonScale} ${styles.logoutButton}`}
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
              ): ""}
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
            setIsOpen={setIsOpen}
          />
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            style={{ height: 385, marginTop: "5px" }}
            vertical={true}
            setIsOpen={setIsOpen}
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
            setIsOpen={setIsOpen}
          />
          <Modal
            color={colors[0]}
            event={culturalEvents[culturalCounter++]}
            style={{ height: 385 }}
            vertical={true}
            setIsOpen={setIsOpen}
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
                      color={colors[0]}
                      // event={culturalEvents[culturalCounter++]}
                      event={culturalEvents[culturalCounter++]}
                      style={{ height: 385, width: 600 }}
                      setIsOpen={setIsOpen}
                    />
                    <Modal
                      color={colors[2]}
                      event={accommodationEvent}
                      style={{ height: 385, width: 600 }}
                      setIsOpen={setIsOpen}
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
                setIsOpen={setIsOpen}
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
                setIsOpen={setIsOpen}
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
              <AboutUs color={colors[2]} setIsOpen={setIsOpen} />
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
                setIsOpen={setIsOpen}
              />
              <Modal
                color={colors[1]}
                event={technicalEvents[technicalCounter++]}
                style={{ height: 385, marginTop: "-3rem" }}
                setIsOpen={setIsOpen}
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
                  setIsOpen={setIsOpen}
                />
                <Modal
                  color={colors[1]}
                  event={technicalEvents[technicalCounter++]}
                  style={{
                    height: 400,
                    marginLeft: ".5rem",
                  }}
                  setIsOpen={setIsOpen}
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
                setIsOpen={setIsOpen}
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
                setIsOpen={setIsOpen}
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
                  setIsOpen={setIsOpen}
                />
                <Modal
                  color={colors[1]}
                  event={technicalEvents[technicalCounter++]}
                  style={{ height: 385, marginLeft: "-2rem" }}
                  setIsOpen={setIsOpen}
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
                  color={colors[1]}
                  // event={technicalEvents[technicalCounter++]}
                  event={technicalEvent}
                  style={{ height: 385, width: 420, marginLeft: "-19px" }}
                  setIsOpen={setIsOpen}
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