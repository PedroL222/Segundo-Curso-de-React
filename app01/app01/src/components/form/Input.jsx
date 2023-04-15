
function Input({label,type,placeholder,name,state,onChange}) {


    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input onChange={(e)=>onChange(e)} value={state} type={type} name={name} placeholder={placeholder} />
        </>
    )
  }
  
  export default Input;
  