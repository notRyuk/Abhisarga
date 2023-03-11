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
  color?: string
}

const NameCard = ({ event, color }: Props) => {
  return (
    <>
      <div 
        style={{ 
          backgroundColor: color,
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
          minWidth: "340px",
          marginTop: window.innerWidth < 900 ? "110px" : "30px"
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
              border: `5px solid ${color}`,
              borderRadius: "10px",
              padding: "8px",
              backgroundColor: "white",
              color: color
            }}
          >
            T01
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              border: `5px solid ${color}`,
              borderRadius: "10px",
              padding: "8px",
              backgroundColor: "white",
              color: color,
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
          fontFamily: "NimbusSansExtended"
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
          src={event.banner || 'https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png'}
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
          {event.description && <hr 
            style={{
              color: "white",
              marginTop: "3%",
              width: "100%",
              border: "1px dotted",
            }} 
          />}
          {event.description || ""}
          {event.registration && (
            <>
              <hr
                style={{
                  color: "white",
                  // marginTop: "3%",
                  width: "100%",
                  border: "1px dotted",
                }} 
              />
              <ul style={{listStyle: "none", fontSize: 18}}>
                <li style={{textAlign: "start"}}>Registration starts from {event.registration.start}</li>
                <li style={{textAlign: "start"}}>Registration end on {event.registration.end}</li>
              </ul>
              <hr
                style={{
                  color: "white",
                  // marginTop: "3%",
                  width: "100%",
                  border: "1px dotted",
                }} 
              />
            </>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingTop: "2rem"
            }}
          >
            {event.rounds?.map((round, i) => (
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
                    padding: "0 2rem",
                    fontSize: "15px"
                  }}
                >
                  <h2>Round {round.roundNumber || i}</h2>
                  <p style={{backgroundColor: "white", color: color, borderRadius: "2px", padding: 2}}>{round.type || "OFFLINE"}</p>
                </div>
                {round.roundDesc && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0 2rem",
                        fontSize: "15px",
                        textAlign: "start"
                      }}
                    >
                      <p>{round.roundDesc?.join("\t")}</p>
                    </div>
                  </>
                )}
                {round.roundRules && (
                  <>
                    <hr
                      style={{
                        color: "white",
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
                        textAlign: "start"
                      }}
                    >
                      <p style={{textAlign: "start", fontSize: 25}}>Rules</p>
                      <ul style={{fontSize: 18}}>
                        {round.roundRules?.map((e, k) => (
                          <li style={{textAlign: "start"}} key={k}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                {round.event && (
                  <>
                    <hr
                      style={{
                        color: "white",
                        // marginTop: "3%",
                        width: "100%",
                        border: "1px dotted",
                      }} 
                    />
                    <ul style={{listStyle: "none", fontSize: 18}}>
                      <li style={{textAlign: "start"}}>Event starts from {round.event.start}</li>
                      <li style={{textAlign: "start"}}>Event end on {round.event.end}</li>
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          {event.rules && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "2rem"
              }}
            >
              <hr
                style={{
                  color: "white",
                  width: "100%",
                  border: "1px solid",
                }} 
              />
              <h2 style={{ fontFamily: "NimbusSansExtended"}}>Rules</h2>
              <ul style={{fontSize: 18}}>
                {event.rules?.map((e, i) => (
                  <li style={{textAlign: "start"}} key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}
          {event.link && (
            <a href={event.link}>
              <button 
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  border: `5px solid ${color}`,
                  borderRadius: "10px",
                  padding: "8px",
                  backgroundColor: "white",
                  color: color,
                  cursor: "pointer"
                }}
              >
                Register
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default NameCard