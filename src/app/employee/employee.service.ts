import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl ="https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  // Get the data
  getEmployee(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
