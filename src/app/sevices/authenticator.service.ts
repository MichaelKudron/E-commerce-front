import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
   
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(currentUser ? JSON.parse(currentUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`https://localhost:7202/api/account/login`, {"email": email,"password": password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  register(firstname:string,lastName:string,dateOfBirth:string,gender:string,phoneNumber:string,email: string, password: string) {
    let genderChar :String ="";
    if(gender==='male'){
      genderChar = "M";
    }
    if(gender==='female'){
      genderChar="F";
    }
    return this.http.post<any>(`https://localhost:7202/api/account/register`,
      {
        "firstname": firstname,
        "lastName": lastName,
        "email": email,
        "dateOfBirth": dateOfBirth,
        "gender": genderChar,
        "phoneNumber": phoneNumber,
        "password": password
      }
    );
  }
}
