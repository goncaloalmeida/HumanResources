// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router-deprecated';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import 'jquery';
import 'bootstrap-loader';

// Angular 2 Material 2
import '@angular2-material/tabs';
import '@angular2-material/card';
// look in src/platform/angular2-material2 and src/platform/providers

if ('production' === ENV) {
  // Production


} else {
  // Development

}
