import { Component } from '@angular/core';


@Component({
  selector: 'entity',
  styles: [
    ''
  ],
  template: require('./entitylist.html')
})

export class EntityList {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `About` component');
  }


}
