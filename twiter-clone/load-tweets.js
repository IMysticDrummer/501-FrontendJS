//Este es el controlador

//importamos la fuente de datos --> Modelo
import { tweets } from "./tweet-service.js";
//importamos la construcción de vista --> Vista
import { buildTweetView } from "./tweet-view.js";


/**
 * Creamos esta función para crear los tweets sobre
 * el nodo que nos den, sin entrar en el DOM
 * específico. Esto mejora la rehusabilidad.
 * 
 * @param {DOMnode} tweetsContainerElement 
 */
export function loadTweetsController(tweetsContainerElement){
  for (const tweet of tweets) {
    const articleElement=document.createElement('article');
      
    articleElement.innerHTML=buildTweetView(tweet);
  
    tweetsContainerElement.appendChild(articleElement);
  };

};