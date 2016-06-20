import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {TAB_DIRECTIVES, CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {PersonService} from '../person/PersonService';

import {BarChartDemoComponent} from './chart/charts-section.component';
import {Properties} from "./properties/properties";
import {TableDemoComponent} from "./subtable/subtable";

@Component({
  selector: 'entity',
  styles: [ '' ],
  template: require('./entitydetail.html'),
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES, FORM_DIRECTIVES, COMMON_DIRECTIVES, CollapseDirective,
    BarChartDemoComponent, Properties, TableDemoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PersonService,
  ],
})

export class EntityDetailInformation{

}
