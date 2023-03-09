import React from 'react';
import { alpha } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/eventCard.module.css'
import { Event } from '../helper';

interface Props {
  event: Event
}

const NameCard = ({ event }: Props) => {
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
              color: "#CA7CD8",
              alignItems: "center"
            }}
          >
            <CurrencyRupeeIcon 
              fontSize='medium'
            />
            {" "}{event.pool}
          </div>
        </div>
        <p style={{
          marginTop: "-1%",
          fontSize: "2.5rem",
          fontWeight: "600",
          letterSpacing: "2px",
        }}>
          {event.name || ""}
        </p>
        <hr 
          style={{
            color: "white",
            marginTop: "-2%",
            width: "100%",
            border: "1px dotted",
          }} 
        />
        <img 
          src='https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png'
          alt='hackathon'
          width={'90%'}
          style={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            marginTop: "10px",
            border: "5px solid white"
          }}
        />
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
          {event.description || ""}
          {event.description && <hr 
            style={{
              color: "white",
              marginTop: "3%",
              width: "100%",
              border: "1px dotted",
            }} 
          />}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingTop: "2rem"
            }}
          >
            {
              event.rounds?.map((round, i) => (
                <div
                  style={{
                    border: "4px solid white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "5px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 3px",
                      fontSize: "15px"
                    }}
                  >
                    <h2>Round {round.roundNumber || i}</h2>
                    <p style={{backgroundColor: "white", color: "#CA7CD8", borderRadius: "2px"}}>{round.type || "OFFLINE"}</p>
                  </div>
                  {round.roundDesc && (
                    <>
                      <hr
                        style={{
                          color: "white",
                          marginTop: "3%",
                          width: "100%",
                          border: "1px dotted",
                        }} 
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: "0 3px",
                          fontSize: "15px"
                        }}
                        >
                        <h2>Description</h2>
                        {round.roundDesc?.map(e => <p>{e}</p>)}
                      </div>
                    </>
                  )}
                  {round.roundRules && (
                    <>
                      <hr
                        style={{
                          color: "white",
                          marginTop: "3%",
                          width: "100%",
                          border: "1px dotted",
                        }} 
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0 3px",
                          fontSize: "15px",
                          flexDirection: "column",
                          textAlign: "left"
                        }}
                      >
                        <h2>Rules</h2>
                        <ul>
                          {round.roundRules?.map(e => <li>{e}</li>)}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default NameCard