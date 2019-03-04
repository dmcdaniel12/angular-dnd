import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MonstersService implements OnDestroy {

  public destroy$ = new Subject<any>();
  public baseUrl = 'https://open5e.com/';
  public apiEndpoint = 'monsters';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {  console.log('test123')}

  ngOnDestroy() {

  }

  public getAllMonsters() {
    const url = this.baseUrl + this.apiEndpoint;

    return this.http.get(url, this.options);
  }

}
