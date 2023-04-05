import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
    sx?: CSSProperties
    color: string
}

const Sponsors = ({ sx, color }: Props) => {
  return (
    <div className={styles.main} style={{...sx, color, borderColor: color, marginTop: "0", paddingBottom: "0", justifyContent: "flex-start"}}>
        <p className={styles.heading} style={{ color, margin: "0", padding: ".5rem" }}>
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
          {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}> */}
            <div>
              <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                padding: "0",
                margin: "0",
                marginTop: "-10 px"
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
                <img width={'15%'} src='https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/12/16075732/nationalherald_2020-03_2a0bf455-a127-4b79-92b5-5c0941549436_AXIS.png'></img>
                <img width={'15%'} src='https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png'></img>
              </div>
            </div>
            <div>
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
                <img width={'15%'} src='https://companieslogo.com/img/orig/NLCINDIA.NS-fdcb06f1.png?t=1604232066'></img>
                <img width={'15%'} src='https://www.sricityjobs.in/img/SC-Logo.png'></img>
              </div>
            </div>
          {/* </div> */}
          
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              padding: "0",
              margin: "0",
              // marginTop: "20px"
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
            <img width={'15%'} src='https://images.moneycontrol.com/static-mcnews/2020/06/city-union-bank-770x433.jpg?impolicy=website&width=770&height=431'></img>
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
            <img width={'75px'} src='https://www.vhv.rs/dpng/d/438-4388830_indian-bank-logo-download-vector-indian-bank-logo.png'></img>
            <img width={'75px'} src='https://gl-m.linker-cdn.net/logo/6e0/6e07b8256ccd2356be4cc9c07fc5e739_t.jpg'></img>
            <img width={'75px'} src='https://www.companieshistory.com/wp-content/uploads/2013/07/Indian-Oil.png'></img>
            <img width={'75px'} src='https://logos-world.net/wp-content/uploads/2023/01/Foxconn-Logo.png'></img>
            <img width={'75px'} src='https://upload.wikimedia.org/wikipedia/en/c/c8/Sonata_Software_Logo.png'></img>
            <img width={'100px'} src='https://brendle-representadas.es/wp-content/uploads/2021/04/BMQRep_Logos_Interior_Sundram.png'></img>
            <img width={'75px'} src='http://pwidirectory.haymarketsac.in/wp-content/uploads/2019/02/TNPL-Logo1.jpg'></img>
          </div>
      </div>
    </div>
  )
}

export default Sponsors