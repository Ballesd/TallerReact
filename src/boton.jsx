import React from "react";

export function Boton(){
    function alerta(){
        alert("Botón de alerta");
    }
    return (
        <center>
            <button type="button" class="btn btn-info" onClick = {()=>{alerta()}}>Botón Alerta</button>
        </center>       
    )
}
