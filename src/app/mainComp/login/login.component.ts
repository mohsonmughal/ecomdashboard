import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }
  token:any;
 
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private api:ProductService) {


    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin() {
    console.log('Login form submitted:', this.loginForm.value);
    this.api.auth(this.loginForm.value).subscribe((res) => {
      console.log("Data Posted", res);
      this.token = (res as any).token;
      localStorage.setItem("token", this.token);
    });
  }
  





}
