import React from "react";

export function Tabla() {
  return (
    <div class="container mx-auto my-4 border rounded-circle">
      <table class="table table-hover table-info borde border border-info ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Danny Javier</td>
            <td>Vasquez C</td>
            <td>@danny</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Juan Camilo</td>
            <td>Ballesteros</td>
            <td>@Balles</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Erik</td>
            <td>Palacio Castellanos</td>
            <td>@Erik</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
