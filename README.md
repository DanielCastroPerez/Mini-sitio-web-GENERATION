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

>¡Totalmente listo! Como desarrollador senior y mentor, será un gusto acompañarte en este proceso y revisar tu código.

Aprender la base sólida de **HTML, CSS, Bootstrap y JavaScript** es el paso más importante para construir aplicaciones web funcionales y profesionales. Tu nivel actual es excelente para empezar a escribir código limpio y semántico desde el primer día.

### Cómo trabajaremos en las revisiones

Para aprovechar al máximo cada retroalimentación, organizaré la revisión en cuatro pilares:

1. **Detección de errores y malas prácticas**: Identificaremos fallas de sintaxis, errores semánticos en HTML, uso inadecuado de clases de Bootstrap o redundancias en CSS y JavaScript.
2. **Sugerencias y código corregido**: Verás bloques de código comparativos (*Antes vs. Después*) para que visualices la mejora de inmediato.
3. **Explicación técnica sencilla**: Entenderás el *porqué* detrás de cada estándar (accesibilidad, especificidad en CSS, rendimiento y legibilidad).
4. **Tips para tu nivel**: Consejos prácticos alineados con lo que estás viendo en tu bootcamp (estrucutra de archivos, nombrado de variables con `const`/`let`, tipos de datos primitivos y sintaxis limpia).

---

### ¿Listo para enviar tu código?

Comparte tu código (puedes pegarlo directamente aquí en HTML, CSS, clases de Bootstrap o JavaScript) y dime si forma parte de algún proyecto o ejercicio en particular. ¡Iremos paso a paso!

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

> Muestra una card con una imagen  y se le agrega estilo gracias a las diferentes clases de boostrap "card-body d-flex flex-column" 
.card: El contenedor principal de la tarjeta
.card-body: El contenedor interno que añade el relleno
.flex-column

### ¿Por qué lo utilizo?

> Para dar diseño a esa card sin utilizar css

### ¿Lo generó la IA o yo?

>Yo logre hacer una estructura basica con buen diseño  y la IA me ayudo a darle mejor fluides estilo a las cards y a mejorar las imagejes

### ¿Qué modifiqué?

> Las clases, las imagnes y los colores del navar asi como su texto

---

## Fragmento 2

### Código

```javascript
let nombre = prompt("Por favor, ingresa tu nombre:");
let lugar = prompt("Por favor, ingresa tu lugar de origen:");
let profesion = prompt("Por favor, ingresa tu profesión:");

alert("Hola " + nombre + ", bienvenido!. " + lugar + " es un lugar muy interesante y tu profesión es " + profesion + " es una profesión muy interesanteS. ¡Gracias por compartirlo con nosotros! disfruta tu estadía en nuestra página web. ");
```

### ¿Qué hace?

> Solo le pide al usuario ingresar su nombre donde vide y carrera para mostrarlo en pantalla junto con un mensaje

### ¿Por qué lo utilizo?

> Para darle como una bienvenida 

### ¿Lo generó la IA o yo?

> Yo lo genere

### ¿Qué modifiqué?

> Nada

---

## Fragmento 3

### Código

```CSS
.navbar .btn-warning:hover {
    color: #173f35;
    background-color: #ffffff;
    border-color: #ffffff;
}
.card-img-top {
    height: 230px;
    object-fit: cover; 
}
```

### ¿Qué hace?

> le agrega color a los botores warning y a los bordes  y .card-img-top  "object-fit: cover; "  Ajusta la imagen para que se recorte si es necesario y "height: 230px;" solo modifica el alto de la imagen

### ¿Por qué lo utilizo?

> Para darle un buen diseño a las imagenes 

### ¿Lo generó la IA o yo?

>Lo genero la IA

### ¿Qué modifiqué?

> Tamaño de las imagenes

---

# 🛠️ Tecnologías utilizadas

- HTML
- CSS
- Bootstrap
- JavaScript
- Git
- GitHub
- Inteligencia Artificial

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

# 📖 Aprendizaje

### ¿Qué concepto nuevo comprendí gracias a la IA?

> Como generar buenos promp para que la IA me ayude con un problema en concreto

### ¿Qué aprendí durante el desarrollo del proyecto?

> Aprendi a tener un mejor desarrollo en el codigo, como no sobre cargar etiquetas, utilizar boostrap correctamente.

---

# 💭 Reflexión

### ¿Hubo algún momento en que la IA generó código que no comprendía?

> Si me modificaba clases y codigo que estaba bien 

### ¿Qué hice cuando encontré ese código?

> Leerlo y entenderlo si no le entendia le preguntaba por que uso eso 

### ¿Qué aprendí sobre utilizar IA como herramienta de programación?

> Que podemos mejorar muy rapido y o quedarnos como jr y poer tener un codigo limpioy sin sobre carga

---

# 📌 Git y GitHub

El proyecto fue desarrollado utilizando Git para registrar la evolución del proyecto.

### Commits realizados

1. `git commit -m"Initial commit"`
2. `git commit -m"chore: Se crea estructura inicial del proyecto"`
3. `git commit -m"feat:Primera parte. Se agregan 6 destinos al archivo  HTML."`
4. `git commit -m"feat:Parte dos. Se agrega la parte de las imagenes y una pantalla de ver detalle"`
5. `git commit -m"se actualizo y mejoro la estructura del HTML gracias a la IA"`
6. `git commit -m"Se actualizo y mejoro la estructura del HTML gracias a la IA"`


