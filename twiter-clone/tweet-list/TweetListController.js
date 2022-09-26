//Este es el controlador

//importamos la fuente de datos --> Modelo
import { getTweets } from "./tweet-provider.js";
//importamos la construcción de vista --> Vista
import { buildTweetView, buildTweetListSpinner, buildEmptyTweetList } from "./tweet-list-view.js";
import { pubSub } from "../../pubSub.js";


/**Cambio a clase */
export class TweetListController {

  /**
   * Indicate the parent node to hang up the tweets list
   * @param {DOMnode} nodeElement 
   */
  constructor(nodeElement, notificationController) {
    this.tweetsContainerElement=nodeElement;
    this.notificationController=notificationController;
    this.loadTweets();
  }

  showTweetsNotFound(){
    //Si no hay tweets
    //Creamos un nodo para colgar el "texto"
    // Lo adjuntamos al nodo padre
    // Hacemos un outerHTML para cargarnos el div y dejarlo colgado del padre
    const divElement=document.createElement('div');
    this.tweetsContainerElement.appendChild(divElement);
    divElement.outerHTML=buildEmptyTweetList();
  }

  drawTweets(tweets){
    for (const tweet of tweets) {
      const articleElement=document.createElement('article');
        
      articleElement.innerHTML=buildTweetView(tweet);
    
      this.tweetsContainerElement.appendChild(articleElement);
    };

  }

  async loadTweets () {

    this.tweetsContainerElement.innerHTML=buildTweetListSpinner();
    let tweets=[];

    try {
      tweets=await getTweets();
    } catch (error) {
      //alert(error);
      //this.notificationController.showNotification(error);
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, error);
    }
    
    //tweetsContainerElement.querySelector('.spinner').remove(); Sólo lo eliminaríamos si no lo vamos a utilizar más.
    this.tweetsContainerElement.querySelector('.spinner').classList.toggle('hide');
  
    if (tweets.length===0) { this.showTweetsNotFound(); };

    this.drawTweets(tweets);
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