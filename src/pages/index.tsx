import { useEffect, useState } from 'react'
import backgroundImage from "../assets/background.png";
import Logo from '../components/Logo';
import Modal from '../components/Modal';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  setTimeout(() => setIsLoading(false), 3000)
  useEffect(() => {
    const element = document.getElementsByClassName("App")[0]
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
      className="App"
      style={{
        width: 3975*2,
        height: 2809*2,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      }}
    >
      <Logo 
        sx={{
          scale: "0.2515",
          transform: "translate(5140px, 7370px)",
          backgroundColor: "#acacab"
        }}
      />
      <Modal />
    </div>
  )
}

export default App
