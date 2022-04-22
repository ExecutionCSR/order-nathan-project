import React from "react";

interface ButtonProps {
  title: string,
  onClick?: () => void,
  className?: string,
}



export function Button(props : ButtonProps){
  return(
    <button  type="button" className={props.className} onClick={props.onClick}>{props.title}</button>
  )
}
