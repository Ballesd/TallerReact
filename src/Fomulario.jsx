import React from "react";
 
export function Formulario(){
    return(
        <center>
            <form >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre de la persona</label>
                    <input type="text" class="form-control" id="exampleInputNombre" aria-describedby="nameHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-success">Enviar</button>
            </form>
        </center>
    )
}