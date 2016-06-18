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
    //}
    /*let body = JSON.stringify({ username, password });
     event.preventDefault();
     this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
     .subscribe(
     response => {
     localStorage.setItem('jwt', response.json().id_token);
     this.router.parent.navigateByUrl('/home');
     },
     error => {
     alert(error.text());
     console.log(error.text());
     }
     return this.http.get('../../assets/mock-data/fileData.json')
     .map(this.extractData)
     .catch(this.handleError);


     /*
     );*/
  }

}

function verificaLogin(username, password){
  //"substitui" ligação API

  /*teste temporario*/
  if ("aaa" == username && "aaa" == password) {
    return true;
  }
  return false;
}
