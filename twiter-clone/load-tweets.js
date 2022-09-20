//Este es el controlador

//importamos la fuente de datos --> Modelo
import { tweets } from "./tweet-service.js";
//importamos la construcción de vista --> Vista
import { buildTweetView } from "./tweet-view.js";


//Recogemos la estructura sobre la que vamos a colgar los tweets
const tweetListElement=document.querySelector('#tweet-list');

//Construimos la vista
for (const tweet of tweets) {
  const articleElement=document.createElement('article');
     
  articleElement.innerHTML=buildTweetView(tweet);

  tweetListElement.appendChild(articleElement);
};