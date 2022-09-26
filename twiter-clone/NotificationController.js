import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notification-view.js";

/**
 * Notification controller
 *
*/
export class NotificationController{
  /**
   * 
   * @param {Document.Element} nodeElement 
   */
  constructor(nodeElement){
    this.notificationElement=nodeElement;

    this.subscribeToEvents();    
  }

  subscribeToEvents(){
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
      this.showNotification(message);
    });
  };

  showNotification(message) {
    this.notificationElement.innerHTML=buildNotificationView(message);

    //Ir al DOM a por el botón
    const closeButtonElement=this.notificationElement.querySelector('.notification-button-close');
    
    closeButtonElement.addEventListener('click', ()=>{
      //No lo eliminamos porque vamos a tener más notificaciones en nuestra web.
      //Así que lo vaciamos y listo
      this.notificationElement.innerHTML="";
    });
    // asignarle un escuchador al evento click
  }
}