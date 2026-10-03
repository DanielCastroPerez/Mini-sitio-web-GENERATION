export const getNavar =document.querySelector(".navbarDOM");
const navbar = 
`
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <!--navbar-brand d-flex align-items-center gap-2-->
      <div class="container-fluid">
        <i
          class="bi bi-suitcase-lg-fill navbar-brand d-flex align-items-center gap-2"
          >EXPLORA LA CDMX</i
        >
        <!--Boton de imagen + texto-->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="BienvenidaComida.html">GASTRONOMIA MEXICANA</a>
            </li>
            <li class="nav-item ms-lg-3">
              <!-- *No sobre cargar un boton a funciona como uno-->
              <a class="btn btn-warning fw-bold" href="#">QUIERO VIAJAR YA</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
`
getNavar.insertAdjacentHTML("beforeend",navbar)