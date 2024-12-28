import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  num1 = 1;
  num2  = 10;


  constructor() { }

  ngOnInit(): void {
    // this.refreshFun();
    // private Refresher:boolean=false;
    // if (!this.Refresher) {
    //   window.location.reload();
    //   console.log('ngOnInit function running only once');
      
    //   // Set the flag to true after the function has been executed once
    //   this.Refresher = true;
    // }
    // // }
    if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded');
    }
  }
  


}
