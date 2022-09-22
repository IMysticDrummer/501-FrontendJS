'use strict';
//Exportamos la fuente de datos
//Este es nuestro modelo

export async function getTweets(){
  const tweetsURL="https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json"
  //const tweetsURL="https://gist.githubuserconten.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json"
  return new Promise(async (resolve, reject)=>{
    /*
    setTimeout(()=>{
      const tweets= [
        {
          date: '2022-09-19',
          body: 'ejemplo de cuerpo de tweet',
          handler: '@usuario1',
          image: 'https://111111.jpeg'
        },
        {
          date: '2022-09-18',
          body: 'ejemplo de cuerpo de otro tweet',
          handler: '@usuario3',
          image: 'https://222222.jpeg'
        },
        {
          date: '2022-09-17',
          body: 'ejemplo de cuerpo de otro tweet, mucho más largo',
          handler: '@usuario4',
          image: 'https://333333.jpeg'
        }];
      resolve(tweets);
    }, 3000);
    */

    let response;
    try {
      response= await fetch(tweetsURL);
    } catch (error) {
      //Este error sólo salta si falla el dominio.
      //No falla por una falta de recurso(404)
      reject('La dirección no existe');
    }

    if (!response.ok) {
      reject('Tweets no encontrados');
    }

    try {
      const tweets=await response.json();
      resolve(tweets);
      //resolve([]);
    } catch (error) {
      reject('Tweets ilegibles');
    }
  });
}