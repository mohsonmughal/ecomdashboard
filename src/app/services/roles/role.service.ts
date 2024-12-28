import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAllRoles(){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/UserRoles', { headers });
  }

  postRole(data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.post('http://localhost:5000/api/v1/UserRoles', data,{ headers });
  }

  
  upRole( data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.put('http://localhost:5000/api/v1/UserRoles/' , data,{ headers });
  }
  
  getbyID(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/UserRoles/' + keycode , { headers });
  }




    
  delRole(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.delete('http://localhost:5000/api/v1/UserRoles/' + keycode , { headers });
  }




}
