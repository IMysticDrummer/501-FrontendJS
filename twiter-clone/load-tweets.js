//Este es el controlador

//importamos la fuente de datos --> Modelo
import { getTweets } from "./tweet-service.js";
//importamos la construcción de vista --> Vista
import { buildTweetView, buildTweetListSpinner } from "./tweet-view.js";


/**Cambio a clase */
export class TweetListController {

  /**
   * Indicate the parent node to hang up the tweets list
   * @param {DOMnode} nodeElement 
   */
  constructor(nodeElement) {
    this.tweetsContainerElement=nodeElement;
    this.loadTweets();
  }

  async loadTweets () {

    this.tweetsContainerElement.innerHTML=buildTweetListSpinner();
    
    try {
      const tweets=await getTweets();
      //tweetsContainerElement.querySelector('.spinner').remove(); Sólo lo eliminaríamos si no lo vamos a utilizar más.
      this.tweetsContainerElement.querySelector('.spinner').classList.toggle('hide');
    
      for (const tweet of tweets) {
        const articleElement=document.createElement('article');
          
        articleElement.innerHTML=buildTweetView(tweet);
      
        this.tweetsContainerElement.appendChild(articleElement);
      };
      
    } catch (error) {
      console.log(error);
    }

  }
}


/**
 * Creamos esta función para crear los tweets sobre
 * el nodo que nos den, sin entrar en el DOM
 * específico. Esto mejora la rehusabilidad.
 * 
 * @param {DOMnode} tweetsContainerElement 
 */
/*
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

  }


};*/