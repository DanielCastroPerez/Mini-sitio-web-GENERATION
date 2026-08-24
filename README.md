# 🌳 Recomendador de actividades para el fin de semana

Una página web que recomienda actividades para disfrutar el fin de semana, salir de la rutina y desconectarse un momento del trabajo y la computadora. 💻➡️🌳

> Especialmente pensada para programadores que necesitan recordar que también existe el mundo fuera del código. 😎

---

## 🧠 1. Proceso de desarrollo

Durante la práctica seguí el siguiente ciclo de trabajo:

**PIENSO → INTENTO → PREGUNTO → COMPRENDO → MODIFICO → PRUEBO → EXPLICO**

### Paso 1 — 🧠 PIENSO

Antes de comenzar a programar, definí las siguientes ideas:

- **¿Qué voy a recomendar?**
  Actividades para realizar durante el fin de semana.

- **¿A quién va dirigida la página?**
  A cualquier persona, pero especialmente a programadores, para recordarles que deben salir un rato de casa y tocar pasto. 🌱😂

- **¿Qué información tendrá cada recomendación?**
  Actividades que se pueden realizar, lugares o cosas que hacer y algunas recomendaciones sobre qué comer.

- **¿Qué quiero que suceda cuando el usuario interactúe con mi página?**
  Quiero motivarlo a salir de casa, olvidarse por un momento del trabajo y disfrutar de su tiempo libre.

---

Antes de utilizar IA, realicé una primera versión del proyecto utilizando los conocimientos que ya tenía.

## ¿Qué puedo resolver utilizando lo que ya sé?

> Puedo hacer una estructura base de HTML + Bootstrap.

### ¿Qué intenté hacer?

> Una esttructura limpia y entendible a cualquier programador que lo ve.

### ¿Qué logré construir antes de utilizar IA?

> Un navar y un conjunto de tarjetas con un destino

### Primer commit

**Commit:**

> `git coomit -m"Primera parte. Se agregan 6 destinos al archivo  HTML.`

---

# 🤖 3. PREGUNTO A LA IA

Durante el desarrollo utilicé IA como apoyo para comprender conceptos, revisar mi código y mejorar el proyecto.

---

## 🟢 Prompt 1 — Planificación / revisión inicial

### ¿Qué necesitaba?

> Que las imagenes de mis card sean del mismo tamaño y que los botones funcionaran

### ¿Qué intenté hacer?

> centrar las iamgenes dandoleas un alto y un ancho en la misma clase

### Prompt utilizado

> Actúa como un desarrollador senior experto en HTML, CSS, Bootstrap y JavaScript (nivel principiante), con amplia experiencia en la enseñanza y revisión de código para estudiantes de bootcamps.

Quiero que revises el código que te voy a proporcionar y me des una retroalimentación completa y detallada. Tu respuesta debe incluir lo siguiente:

1. **Detección de errores**: Señala cualquier error de sintaxis, lógica, buenas prácticas o malas prácticas que encuentres en mi código.
2. **Sugerencias de mejora**: Propón mejoras concretas y aplicables, mostrando ejemplos de código corregido o mejorado cuando sea necesario.
3. **Explicación del porqué**: Explica claramente el motivo de cada corrección o sugerencia, de manera que pueda entender el razonamiento detrás de ella y así aprender a aplicarla en futuros proyectos.
4. **Consejos adicionales**: Agrega recomendaciones útiles para mi nivel actual (HTML, CSS, Bootstrap y fundamentos de JavaScript como variables y tipos de datos) que me ayuden a avanzar rápidamente.

### Contexto

Actualmente estoy estudiando en un bootcamp y he aprendido HTML, CSS, Bootstrap y JavaScript, aunque por ahora solo manejo variables y tipos de datos en JavaScript (por ejemplo, string, number, boolean, null, undefined). Aún no he profundizado en estructuras de control, funciones ni manipulación del DOM.

Cuando te comparta mi código, quiero que actúes como un mentor que me guía para crecer como programador, detectando mis errores, explicándome las razones de cada uno y mostrándome el camino para mejorar mis habilidades de forma progresiva.

Formato de respuesta que prefiero:

- Respuestas claras, organizadas por secciones.
- Explicaciones sencillas y con ejemplos prácticos.
- Un tono amigable y motivador, pero técnico y preciso.

¿Estás listo para revisar mi código?

### ¿Qué respondió la IA?

> Actúa como un desarrollador senior experto en HTML, CSS, Bootstrap y JavaScript (nivel principiante), con amplia experiencia en la enseñanza y revisión de código para estudiantes de bootcamps.

Quiero que revises el código que te voy a proporcionar y me des una retroalimentación completa y detallada. Tu respuesta debe incluir lo siguiente:

