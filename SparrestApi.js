'use strict';

class SparrestApi {
  baseUrl='http://localhost:8000';
  endpoints={
    signup: '/auth/register',
    login: '/auth/login'
  };

  async post(endpoint, body) {
    const response= await fetch(`${this.baseUrl}${endpoint}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  };
};

export const sparrestApi=new SparrestApi();