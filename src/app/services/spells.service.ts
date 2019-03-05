import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Spell, SpellsObject} from '../domain/spells';

@Injectable()
export class SpellsService implements OnDestroy {

  public destroy$ = new Subject<any>();
  public baseUrl = 'http://www.dnd5eapi.co/api/';
  public apiEndpoint = 'spells';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnDestroy() {

  }

  public getAllSpells() {
    const url = this.baseUrl + this.apiEndpoint;

    return this.http.get<SpellsObject[]>(url, this.options);
  }

  public getSpellById(id) {
    const url = this.baseUrl + this.apiEndpoint + '/' + id;

    return this.http.get<Spell>(url, this.options);
  }

}
