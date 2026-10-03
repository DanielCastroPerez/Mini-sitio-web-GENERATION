import { comidaMexicana } from "./data/comidaMexData.js";

const CardComida = document.querySelector(".ComidaShow");

const Comida = comidaMexicana
  .map(
    (data) => `
  <!-- CARD INDIVIDUAL -->
  <div class="col">
    <div class="card h-100 shadow-sm">
      <img src="${data.imagen}" class="card-img-top" alt="${data.altText}">
      <div class="card-body d-flex flex-column text-center">
        <h5 class="card-title">${data.titulo}</h5>
        <p class="card-text text-muted">${data.altText}</p>
        <button
          type="button"
          class="btn btn-outline-danger mt-auto"
          data-bs-toggle="modal"
          data-bs-target="#MasDetalle-${data.id}"
        >
          Más detalle
        </button>
      </div>
    </div>
  </div>

  <!-- MODAL DE DETALLES -->
  <div
    class="modal fade"
    id="MasDetalle-${data.id}"
    tabindex="-1"
    aria-labelledby="titulo-${data.id}"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <!-- 1. HEADER CON IMAGEN Y TÍTULO -->
        <div class="modal-header p-0 position-relative border-0 bg-dark text-white overflow-hidden">
          <div class="row g-0 w-100 align-items-center">
            <div class="col-md-7 p-3">
              <h2 class="modal-title h3" id="titulo-${data.id}">${data.titulo}</h2>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- 2. BODY CON FILA DE 3 COLUMNAS -->
        <div class="modal-body p-4">
          <div class="row g-4">
            
            <!-- Columna 1: Descripción -->
            <div class="col-md-4">
              <h5 class="fw-bold">Descripción</h5>
              <p class="text-muted small">
                ${data.descripcion}
              </p>
            </div>

            <!-- Columna 2: Ingredientes -->
            <div class="col-md-4">
              <h5 class="fw-bold">Ingredientes</h5>
              <ul class="list-unstyled small">
                ${data.ingredientes.map((ing) => `<li class="mb-1">• ${ing}</li>`).join("")}
              </ul>
            </div>

            <!-- Columna 3: Detalles y Categorías -->
            <div class="col-md-4">
              <div class="mb-2">
                <span class="fw-bold d-block small">Categoría:</span>
                <span class="badge bg-secondary">${data.categoria}</span>
              </div>
              
              <div class="mb-2">
                <span class="fw-bold d-block small">Región:</span>
                <span class="badge bg-info text-dark">${data.region}</span>
              </div>

              <div class="mb-2">
                <span class="fw-bold d-block small">Tipo:</span>
                <span class="badge bg-success">${data.tipo}</span>
              </div>

              <!-- Popularidad generada dinámicamente con estrellas -->
              <div>
                <span class="fw-bold d-block small">Popularidad:</span>
                <div class="text-warning fs-6">
                  ${"★".repeat(data.nivelPopularidad)}${"☆".repeat(5 - data.nivelPopularidad)}
                </div>
              </div>
            </div>

          </div> <!-- Cierre de .row -->
        </div> <!-- Cierre de .modal-body -->

        <!-- 3. FOOTER -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>

      </div>
    </div>
  </div>
`
  )
  .join("");

if (CardComida) {
  CardComida.insertAdjacentHTML("beforeend", Comida);
}