import { MouseEventHandler } from "react";

export interface customButtomProps{
    title: string;
    containerStyle?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>

}