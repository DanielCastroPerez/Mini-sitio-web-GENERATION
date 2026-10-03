export const  footerhtml = document.querySelector(".footerDom")

export const footerD = 
`
<div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h4 class="h5">Secciones</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light text-decoration-none">Inicio</a>
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none">Destinos</a>
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none">Eventos</a>
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Gastronomía</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none">Nosotros</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4 class="h5">Recursos CDMX</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-light text-decoration-none">Mapas</a>
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Transporte</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none">Clima</a>
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Seguridad</a
                >
              </li>
              <li>
                <a href="#" class="text-light text-decoration-none"
                  >Cultura CDMX</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4 class="h5">Nuestras Redes</h4>
            <div class="d-flex gap-3 fs-4">
              <a href="#" class="text-light"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-light"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
`

footerhtml.insertAdjacentHTML("beforeend",footerD)