1. **Detección de errores**: Señala cualquier error de sintaxis, lógica, buenas prácticas o malas prácticas que encuentres en mi código.
2. **Sugerencias de mejora**: Propón mejoras concretas y aplicables, mostrando ejemplos de código corregido o mejorado cuando sea necesario.
3. **Explicación del porqué**: Explica claramente el motivo de cada corrección o sugerencia, de manera que pueda entender el razonamiento detrás de ella y así aprender a aplicarla en futuros proyectos.
4. **Consejos adicionales**: Agrega recomendaciones útiles para mi nivel actual (HTML, CSS, Bootstrap y fundamentos de JavaScript como variables y tipos de datos) que me ayuden a avanzar rápidamente.

### Contexto

Actualmente estoy estudiando en un bootcamp y he aprendido HTML, CSS, Bootstrap y JavaScript, aunque por ahora solo manejo variables y tipos de datos en JavaScript (por ejemplo, string, number, boolean, null, undefined). Aún no he profundizado en estructuras de control, funciones ni manipulación del DOM.

Cuando te comparta mi código, quiero que actúes como un mentor que me guía para crecer como programador, detectando mis errores, explicándome las razones de cada uno y mostrándome el camino para mejorar mis habilidades de forma progresiva.

Formato de respuesta que prefiero:

- Respuestas claras, organizadas por secciones.
- Explicaciones sencillas y con ejemplos prácticos.
- Un tono amigable y motivador, pero técnico y preciso.

¿Estás listo para revisar mi código?

### ¿Qué parte utilizaré?

> las tarjetas escribiste <a href="..."><button>Ver Detalles</button></a>
> background-image
> Semántica HTML: Los navegadores y motores de búsqueda (como Google) dependen de la semántica correcta (<ul> -> <li>) para mapear la estructura de la página. Respetar las jerarquías garantiza que tu código sea accesible

### ¿Qué aprendí?

> Aprendi que no debo sopre cargar las etiquetas y que puedo usar solo un boton sin que este dentro de un li

---

## 🟢 Prompt 2 — HTML

### ¿Qué necesitaba?

> Acomodar la infomacion en un row y un colum para la informacion y el mapa

### ¿Qué intenté hacer?

> Cambiar las clases de los div

### Prompt utilizado

> esta es la segunda parte de el primer html cuando das en el boton ver detalle pero quiero hacerlo asi la informacion a la izquierda y mi tambla de horario + google maps en la derecha ya intente poner felx box y columna pero no se pone asi.-

### ¿Qué respondió la IA?

> Por qué no funcionaba la alineación de 2 columnas (Lado a Lado):Para que dos elementos se pongan uno al lado del otro en Bootstrap, necesitan estar envueltos en un contenedor padre con la clase .row, y cada uno de los bloques hijos debe tener una clase de columna (como .col-md-8 para la izquierda y .col-md-4 para la derecha).En tu código, la información principal (<main>) y el mapa (<div class="...">) están en dos bloques <div> separados uno debajo del otro, sin un .row que los contenga juntos.Error en sintaxis HTML en las clases:Escribiste <div class="container col-lg-8>: falta cerrar la comilla " al final del atributo class, lo cual rompe la lectura del archivo HTML.

### ¿Qué parte utilizaré?

> (<main>) y el mapa (<div class="...">)

### ¿Qué aprendí?

> Aprendi que se pueden agrupas en un main para despues poner una clase de boostrap

---

## 🟢 Prompt 3 — Bootstrap / CSS

### ¿Qué necesitaba?

> Darle diseño a la pagina

### ¿Qué intenté hacer?

> Realice todo correctamente

### Prompt utilizado

> en este caso ninguno ya que mi etilo salio bien

## 🟢 Prompt 4 — JavaScript

### ¿Qué intenté hacer?

> solo mostrar 3 mensajes al entrar a la pagina y mostrarlos al final con un mensaje

### Prompt utilizado

> No utilice IA

# ⭐ Prompt que más me ayudó

### ¿Cuál fue el prompt más útil y por qué?

> Analiza mi codigo y dame mejoras y sugerencias para tener un buen ccodigo limpio y organizado

---

# 🧠 4. COMPRENDO

Una de las reglas principales de la actividad fue:

> **No utilizar código que no pueda explicar.**

Cuando encontré conceptos que todavía no había aprendido, primero investigué y pregunté a la IA antes de utilizarlos.

### ¿Qué concepto nuevo comprendí gracias a la IA?

> Las diferentes clases de boostrap y que se pueden combianar sin nececidad de meter estilos

### ¿Hubo algún código que inicialmente no comprendía?

