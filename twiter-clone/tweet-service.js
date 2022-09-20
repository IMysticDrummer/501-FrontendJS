'use strict';
//Exportamos la fuente de datos
//Este es nuestro modelo

export function getTweets(){
  
  return new Promise((resolve, reject)=>{
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
  });
}