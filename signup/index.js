import { SignupController } from "./SignupController.js";
import { NotificationController} from "../twiter-clone/NotificationController.js";

document.addEventListener('DOMContentLoaded', () => {
  //Coger el formulario

  const createUserFormElement=document.querySelector('.create-user-form');
  const notificationElement=document.querySelector('.notification');

  const signupController= new SignupController(createUserFormElement);
  const notificationController = new NotificationController(notificationElement);
});