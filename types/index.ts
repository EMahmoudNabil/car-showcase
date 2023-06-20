';
import { MouseEventHandler } from "react";

export interface customButtomProps{
    title: string;
    containerStyle?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType:"button" | "submit" ;
}

export interface SearchManufactureProps{
    selected: string;
    setSelected:(selected:string)=>void;
   
}