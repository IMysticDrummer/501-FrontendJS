# 501-FrontendJS
Módulo de seguimiento de clase KeepCoding Web13. Centrado en Frontend con JavaScript

## Enlaces recomendados por Edu
- [JavaScript.info](https://javascript.info/) Página de información sobre javascript
- [Can I Use](https://caniuse.com/)
- [Información sobre async y defer en llamadas script html](https://javascript.info/script-async-defer)


## Notas importantes
- No es muy normal que las primeras cargas de una página web tengan mucha carga de javascript. Deberíamos realizar cargas muy rápidas.

## Cómo funciona un navegador
- **User Interface**
- **Browser engine**: El que se encarga de interpretar y mandar renderizar lo que hay que pintar
- **Rendering engine**: Pinta el contenido solicitado
- **Networking**: hace las peticiones
- **JavaScript interpreter**: interpreta y ejecuta los progrmas javascript
- **UI Backend**: Utiliza los recursos del sistema operativo para aprovechar operaciones
- **Data Persistence**: Persistencia de datos, guardado de datos en físico


# Javascript en el navegador
- Debemos utilizar el uso de **módulos** en la importación de javascript en html. Se hace con
    - `<script type="module" src="./index-module.js"></script>`
    - **OJO** Módulos CommonJS no están soportados en el navegador (require no está soportado). Por tanto
    se deben usar módulos ES6 con import y export.

# BOM (Browser Object Model)
- El **BOM** publica una serie de objetos en el contexto de JavaScript para poder controlar el navegador web.

# DOM (Document Objetc Model)
- Es un árbol que va a pintar en el navegador con nuestra página web.
- Permite señalar y manejar el rendereizado de nuestro contenido.
- Es un árbol jerárquico dinámico
- Los nodos del árbol son cada etiqueta html que tenemos declaradas. Todos son instancias de una clase llamada htmelement.

## Navegando por el árbol
- $0 en la consola del navegador nos devuelve una referencia a ese elemento.
    - Esto nos permite seleccionar etiquetas y modificar elementos en caliente, **sin ningún tipo de persistencia** Si recargamos la página, se deshacen los cambios y persiste el código

## Creando elementos
- Primero se crea el nodo (document.createElement)
- Luego se rellena con el contenido, atributos, etc...
- Se anexa al nodo superior adecuado.

## Asegurar la carga del DOM
- Antes de "pintar" nada en nuestro html, tenemos que asegurarnos que el DOM esté bien cargado.
Para ello, utilizamos el código:
`document.addEventListener('DOMContentLoaded', ()=>{  
    console.log('DOM listo');  
    ...
});`

## Propagación de eventos
- Cuando se produce un evento en un elemento contenido dentro de otros, el evento se propaga por todos los padres contenedores. Otra cosa es que nosotros no estemos escuchando.
- Se puede puede parar la propagación de evento con el código `evento.stopPropagation()`. Hay que tener en cuenta que si usamos el mismo manejador de eventos, pararíamos la propagación desde el principio y no se propagaría.
- Los eventos se pueden capturar. Dentro del evento hay una propiedad *path* que permite acceder al árbol, en forma de array, desde el propio elemento hasta el document. Se puede acceder a esos elementos y hacer acciones sobre ellos.
Por ejemplo:
    `event.path[1].remove();` --> Eliminará el elemento padre.
# PREGUNTAS
- ¿cómo parar la propagación de eventos en un punto en concreto? ¿cómo usar otro manejador de eventos?