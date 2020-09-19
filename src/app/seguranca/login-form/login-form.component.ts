
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  constructor(
    public authService: AuthService,
    private erroHandler: ErrorHandlerService,
    private router: Router
    ) { }

  login(usuario: string, senha: string) {
    this.authService.login(usuario,senha)
      .then(()=>{
        this.router.navigate(['/lancamentos']);
      } )
      .catch(erro =>{
        this.erroHandler.handle(erro);
      });
  }

}
