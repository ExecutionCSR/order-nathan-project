import React from "react";

interface Props {
  title: string,
  onClick: () => void,
  className: string,
}



export function Button(props : Props){
  return(
    <button  className={props.className} onClick={props.onClick}>{props.title}</button>
  )
}
