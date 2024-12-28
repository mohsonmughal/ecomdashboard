import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VariationService {

  constructor(private http:HttpClient) { }
  getAllvariation(){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Variations', { headers });
  }


  postVariation(data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.post('http://localhost:5000/api/v1/Variations', data,{ headers });
  }

  
  
  upVariation( data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.put('http://localhost:5000/api/v1/Variations/'  , data,{ headers });
  }
  
  
    
  delVariation(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.delete('http://localhost:5000/api/v1/Variations/' + keycode , { headers });
  }

  getbyID(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Variations/' + keycode , { headers });
  }

}
