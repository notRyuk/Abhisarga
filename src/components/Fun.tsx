import React, { CSSProperties } from 'react';
import styles from '../styles/prizes.module.css';
import arrowImage from "../assets/arrow.svg";

interface Props {
  sx?: CSSProperties
  color: string
}

const Prizes = ({ sx, color }: Props) => {
  return (
    <div 
      style={{
        ...sx,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: `8px solid ${color}`,
        padding: 10,
        borderRadius: 15,
        animation: "transform 0.2s",
        backgroundColor: color
      }}
      className={styles.main}
    >
      <img 
        src={arrowImage} 
        alt="arrow"
        style={{
          transform: "rotateZ(180deg) rotateX(180deg)",
        }}
      />
      <div 
        className={styles.black} 
        style={{ 
          width: "40%", 
          padding: "2rem", 
          fontSize: "1.3rem",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          borderRadius: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        DON'T FORGET TO HAVE FUN!
      </div>
    </div>
  )
}

export default Prizes