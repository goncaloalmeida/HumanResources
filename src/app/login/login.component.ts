import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template:require('./login.html')
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(username, password) {
    if(verificaLogin(username, password)){
      alert('Login Efetuado');
      this.router.navigate(['Entity List']);
    } else {
      alert('Credenciais Erradas');
    }
  }

}

function verificaLogin(username, password){
  //"substitui" ligação API


  return true;
}
