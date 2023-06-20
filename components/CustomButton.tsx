"use client"

import { customButtomProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title,containerStyle,handleClick,btnType,textStyles,rightIcon}:customButtomProps) => {
  return (
    <>
    <button 
    disabled={false} 
    type={btnType||"button"} 
    className={`custom-btn ${containerStyle}`} 
    onClick={handleClick}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image src={rightIcon}
          alt="right icon"
          className="object-contain"
          width={20}
          height={20} />
        </div>
      )}
    </button>
    </>
  )
}

export default CustomButton
