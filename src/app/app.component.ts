/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { EntityList } from './entitylist';
import { EntityDetailChart } from './entitydetailchart';
import { EntityDetailInformation } from './entitydetailinformation';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [
    ROUTER_PROVIDERS
  ],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: require('./app.html')
})
@RouteConfig([
//{ path: '/', name: 'Index', component: EntityDetailInformation, useAsDefault: true },
  { path: '/entitylist',  name: 'Entity List',  component: EntityList },
  { path: '/entitydetailchart',  name: 'Entity Detail Chart',  component: EntityDetailChart },
  { path: '/entitydetailinformation',  name: 'Entity Detail Information',  component: EntityDetailInformation },

  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/menu3', name: 'About', loader: () => require('es6-promise!./')('') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
