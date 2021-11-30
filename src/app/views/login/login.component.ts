import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
  }
  loginModel = new Login();
  mensagem =""

  onSubmit(){
   this.loginservice.login(this.loginModel).subscribe((response)=>{
    this.mensagem = "login com sucesso";
    this.router.navigateByUrl("/");
   },(error)=>{
     this.mensagem= error.error
   })
  }

  

}
