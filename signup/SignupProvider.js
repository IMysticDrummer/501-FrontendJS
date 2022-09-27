'use strict';

import { sparrestApi } from "../SparrestApi.js";

export const createApiUser = async (username, password) => {
  const body={
    username,
    password
  };

  //Llamar a la conexión del api
  await sparrestApi.post(sparrestApi.endpoints.signup, body);
};