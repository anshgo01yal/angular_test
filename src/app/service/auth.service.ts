import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login} from '../login.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { 
  }

  login(data: { mobile: string; password: string; }){
      if(!(parseInt(data.mobile) > 999999999) || !(parseInt(data.mobile) < 10000000000) && !(data.mobile.length == 10)){
        alert("type a valid mobile number of 10 digits")
        return;
      } else if(!data.password){
        alert("please type a valid password")
        return;
      }
      // signing the data to store in local storage for security
      window.localStorage.setItem('token',JSON.stringify({mobile:data.mobile,loggedIn:true}));
      window.location.href='/posts'
      return true;
    
  }
  logout(){
    window.localStorage.removeItem('token');
    window.location.href='/';
  }


}
