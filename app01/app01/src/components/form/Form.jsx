import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useState } from 'react';

function Form({onSubmit}) {

    const [nome,setNome] = useState("");

    const [notas,setNotas] = useState({nota1:0,nota2:0});

    const [somaNotas,setSomaNotas] = useState(0);

    const handleOnChange=(e)=>{
       
        if(e.target.getAttribute('name')=="nota1"){
            setNotas({nota1:e.target.value,nota2:notas.nota2});
        }else if(e.target.getAttribute('name')=="nota2"){
            setNotas({nota1:notas.nota1,nota2:e.target.value});
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <Input onChange={setNome} label={"Seu nome:"} type={"text"} placeholder={"Escreva seu nome..."} name={"nome"}/>
        <SubmitButton value={"Enviar Daods Pessoais"} />
        <p>Nome: {nome}</p>

        <Input onChange={handleOnChange} label={"Nota1:"} type={"number"} placeholder={"Escreva a nota1..."} name={"nota1"}/>
        <Input onChange={handleOnChange} label={"Nota2:"} type={"number"} placeholder={"Escreva a nota2..."} name={"nota2"}/>
        <p>Notas1: {notas.nota1}</p>
        <p>Notas2: {notas.nota2}</p>
        <button onClick={(e)=>{ 
            e.preventDefault();
            setSomaNotas(parseFloat(notas.nota1) + parseFloat(notas.nota2))}}>Somar Notas</button>
        <p>Soma das Notas:{somaNotas}</p>
    </form>
  )
}

export default Form;
