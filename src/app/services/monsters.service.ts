import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Monsters} from '../domain/monsters';

@Injectable()
export class MonstersService implements OnDestroy {

  public destroy$ = new Subject<any>();
  public baseUrl = 'http://www.dnd5eapi.co/api/';
  public apiEndpoint = 'monsters';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnDestroy() {

  }

  public getAllMonsters() {
    const url = this.baseUrl + this.apiEndpoint;

    return this.http.get<Monsters>(url, this.options);
  }

}
