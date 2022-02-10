import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Store } from '@ngrx/store';
import {Location} from '@angular/common'; 
import { Auth } from 'src/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobile!:string;
  password!:string;

  constructor(private authSerice:AuthService) {
    if(window.localStorage.getItem('token')){
      window.location.href='/posts'
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authSerice.login({mobile:this.mobile,password:this.password})
    
  }


}
