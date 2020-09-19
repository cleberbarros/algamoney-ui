import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class LogoutService {

  tokensRovokeUrl: string; // = 'http://localhost:8080/tokens/revoke'

  constructor(
    private http: AuthHttp,
    private auth: AuthService
  ) {
    this.tokensRovokeUrl = `${environment.apiUrl}/tokens/revoke`;
  }


  logout(){
    return this.http.delete(this.tokensRovokeUrl, {withCredentials: true})
      .toPromise()
      .then(()=>{
        this.auth.limparAccessToken();
      } )

  }
}
