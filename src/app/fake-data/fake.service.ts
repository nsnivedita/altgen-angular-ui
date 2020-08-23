
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fake } from './fake';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

constructor(private http:HttpClient) { }
getFake() {
  return this.http.get<any>("assets/fake.json")
  .toPromise()
  .then(res => <Fake[]>res.data)
  .then(data => { return data; });
}
}