> si las clases que contenias mucha informacio

### ¿Qué hice para comprenderlo?

> Probar con diferentes clases y leer la documentacion, con ayuda de youtube

---

# 🧪 6. PRUEBO

Después de cada modificación comprobé los siguientes puntos.

## HTML / CSS / Bootstrap

- [x] ¿La página se muestra correctamente? Si funcionaron cprrectamemnte
- [x] ¿Las imágenes funcionan correctamente? Si se mostraton correctamente
- [x] ¿La grilla funciona? si
- [x] ¿La página se adapta a diferentes tamaños de pantalla? si

## JavaScript

- [x] ¿Las variables tienen los valores correctos? Si todo se muestra bien
- [x] ¿`console.log()` muestra la información esperada? si
- [x] ¿Existen errores en la consola? No nonguno

### Resultado de las pruebas

> ---
>
> ---

---

# 🐛 Reto de depuración

### ¿Encontré algún error durante el desarrollo?

> No todo bien

### ¿Qué error encontré?

> Ninguno

---

# 📚 7. EXPLICO

A continuación explico tres fragmentos de código utilizados en mi proyecto.

---

## Fragmento 1

### Código

```HTML
<div class="card-body d-flex flex-column">
            <h3 class="card-title h5">Castillo de Chapultepec</h3>
            <p class="card-text flex-grow-1">
              Imagina un santuario donde la historia imperial y la naturaleza
              viva se fusionan en el corazón de una de las metrópolis más
              vibrantes del mundo. El Bosque de Chapultepec no es solo el pulmón
              verde de la Ciudad de México; es un portal en el tiempo.
            </p>
            <div class="Star-Icons mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-star-fill text-warning"></i>
              <span class="fw-bold">4.8</span>
            </div>
            <a
              href="Detalles-Destinos/Chapultepec.html"
              class="btn btn-primary w-100"
            >
              Ver Detalles
            </a>
          </div>
```

### ¿Qué hace?

> ---

### ¿Por qué lo utilizo?

> ---

### ¿Lo generó la IA o yo?

> ---

### ¿Qué modifiqué?

> ---

---

## Fragmento 2

### Código

```javascript
// Coloca aquí tu código
```

### ¿Qué hace?

> ---

### ¿Por qué lo utilizo?

> ---

### ¿Lo generó la IA o yo?

> ---

### ¿Qué modifiqué?

> ---

---

## Fragmento 3

### Código

```html
<!-- Coloca aquí tu código -->
```

### ¿Qué hace?

> ---

### ¿Por qué lo utilizo?

> ---

### ¿Lo generó la IA o yo?

> ---

### ¿Qué modifiqué?

> ---

---

# 🛠️ Tecnologías utilizadas

- HTML
- CSS
- Bootstrap
- JavaScript
- Git
- GitHub
- Inteligencia Artificial

### IA utilizada

> ---

---

# 📁 Estructura del proyecto

```text
mi-recomendador/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── img/
│
└── README.md
```

---

# 🌱 Evolución de un prompt

## Prompt inicial

> Hazme una página de actividades para el fin de semana.

## Prompt mejorado

> ---
>
> ---
>
> ---
>
> ---

### ¿Qué mejoró entre ambos prompts?

> ---
>
> ---

---

# 🤖 Código generado por IA vs. código propio

## ¿Qué generó la IA?

> ---
>
> ---

## ¿Qué modifiqué o realicé yo?

> ---
>
> ---

## ¿Qué partes hice completamente por mi cuenta?

> ---
>
> ---

---

# 📖 Aprendizaje

### ¿Qué concepto nuevo comprendí gracias a la IA?

> ---
>
> ---

### ¿Qué aprendí durante el desarrollo del proyecto?

> ---
>
> ---

---

# 💭 Reflexión

### ¿Hubo algún momento en que la IA generó código que no comprendía?

> ---
>
> ---

### ¿Qué hice cuando encontré ese código?

> ---
>
> ---

### ¿Qué aprendí sobre utilizar IA como herramienta de programación?

> ---
>
> ---

---

# 📌 Git y GitHub

El proyecto fue desarrollado utilizando Git para registrar la evolución del proyecto.

### Commits realizados

1. `____________________________________________________________`
2. `____________________________________________________________`
3. `____________________________________________________________`
4. `____________________________________________________________`
5. `____________________________________________________________`

### Repositorio

> ---

---

# 📸 Captura del proyecto

> Coloca aquí una captura de pantalla de tu sitio funcionando.

---

# 🚀 Resultado final

### ¿Qué logré construir?

> ---
>
> ---

### ¿Qué mejoraría en una siguiente versión?

> ---
>
> ---
