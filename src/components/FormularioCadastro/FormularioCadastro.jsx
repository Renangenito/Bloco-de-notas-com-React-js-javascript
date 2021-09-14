import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{
    render(){
        return(
            <form className="formulario-cadastro">
            <input className="campo-texto" type="text" placeholder="Título" />
            <textarea rows={15} className="area-texto" placeholder="Escreva sua nota..." />
            <button className="botao" type="submit">Criar nota</button>
          </form>
        )
    }
}

export default FormularioCadastro;