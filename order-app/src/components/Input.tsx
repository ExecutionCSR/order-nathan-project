interface InputProps {
  title?: string,
  classInput?: string,
  type: string,
  placeholder?: string
  classDiv?: string  
  required?: boolean
}



export function Input(props : InputProps){
    return(
    <div style={{padding:5}} className={props.classDiv}>
        <label >{props.title}</label>
        <input type={props.type} className={props.classInput}  placeholder={props.placeholder} required={props.required}/>
    </div>
    )
}
