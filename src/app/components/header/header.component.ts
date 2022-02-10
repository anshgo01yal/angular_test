import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Auth } from 'src/models/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayUser:boolean = false;
  user = JSON.parse(window.localStorage.getItem('token')!)
  
  constructor(private authSerice:AuthService) { 
    
    if(this.user && this.user.loggedIn){
      this.displayUser = true;
    }
  }

  ngOnInit(): void {
  }
  logout(){
    this.authSerice.logout()
  }

}
