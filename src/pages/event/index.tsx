import React from 'react'
import NameCard from '../../components/NameCard'
import { alpha } from '@mui/material'

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // backgroundImage: "",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha("#CA7CD8", 0.2),
        top: 0,
        left: 0,
        margin: 0,
        boxSizing: "border-box",
        minHeight: "100vh"
      }}
    >
      <NameCard />
    </div>
  )
}

export default index