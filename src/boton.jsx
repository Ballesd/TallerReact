import React from "react";

export function Boton(){
    function alerta(){
        alert("Botón de alerta");
    }
    return (
        <center class="pb-4">
            <button type="button" class="btn btn-info" onClick = {()=>{alerta()}}>Botón Alerta</button>
        </center>       
    )
}
