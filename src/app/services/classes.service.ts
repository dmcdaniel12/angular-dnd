import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassesService implements OnDestroy {

  public destroy$ = new Subject<any>();
  public baseUrl = 'http://www.dnd5eapi.co/api/';
  public apiEndpoint = 'classes';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnDestroy() {

  }

  public getAllClasses() {
    const url: string = this.baseUrl + this.apiEndpoint;

    return this.http.get(url, this.options);
  }
}
