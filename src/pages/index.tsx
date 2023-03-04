import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  setTimeout(() => setIsLoading(false), 3000)
  useEffect(() => {
    const element = document.getElementsByClassName("App")[0]
    const view = document.defaultView
    view.scrollTo({
      left: (element.clientWidth-view.innerWidth)/2,
      top: (element.clientHeight-view.innerHeight)/2
    })
  }, [])
  
  return (
    <div 
      className="App"
      style={{
        width: 4000,
        height: 2000,
        backgroundImage: "linear-gradient(red, yellow)",
        display: "flex",
        justifyContent: "center",
        "alignItems": "center"
      }}
    >
      <h1>Something</h1>
    </div>
  )
}

export default App
