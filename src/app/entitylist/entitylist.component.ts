import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person/PersonService';
import {Router} from '@angular/router-deprecated';
import {FORM_DIRECTIVES} from '@angular/common';
import {Person} from "../person/Person";
import {Http} from 'angular2/http';
import {DataTable} from 'primeng/components/datatable/datatable';
import {Column} from 'primeng/components/column/column';
import {HTTP_PROVIDERS} from "@angular/http";
import forEach = require("core-js/fn/array/for-each");

@Component({
  selector: 'entity',
  template: require('./entitylist.html'),
  providers: [
    HTTP_PROVIDERS, PersonService
  ],
  directives: [FORM_DIRECTIVES,DataTable,Column]
})

export class EntityList implements OnInit{

  persons:Person[];
  cols:any[];

  private fieldA;
  private fieldB;
  private fieldC;
  private fieldD;

  constructor(private router:Router, public http:Http, private personService:PersonService) {
  }

  ngOnInit() {
    this.personService.getAllPerson().then(persons => this.persons = persons);

    this.cols = [
      {field: 'fieldA', header: 'Field A'},
      {field: 'fieldB', header: 'Field B'},
      {field: 'fieldC', header: 'Field C'},
      {field: 'fieldD', header: 'Field D'},
    ];
  }

  selectPerson(person:Person) {
     this.router.navigate(['Entity Detail Information', {id: person.id}]);
  }

  searchRecord(value) {
    /**
     * unresolved bugs: empty search
     * undone: options in fieldB search
     */

    var key;
    for (key in value) {
      if (value[key] != null) {
        this.persons = this.persons.filter(article => article[key] == value[key]);
      }
    }

  }
}
