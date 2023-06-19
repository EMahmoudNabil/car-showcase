"use client"

import { customButtomProps } from "@/types"

const CustomButton = ({title,containerStyle,handleClick}:customButtomProps) => {
  return (
    <>
    <button 
    disabled={false} 
    type={"button"} 
    className={`custom-btn ${containerStyle}`} 
    onClick={handleClick}>
    <span className={`flex-1`}></span>
        {title}
    </button>
    </>
  )
}

export default CustomButton
