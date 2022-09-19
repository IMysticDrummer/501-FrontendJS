# 501-FrontendJS
Módulo de seguimiento de clase KeepCoding Web13. Centrado en Frontend con JavaScript

## Enlaces recomendados por Edu
- [JavaScript.info](https://javascript.info/) Página de información sobre javascript
- [Can I Use](https://caniuse.com/)

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
- Primero se crea (document.createElement)
- Luego se rellena con el contenido, atributos, etc...
- Se anexa al nodo superior adecuado.