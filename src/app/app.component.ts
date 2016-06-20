import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Login} from "./login/login.component";
import {EntityList} from "./entitylist/entitylist.component";
import {EntityDetailInformation} from "./entitydetail/entitydetail.component";

@RouteConfig([
  { path: '/', redirectTo: ['/Login'] },
  { path: '/login', component: Login, as: 'Login' },

  { path: '/entitylist',  name: 'Entity List',  component: EntityList },
  { path: '/entitydetail',  name: 'Entity Detail Information',  component: EntityDetailInformation },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/menu3', name: 'About', loader: () => require('es6-promise!./')('') }
])

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [
    ROUTER_PROVIDERS,
  ],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../assets/css/app.css'),
    require('primeui/themes/delta/theme.css'),
    require('primeui/primeui-ng-all.min.css'),
  ],
  template: require('./app.html')
})

export class App {

  login = false;

}
