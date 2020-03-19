import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AppModule } from '../app.module';
declare var jQuery: any; 

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  
  username:string;
  password:string;
 
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  LoginUser(){
    if(this.username =="Admin" && this.password == "pass")
    {
      console.log("welcome");
       
    }
    else{
      alert("Incorrect Credentials");
      this.router.navigateByUrl('');
    }
    
  }
}
