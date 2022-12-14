//Se va a cargar desde index.html y va a desencadenar toda la carga


//importar el controlador
//import {loadTweetsController} from './load-tweets.js';
import { NotificationController } from '../NotificationController.js';
import {TweetListController} from './tweet-list/TweetListController.js';

//Aseguramos que el DOM está listo para ser operado
document.addEventListener('DOMContentLoaded', ()=>{

  //Recogemos la estructura sobre la que vamos a colgar los tweets
  const tweetListElement=document.querySelector('#tweet-list');
  
  //Controlador de mensajes
  const notificationElement=document.querySelector('#notification');
  const notificationController=new NotificationController(notificationElement);

  //Hacemos esto para no hacer depender el controlador del
  //DOM. Así que lo que hacemos es pasar la referencia
  //del nodo sobre el que queremos que el controlador
  //trabaje.
  //loadTweetsController(tweetListElement);

  const tweetListController=new TweetListController(tweetListElement, notificationController);

});