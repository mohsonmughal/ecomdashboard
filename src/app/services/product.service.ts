import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  auth(data:any){
    return this.http.post('http://localhost:5000/api/v1/Token' , data)
  }

  // getAllpro(){
  //   return this.http.get('http://localhost:5000/api/v1/Products');
  // }
  getAllpro(){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Products', { headers });
  }

  addPro(data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.post('http://localhost:5000/api/v1/Products',data , { headers });
  }


  delPro(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.delete('http://localhost:5000/api/v1/Products/' + keycode , { headers });
  }

  upPro( keycode:any,data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.put('http://localhost:5000/api/v1/Products/'  ,data,{ headers });
  }

  getbyID(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Products/' + keycode , { headers });
  }




}
