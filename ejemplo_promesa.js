'use strict';

function ejemploSetTimeout(value){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('soy setTimeout');
      if (value>50) {resolve(value);}
      reject(new Error(`error mio, he pasado ${value}`));
      //Tenemos que resolver la promesa
    }, 3000);
    
  });
};

ejemploSetTimeout(Math.floor(Math.random()*100)).then((value)=>{
  console.log('Callback then, ha resuelto ', value);
  console.log('setTimeout ejecutado');
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  //Finally se ejecuta siempre
  console.log('esto es finally');
});

//Función autoejecutada asíncrona
(async ()=>{
  try {
    const result=await ejemploSetTimeout(Math.floor(Math.random()*100))
    console.log(result);
    
  } catch (error) {
    error.status=404;
    console.log(error.status,' ',error.message);
  }

  console.log('Callback de finally');
})();