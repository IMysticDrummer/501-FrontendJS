import { pubSub } from "../pubSub.js";

export class SignupController {
  constructor(nodeElement) {
    this.signupElement=nodeElement;

    this.susbscribeToEvents();
  }

  susbscribeToEvents(){
    this.signupElement.addEventListener('submit', (event)=>{
      //Evitar el comportamiento del formulario por defecto
      event.preventDefault();

      //- Comprobar que la contraseña tiene más de 6 caracteres
      this.validatePassword();
    });
    
    //- El botón debe permanecer deshabilitado hasta que los campos estén rellenos
    const createUserInputElements= Array.from(this.signupElement.querySelectorAll('input'));
    const createUserButtonElement=this.signupElement.querySelector('#createUserButton');

    createUserInputElements.forEach(createUserInputElement => {
      createUserInputElement.addEventListener('input', ()=>{
        if (createUserInputElements.every(inputElement=>inputElement.value)) {
          createUserButtonElement.removeAttribute('disabled');
        } else {
          createUserButtonElement.setAttribute('disabled',"");
        };
      });
    });
  };

  validatePassword() {
    const passwordElement=this.signupElement.querySelector('#password');
    const minLength=6
    if (passwordElement.value.length<minLength) {
      //mostrar error con pubSub
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener más de ${minLength} caracteres`);
    }

    //Contraseña debe terner letras y números
    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

    if (regExp.test(passwordElement.value)) {
      // hacemos cosas
      //this.createUser();
    } else {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe contener únicamente minúsculas, mayúsculas o números`);
    };
  };
};

//Comportamientos de nuestro formulario
/**
 * - El usuario y contraseña no pueden estar vacíos.
 * - Contraseña de más de 6 caracteres
 * - Contraseña debe terner letras y números
 * - El botón debe permanecer deshabilitado hasta que los campos estén rellenos
 */