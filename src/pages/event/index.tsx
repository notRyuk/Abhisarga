import React from 'react'
import NameCard from '../../components/NameCard'
import { alpha } from '@mui/material'
import styles from '../../styles/namecard.module.css'

const index = () => {
  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "1fr 2fr 1fr",
        // backgroundColor: alpha("#CA7CD8", 0.2),
        // padding: 0,
        // margin: 0
      }}
      className={styles.main}
    >
      {/* {window.innerWidth > 768 && 
      <div>
        HELLO
      </div>
      } */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          // backgroundImage: "",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: alpha("#CA7CD8", 0.2),
          top: 0,
          left: 0,
          margin: 0,
          boxSizing: "border-box",
          minHeight: "100vh",
          marginTop: "1rem"
        }}
      >
        <NameCard />
      </div>
      {/* {window.innerWidth > 768 && 
      <div>HELLO</div>
      } */}
    </div>
  )
}

export default index