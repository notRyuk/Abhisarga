import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/navigation.module.css'

const Navigation = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])
  return (
    <>
        <button
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
                top: 10,
                right: 10,
                padding: ".5rem",
                paddingRight: ".5rem",
                // gap: ".5rem",
                border: "4px 4px 8px 8px",
                borderStyle: "solid",
                borderColor: "black",
                fontSize: "30px",
                borderRadius: "10px",
                backgroundColor: "white",
                zIndex: "1000",
                cursor: "pointer"
            }}
            // className={styles.main}
        >
            <MenuIcon
                sx={ width > 600 && {
                    marginRight: ".5rem"
                }}
            />
            {window.innerWidth > 600 &&
                <span>MENU</span>
            }
        </button>
    </>
  )
}

export default Navigation