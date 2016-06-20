import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {Http} from 'angular2/http';
import {Person} from "./Person";

@Injectable()
export class PersonService {
  constructor(private http: Http) {
   }

  public persons: Person[];
  private data:Array<any> = [];

  getAllPerson() {
   return this.http.get('../assets/mock-data/fileData.json')
        .toPromise()
        .then(res => <Person[]> res.json().data)
        .then(data => { return data; });
  }

  getPersonbyID(id: string) {
    return this.http.get('../assets/mock-data/fileData.json')
      .map(response => response.json().data[id]);
  }

  getFieldbVales(){
    this.getAllPerson().then(persons => this.persons = persons);

    var key;
    for (key in this.persons) {
      this.data.push(this.persons[key].subData);
    }

    return this.data;
  }

}

