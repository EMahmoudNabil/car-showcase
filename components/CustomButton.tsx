"use client"

import { customButtomProps } from "@/types"

const CustomButton = ({title,containerStyle,handleClick,btnType}:customButtomProps) => {
  return (
    <>
    <button 
    disabled={false} 
    type={btnType||"button"} 
    className={`custom-btn ${containerStyle}`} 
    onClick={handleClick}>
    <span className={`flex-1`}></span>
        {title}
    </button>
    </>
  )
}

export default CustomButton
