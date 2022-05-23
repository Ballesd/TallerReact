import React from 'react'

export function Nabvar() {
  return (
    <nav class="sticky-top px-4 navbar navbar-expand-lg navbar-light bg-warning">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Caracteristicas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                    </li>
                </ul>
                <span class="navbar-text">
                    Documentos
                </span>
            </div>
        </nav>
  )
}
