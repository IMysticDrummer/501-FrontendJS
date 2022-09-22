//Este es el controlador

//importamos la fuente de datos --> Modelo
import { getTweets } from "./tweet-service.js";
//importamos la construcción de vista --> Vista
import { buildTweetView, buildTweetListSpinner } from "./tweet-view.js";


/**
 * Creamos esta función para crear los tweets sobre
 * el nodo que nos den, sin entrar en el DOM
 * específico. Esto mejora la rehusabilidad.
 * 
 * @param {DOMnode} tweetsContainerElement 
 */
export async function loadTweetsController(tweetsContainerElement){

  tweetsContainerElement.innerHTML=buildTweetListSpinner();

  try {
    const tweets=await getTweets();
    //tweetsContainerElement.querySelector('.spinner').remove(); Sólo lo eliminaríamos si no lo vamos a utilizar más.
    tweetsContainerElement.querySelector('.spinner').classList.toggle('hide');

    for (const tweet of tweets) {
      const articleElement=document.createElement('article');
        
      articleElement.innerHTML=buildTweetView(tweet);
    
      tweetsContainerElement.appendChild(articleElement);
    };
    
  } catch (error) {
    console.log(error);
  }
  


};