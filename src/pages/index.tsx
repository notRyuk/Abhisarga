import { useEffect, useState } from 'react'
import backgroundImage from "../assets/background.png";
import Modal from '../components/Modal';
import RegistrationCard from '../components/RegistrationCard';
import styles from "../styles/app.module.css";

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
        width: 3975*2,
        height: 2809*2,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "100%",
          gap: "30rem",
          marginLeft: "67rem",
          paddingTop: "70rem",
          width: "23rem"
        }}
      >
        <Modal className={styles.modal}/>
        <Modal className={styles.modal}/>
        <RegistrationCard className={`${styles.modal} ${styles.reg_card}`}/>
        <Modal className={styles.modal}/>
        <Modal className={styles.modal}/>
      </div>
    </div>
  )
}

export default App
