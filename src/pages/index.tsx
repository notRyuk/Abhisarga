import { useEffect, useState, MouseEvent } from 'react'
import backgroundImage from "../assets/background.png";
import Logo from '../components/Logo';
import Modal from "../components/CustomCard"
import Prizes from '../components/Prizes';
import RegistrationCard from '../components/RegistrationCard';
import styles from "../styles/app.module.css";
import SmallCircle from '../components/SmallCircle';
import SmallBox from '../components/SmallBox';
import StarIcon from '@mui/icons-material/Star';
import AboutUs from '../components/AboutUs';
import Socials from '../components/Socials';
import gradient from '../assets/mesh-715.png';
import abhisargaGrad from '../assets/abhisargaGrad.png';
import landingPage from '../assets/Landing Page.png'
import Quote from '../components/Quote';
import LogoutIcon from '@mui/icons-material/Logout';
import sand from "../assets/sand.png"
import as from  '../assets/abhisarga_small.png'
import Members from '../components/Members';
import AuthCard from '../components/AuthCard';
import Queries from '../components/Queries';
import Sponsors from '../components/Sponsors';
import ComputerIcon from '@mui/icons-material/Computer'
import Fun from '../components/Fun'
import IconButton from '@mui/material/IconButton'
import bgImg from "../assets/title-background.svg"
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import titleImage from "../assets/Final Iteration.png"
// import Navigation from '../components/Navigation';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import minimap from '../assets/mini-map.png';
import waterImage from '../assets/water.png';

