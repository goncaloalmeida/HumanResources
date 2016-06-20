import {Component, OnInit} from '@angular/core';
import {TAB_DIRECTIVES, CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";

import {RouteParams} from "@angular/router-deprecated";
import {PersonService} from "../../person/PersonService";


@Component({
  selector: 'properties',
  styles: [ require('./properties.css') ],
  template: require('./properties.html'),
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES, FORM_DIRECTIVES, COMMON_DIRECTIVES, CollapseDirective],

})

export class Properties implements OnInit{

  public isCollapsedMainProperties:boolean = true;
  public isCollapsedAdicionalProperties:boolean = true;


  constructor(private routeParams: RouteParams,
              private personService:PersonService
  ) { }

  private fieldA;
  private fieldB;
  private fieldC;
  private fieldD;
  private data;
  private lupdate;

  getContent(){
    this.personService.getPersonbyID(this.routeParams.get('id')).subscribe(
      people => {
          this.fieldA = people.fieldA,
          this.fieldB = people.fieldB,
          this.fieldC = people.fieldC,
          this.fieldD = people.fieldD,
          this.data = people.data,
          this.lupdate = people.lupdate
      });
  }


  ngOnInit(){
    this.getContent();
  }


}
