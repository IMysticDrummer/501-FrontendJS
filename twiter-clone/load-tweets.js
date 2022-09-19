
//importamos la fuente de datos
import { tweets } from "./tweet-service.js";
import { buildTweetView } from "./tweet-view.js";


//const buildTweetView=require('./tweet-view.js');
//const tweets=require('./tweet-service.js');


//Recogemos la estructura sobre la que vamos a colgar los tweets
const tweetListElement=document.querySelector('#tweet-list');

for (const tweet of tweets) {
  const articleElement=document.createElement('article');
  
     
  articleElement.innerHTML=buildTweetView(tweet);

  tweetListElement.appendChild(articleElement);
};
