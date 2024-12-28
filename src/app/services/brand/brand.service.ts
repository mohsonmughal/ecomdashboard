import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http:HttpClient) { }
  getAllBrands(){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Brands', { headers });
  }


  postBrand(data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.post('http://localhost:5000/api/v1/Brands', data,{ headers });
  }



  upBrand( data:any){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.put('http://localhost:5000/api/v1/Brands/'  , data,{ headers });
  }



  delBrand(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.delete('http://localhost:5000/api/v1/Brands/' + keycode , { headers });
  }

  getbyID(keycode:any ){
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Set the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.get('http://localhost:5000/api/v1/Brands/' + keycode , { headers });
  }

}
