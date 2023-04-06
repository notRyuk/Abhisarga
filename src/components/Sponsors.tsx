import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'
import foxconn from '../assets/foxconn.png'
import sonata from '../assets/sonata.png'
import sundaram from '../assets/sundaram.png'
import tnpl from '../assets/tnpl.png'
import axisbank from '../assets/AXISBANK.BO_BIG.png'
import cityunionbank from '../assets/city-union-bank-logo-D71F765DDB-seeklogo.com.png'
import indianbank from '../assets/indian-bank.png'
import indianoil from '../assets/indian-oil.png'
import nlc from '../assets/nlc.png'
import sbi from '../assets/sbi.png'
import sricity from '../assets/sricity.png'

interface Props {
    sx?: CSSProperties
    color: string
}

const Sponsors = ({ sx, color }: Props) => {
  return (
    <div className={styles.main} style={{...sx, color, borderColor: color, marginTop: "0", paddingBottom: "0", justifyContent: "flex-start"}}>
        <p className={styles.heading} style={{ color, margin: "0", padding: "1rem" }}>
            SPONSORS
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "0"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <div style={{maxWidth: "50%"}}>
              <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                padding: "0",
                margin: "0",
                marginTop: "10px"
              }}
              >TITLE SPONSORS</p>
              <div 
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-evenly",
                  maxHeight: "4rem"
                }}
              >
                {/* <img width={'25%'} src={axisbank}></img> */}
                <img width={'25%'} src={sbi}></img>
              </div>
            </div>
            <div style={{maxWidth: "50%"}}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  padding: "0",
                  margin: "0",
                  marginTop: "10px"
                }}
              >PLATINUM SPONSORS</p>
              <div 
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-evenly",
                  maxHeight: "4rem"
                }}
              >
                <img width={'18%'} src={nlc}></img>
                <img width={'18%'} src={sricity}></img>
              </div>
            </div>
          </div>
          
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              padding: "0",
              margin: "0",
              marginTop: "20px"
            }}
          >GOLD SPONSOR</p>
          <div 
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              maxHeight: "4rem"
            }}
          >
            <img width={'12%'} src={cityunionbank}></img>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              padding: "0",
              margin: "0",
              marginTop: "20px"
            }}
          >OTHER SPONSORS</p>
          <div 
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "4rem",
              flexWrap: "wrap",
              flex: "0 1",
              gap: "10px"
            }}
          >
            <img width={'75px'} src={indianbank}></img>
            <img width={'75px'} src='https://gl-m.linker-cdn.net/logo/6e0/6e07b8256ccd2356be4cc9c07fc5e739_t.jpg'></img>
            <img width={'75px'} src={indianoil}></img>
            <img width={'75px'} src={foxconn}></img>
            <img width={'75px'} src={sonata}></img>
            <img width={'100px'} src={sundaram}></img>
            <img width={'75px'} src={tnpl}></img>
          </div>
      </div>
    </div>
  )
}

export default Sponsors