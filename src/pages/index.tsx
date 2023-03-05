import { useEffect, useState } from 'react'
import backgroundImage from "../assets/background.png";
import Logo from '../components/Logo';
import Modal from "../components/CustomCard"
import Prizes from '../components/Prizes';
import RegistrationCard from '../components/RegistrationCard';
import styles from "../styles/app.module.css";
import Image from "../assets/react.svg"
import { shuffle } from '../helper';
import SmallCircle from '../components/SmallCircle';
import SmallBox from '../components/SmallBox';
import AboutUs from '../components/AboutUs';
import Socials from '../components/Socials';
import Quote from '../components/Quote';
import Members from '../components/Members';
import AuthCard from '../components/AuthCard';
import Queries from '../components/Queries';
import Sponsors from '../components/Sponsors';
import Fun from '../components/Fun'

const getRandomColor = () => {
  const colors = ["#FF68A8", "#64CFF7", "#01a863", "#CA7CD8", "#3968CB"];
  return colors[Math.floor(Math.random()*colors.length)]
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
  
  return (
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
        <Modal color={getRandomColor()} title="TECHNICAL EVENT" />
        <Modal color={getRandomColor()} title="TECHNICAL EVENT"/>
        <Quote 
          className={`${styles.modal} ${styles.reg_card}`}
          sx={{
            margin: 0,
            marginBottom: "-1.5rem",
            width: "25rem",
            marginLeft: "-1rem",
            marginTop: "-.25rem"
          }}
        />
        <Modal color={getRandomColor()} title="TECHNICAL EVENT"/>
        <Modal color={getRandomColor()} title="TECHNICAL EVENT"/>
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
                ghaas
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
                <SmallBox title='TECHNICAL EVENTS' color={getRandomColor()} />
              </div>
            </div>
            <Modal color={getRandomColor()} title="TECHNICAL EVENT #1" style={{ height: 385, width: 430, marginTop: "-2rem", marginRight: "1rem"}}/>
            <div className={styles.team}>
              <Members 
                sx={{
                  height: "18.5rem",
                  // marginBottom: "-3rem",
                  marginTop: "1.7rem",
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
                <Modal color={getRandomColor()} title="CULTURAL EVENT #3" style={{ height: 400, marginLeft: "-.5rem" }} />
                <Modal color={getRandomColor()} title="CULTURAL EVENT #4" style={{ height: 400, marginLeft: ".5rem" }} />
              </div>
              <Fun 
                sx={{
                  backgroundColor: "#01a863",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16.4rem",
                  height: "10.5rem",
                  paddingLeft: "7rem",
                  marginLeft: "22.5rem",
                  marginTop: "-1.2rem"
                }} 
              />
          </div>
        </div>
        <div className={styles.rightGridBottom}>
          <div className={styles.bottomLeft}>
              <AuthCard 
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
  )
}

export default App
