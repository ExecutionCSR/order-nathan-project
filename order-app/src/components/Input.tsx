interface InputProps {
  title?: string,
  classInput: string,
  type: string,
  placeholder?: string  
}



export function Input(props : InputProps){
    return(
    <div style={{padding:5}}>
        <label >{props.title}</label>
        <input type={props.type} className={props.classInput}  placeholder={props.placeholder}/>
    </div>
    )
}