const getRandomColor = () => {
  const colors = ["#FF68A8", "#64CFF7", "#01a863", "#CA7CD8", "#3968CB"];
  return colors[Math.floor(Math.random()*colors.length)]
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [nav, setNav] = useState<string>("0px")
  setTimeout(() => setIsLoading(false), 3000)
  useEffect(() => {
    const element = document.getElementsByClassName(styles.main)[0]
    const view = document.defaultView
    window.addEventListener('load', () => {
      view.scrollTo({
        left: (element.clientWidth-view.innerWidth)/2,
        top: (element.clientHeight-view.innerHeight)/2
      })
    })
    view.scrollTo({
      left: (element.clientWidth-view.innerWidth)/2,
      top: (element.clientHeight-view.innerHeight)/2
    })
  }, [])

  const [width, setWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])

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
        top: _scrollTop + (_startY - event.clientY)
      })
    }

    function OnMouseUp() {
        document.onmousemove = null;
    }
  }, [])

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
            cursor: "pointer"
        }}
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
                cursor: "pointer"
            }}
            onClick={() => {
              if (nav==="100vw") {
                setNav("0px")
              }
              else {
                setNav("100vw")
              }
            }}
        >
            <MenuIcon
                sx={ width > 600 && {
                    marginRight: ".5rem",
                    fontSize: "40px"
                }}
            />
            {window.innerWidth > 600 &&
              <span style={{ marginRight: "1.5rem" }}>
                MENU
              </span>
            }
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
        backgroundColor: "#aaa9a9"
      }}
    >
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
            className={styles.navMainDiv}
          >
            {nav==="100vw" && 
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
                  className={styles.buttonScale}
                  onClick={() => {
                    if (nav==="100vw") {
                      setNav("0px")
                    }
                    else {
                      setNav("100vw")
                    }
                  }}
                >
                  <CloseIcon
                      sx={ width > 600 ? {
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
              <img src={titleImage} alt="Kuch bhi" width={"85%"}
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
                  fontWeight: "700"
                }}
                className={`${styles.hover} ${styles.menuItem}`}
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
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700"
                }}
                className={`${styles.hover} ${styles.menuItem}`}
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
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  paddingRight: "2rem",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700"
                }}
                className={`${styles.hover} ${styles.menuItem} ${styles.teamIcon}`}
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
                  // borderBottom: "5px solid white",
                  textAlign: "center",
                  paddingRight: "2rem",
                  fontFamily: "NimbusSansExtended",
                  fontWeight: "700"
                }}
                className={`${styles.hover} ${styles.menuItem}`}
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
                className={styles.minimap}
              >
                <img 
                  src={minimap} 
                  alt="kuch bhi"
                  style={{
                    borderRadius: "15px",
                    maxWidth: "100%"
                  }}
                  // className={styles.minimap}
                  >
                </img>
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
                      alignSelf: window.innerWidth > 768 ? "flex-end" : "flex-start",
                      border: "6px solid black"
                  }}
                  className={`${styles.buttonScale} ${styles.logoutButton}`}
                >
                  <LogoutIcon
                      sx={ width > 600 ? {
                          marginRight: ".5rem"
                      } : {
                        fontSize: "40px"
                      }}
                  />
                  <span style={{ marginRight: ".5rem" }}>
                    LOGOUT
                  </span>
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
          color={getRandomColor()} 
          title="TECHNICAL EVENT" 
          vertical={true}
        />
        <Modal 
          color={getRandomColor()} 
          title="TECHNICAL EVENT" 
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
            marginTop: "-2px"
          }}
        />
        <Modal 
          color={getRandomColor()} 
          title="TECHNICAL EVENT" 
          style={{ height: 385, marginTop: "12px" }}
          vertical={true}
        />
        <Modal 
          color={getRandomColor()} 
          title="TECHNICAL EVENT" 
          style={{ height: 385 }}
          vertical={true}
        />
      </div>
      <div className={styles.gridCenterMain}>
        <div className={styles.gridCenterTop}>
          <div className={styles.top1}>
            <div className={styles.top1left}>
              <div className={styles.top1lefttop}>
                <div>
                  .
                </div>
                <div>
                  <Socials />
                </div>
              </div>
              <div className={styles.top1leftbottom}>
                <div></div>
                <div className={styles.tempflex}>
                  <Modal color={getRandomColor()} title="ACCOMODATION" style={{ height: 385, width: 600}} />
                  <Modal color={getRandomColor()} title="CULTURAL EVENTS" style={{ height: 385, width: 600}} />
                </div>
              </div>
            </div>
            <div className={styles.top1right}>
              <div>
                
              </div>
              <div>
                <RegistrationCard />
              </div>
            </div>
          </div>
          <div className={styles.top2}>
            <Prizes />
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
        </div>
        <div className={styles.gridCenterBottom}>
          <div className={styles.gridBottomLeft}>
            <Modal color={getRandomColor()} title="TECHNICAL EVENTS" style={{ height: 385 }}/>
            <div className={styles.nav}>
              <div className={styles.navtop}>
                <SmallBox  title='CULTURAL EVENTS' color={getRandomColor()} />
                <SmallCircle title='TEAM' color={getRandomColor()} />
              </div>
              <div className={styles.navbot}>
                <SmallCircle title='SPONSORS' color={getRandomColor()} />
                <SmallBox title='TECHNICAL EVENTS' color={getRandomColor()} />/
              </div>
            </div>
            <Modal 
              color={getRandomColor()} 
              title="TECHNICAL EVENT #1" 
              style={{ 
                height: 385, 
                width: 430, 
                marginTop: "-7rem", 
                marginRight: "1rem"
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
                  borderColor: "orange"
                }} 
                sx2={{
                  padding: 0,
                  borderColor: "orange"
                }}
              />
            </div>
          </div>
          <div className={styles.gridBottomRight}>
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={styles.rightGridMain}>
        <div className={styles.rightGridTop}>
          <div className={styles.topLeft}>
            <Modal color={getRandomColor()} title="CULTURAL EVENT #2" style={{ height: 385 }} />
            <Modal color={getRandomColor()} title="CULTURAL EVENT #1" style={{ height: 385, marginTop: "-3rem" }} />
          </div>
          <div className={styles.topRight}>
              <div></div>
              <div className={styles.topRightMid}>
                <Modal 
                  color={getRandomColor()} 
                  title="CULTURAL EVENT #3" 
                  style={{ 
                    height: 400, 
                    marginLeft: "-.5rem" 
                  }} 
                />
                <Modal 
                  color={getRandomColor()} 
                  title="CULTURAL EVENT #4" 
                  style={{ 
                    height: 400, 
                    marginLeft: ".5rem" 
                  }} 
                />
              </div>
              <Fun 
                sx={{
                  backgroundColor: "#01a863",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "7rem",
                  width: "23rem",
                  height: "10.5rem",
                  marginLeft: "22.5rem",
                  marginTop: "-1.5rem"
                }}
              />
          </div>
        </div>
        <div className={styles.rightGridBottom}>
          <div className={styles.bottomLeft}>
              <AuthCard
                color="black"
                sx={{
                  height: "17rem",
                  width: "20rem"
                }} 
              />
              <Queries
                sx={{
                  height: "19rem",
                  width: "20rem"
                }}
              />
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.bottomRightTop}>
              <Modal color={getRandomColor()} title='WORKSHOPS' style={{ height: 385, marginLeft: "-.5rem" }} />
              <Modal color={getRandomColor()} title='CULTURAL EVENT #5' style={{ height: 385, marginLeft: "-2rem" }} />
            </div>
            <div className={styles.bottomRightBottom}>
                <Sponsors 
                  sx={{
                    height: "28rem",
                    marginLeft: "-0.3rem",
                    marginTop: "-0.2rem",
                    width: "29rem",
                    borderWidth: "15px",
                    borderRadius: "10px"
                  }} 
                />
                <Modal color={getRandomColor()} title='CULTURAL EVENT #6' style={{ height: 385, width: 420, marginLeft: "-19px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
