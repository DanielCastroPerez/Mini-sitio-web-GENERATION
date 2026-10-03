import { destinosCDMX } from "./data/destinosData.js";

const principal = destinosCDMX.filter(
  (destino) => destino.categoria === "principal",
); // obtengo solo los datos de la etiqueta categoria principal
const naturaleza = destinosCDMX.filter(
  (destino) => destino.categoria === "naturaleza",
); // obtengo solo los datos de la etiqueta categoria naturaleza

export const cardsPrincipal = document.querySelector(".destinoPrincipal");

const cards = principal
  .map(
    (data) =>
      `
    <div class="card">
          <img
            src=${data.imagen}
            class="card-img-top"
            alt=${data.altText}
          />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title h5">${data.titulo}</h3>
            <p class="card-text flex-grow-1">
              ${data.descripcion}
            </p>
            <div class="Star-Icons mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-star-fill text-warning"></i>
              <span class="fw-bold">${data.calificacion}</span>
            </div>
            <a
              href=${data.urlDetalles}
              class="btn btn-primary w-100"
            >
              Ver Detalles
            </a>
          </div>
        </div>
`,).join("");

if (cardsPrincipal) {
  cardsPrincipal.insertAdjacentHTML("beforeend", cards);
}

//Cars para la seccion de naturaleza

export const cardsNaturaleza = document.querySelector(".destinoNaturaleza");

const carsNat = naturaleza
  .map(
    (dataNat) =>
      `
<div class="card">
          <img
            src=${dataNat.imagen}
            class="card-img-top"
            alt=${dataNat.altText}
          />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title h5">${dataNat.titulo}</h3>
            <p class="card-text flex-grow-1">
              ${dataNat.descripcion}
            </p>
            <div class="Star-Icons mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-star-fill text-warning"></i>
              <span class="fw-bold">${dataNat.calificacion}</span>
            </div>
            <a
              href=${dataNat.urlDetalles}
              class="btn btn-primary w-100"
            >
              Ver Detalles
            </a>
          </div>
        </div>
`,).join("");

if (cardsNaturaleza) {
  cardsNaturaleza.insertAdjacentHTML("beforeend", carsNat);
}