import React from 'react';
import { alpha } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/eventCard.module.css'

const NameCard = () => {
  return (
    <>
    <div 
      style={{ 
        backgroundColor: "#CA7CD8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        padding: "3%",
        paddingTop: "1%",
        paddingBottom: "2%",
        borderRadius: "15px",
        color: "white",
        maxWidth: "700px",
        minWidth: "340px"
      }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              border: "5px solid #CA7CD8",
              borderRadius: "10px",
              padding: "8px",
              backgroundColor: "white",
              color: "#CA7CD8"
            }}
          >
            T01
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              border: "5px solid #CA7CD8",
              borderRadius: "10px",
              padding: "8px",
              backgroundColor: "white",
              color: "#CA7CD8"
            }}
          >
            <ComputerIcon 
              fontSize='medium'
            />
          </div>
        </div>
        
        <p style={{
          marginTop: "-1%",
          fontSize: "2.5rem",
          fontWeight: "600",
          letterSpacing: "2px",
        }}>
            IIITS HACKATHON
        </p>
        {/* <ComputerIcon 
          sx={{
            marginTop: "-1%",
            scale: "3"
          }}
        /> */}
        <hr 
          style={{
            color: "white",
            marginTop: "-2%",
            width: "100%",
            border: "1px dotted",
          }} 
        />
        <img 
          src='https://thumbs.dreamstime.com/b/coming-soon-glowing-purple-violet-neon-text-brick-wall-204111095.jpg'
          alt='hackathon'
          width={'90%'}
          style={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            marginTop: "10px",
            border: "5px solid white"
          }}
        ></img>
        <div 
          style={{
            width: "90%",
            minWidth: "300px",
            fontSize: "1.25rem",
            fontWeight: "400",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "1rem"
          }}
        >
          <p 
            style={{
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: "500",
              letterSpacing: "1.3px"
            }}
          >
              "Talk is cheap. Show me the code."
          </p>
            <hr 
            style={{
              color: "white",
              marginTop: "3%",
              width: "100%",
              border: "1px dotted",
            }} 
          />
          Participate in this 48 hour hackathon based on the one of 10 themes! You can participate as a team or as an individual.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "320px",
            color: "white",
          }}
          className={styles.flex}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              backgroundColor: alpha("#CA7CD8", 0.5),
              // padding: "5px 5px 5px 5px",
              textAlign: "center",
              borderRadius: "10px",
              minWidth: "140px",
              fontFamily: "ArcadeClassic",
              fontSize: "1.2rem",
              border: "4px solid white",
              paddingBottom: "1rem"
            }}
          >
            <p
              style={{
                marginBottom: "15px"
              }}
            >
              TIMINGS
            </p>
            07/04/2023 - 09/04/2023
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: alpha("#CA7CD8", 0.5),
              textAlign: "center",
              borderRadius: "10px",
              minWidth: "140px",
              fontSize: "1.2rem",
              border: "4px solid white",
            }}
          >
            <p
              style={{
                marginBottom: "-5px"
              }}
            >
              PRIZES
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "ArcadeClassic",
                gap: "0.2rem",
                
              }}
            >   
                <p
                  style={{
                    // marginTop: "-3px",,
                    fontFamily: "ArcadeClassic"
                    // lineHeight: "15px"
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      color: "gold"
                    }}
                  /> 1L
                </p>
                <p
                  style={{
                    // marginTop: "-8px",,
                    fontFamily: "ArcadeClassic"
                    
                    // lineHeight: "18px"
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      color: "silver"
                    }}
                   /> 50k
                </p>
                <p
                  style={{
                    // marginTop: "-7px",
                    fontFamily: "ArcadeClassic"
                    // lineHeight: "15px"
                  }}
                >
                  <EmojiEventsIcon
                    sx={{
                      color: "#BE7023"
                    }}
                   /> 20k
                </p>
            </div>
          </div>
        </div>
        </div>
        {/* <marquee bgcolor = "green" direction = 'left' loop='' scrolldelay='2' >
              <p>hello hello</p>
              <p>hello hello</p>
        </marquee> */}
        {/* <Marquee pauseOnHover>
          <div
            style={{
              
            }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex qui soluta, error nostrum eveniet quidem molestiae ut deleniti enim.</p>
          </div>
          <div>
            <p>Hello bwdbwdb</p>
          </div>
          <div>
            <p>Hello bwdbwdb</p>
          </div>
          <div>
            <p>Hello bwdbwdb</p>
          </div>
        </Marquee> */}
        <Accordion
          sx={{
            width: "80%",
            maxWidth: "780px",
            minWidth: "340px",
            marginTop: "1rem",
            borderRadius: "10px",
            bgcolor: "#CA7CD8",
            border: "5px solid white"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderRadius: "20px",
              height: "3rem",
              color: "white",
              fontSize: "1.5rem"
            }}
          >
            <p
              style={{
                fontFamily: "ArcadeClassic",
                fontSize: "2rem"
              }}
            >RULES</p>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "white"
            }}
          >
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sit unde odio, inventore soluta sequi error itaque cumque cupiditate eius!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sit unde odio, inventore soluta sequi error itaque cumque cupiditate eius!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sit unde odio, inventore soluta sequi error itaque cumque cupiditate eius!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sit unde odio, inventore soluta sequi error itaque cumque cupiditate eius!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sit unde odio, inventore soluta sequi error itaque cumque cupiditate eius!</li>
            </ul>
          </AccordionDetails>
      </Accordion>
      </>
  )
}

export default NameCard