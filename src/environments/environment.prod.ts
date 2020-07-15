import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  baseUrl: 'https://toh.api.herokuapp.com',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,Authorization: localStorage.getItem('token')}),
};
