import { useEffect, useState } from 'react'
import backgroundImage from "../assets/background.png";
import Logo from '../components/Logo';
import Modal from "../components/CustomCard"
import Prizes from '../components/Prizes';
import RegistrationCard from '../components/RegistrationCard';
import styles from "../styles/app.module.css";
import Image from "../assets/react.svg"
import { shuffle } from '../helper';

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
        flexDirection: "row"
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
        <Modal color={getRandomColor()} title="Lorem Ipsum" />
        <Modal color={getRandomColor()} title="Lorem Ipsum"/>
        <RegistrationCard className={`${styles.modal} ${styles.reg_card}`}/>
        <Modal color={getRandomColor()} title="Lorem Ipsum"/>
        <Modal color={getRandomColor()} title="Lorem Ipsum"/>
      </div>
      <div className={styles.gridCenterMain}>
        <div className={styles.gridCenterTop}>
          <div className={styles.top1}>
            <div className={styles.top1left}>
              <div className={styles.top1lefttop}>
                <div>
                  ghaas
                </div>
                <div>
                  <Logo />
                </div>
              </div>
              <div className={styles.top1leftbottom}>
                <Modal color={getRandomColor()} title="Lorem Ipsum" style={{ height: 385}} />
                <Modal color={getRandomColor()} title="Lorem Ipsum" style={{ height: 385}} />
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

        </div>
      </div>
    </div>
  )
}

export default App
