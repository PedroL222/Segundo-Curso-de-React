import React from "react";

class Classe extends React.Component{

    constructor(props){
        super(props);
            this.state={
                acordado:false,
                dinheiro:0,
            }

    }

    acordar(){
        this.setState({acordado:!this.state.acordado})
    }

    enriquecer(){
        this.setState({dinheiro: this.state.dinheiro + 1})
    }

    render(){
        return(
            <>
                <h1>Primeiro Componente de Classe</h1>
                <p>Pessoa: {this.props.pessoa}</p>
                <p>Dormindo: {this.state.acordado ? 'Não' : 'Sim'}</p>
                <p>Dinheiro: {this.state.dinheiro}</p>
                <button onClick={()=>this.acordar()}>Acordar</button>
                <button onClick={()=>this.enriquecer()}>Enriquecer</button>
            </>
        )
    }
}

export default Classe