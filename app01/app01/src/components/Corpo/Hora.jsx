
function Hora(){

    
    let hora = new Date().toLocaleTimeString();

    return(
        <p>Hora: {hora}</p>
    )
}

export default Hora