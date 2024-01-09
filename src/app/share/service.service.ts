import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private userDataSource = new BehaviorSubject({email : '', password : ''});
 currentUserData = this.userDataSource.asObservable();
 constructor(private http:HttpClient, private router:Router) {}
 changeData(newUserData:any) {

 }
}
