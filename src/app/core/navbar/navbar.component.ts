import { LogoutService } from './../../seguranca/logout.service';
import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandle: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  criarNovoAcessToken(){
    this.auth.obterNovoAcessTokne();
  }

  logout(){
    this.logoutService.logout()
     .then( ()=>{
        this.router.navigate(['/login'])
     })
     .catch( erro => this.errorHandle.handle(erro) );
  }

}
