import { Component } from '@angular/core';
import { AuthenticatorService } from '../../sevices/authenticator.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname: string ="";
  lastName: string ="";
  dateOfBirth: string ="";
  gender: string ="";
  phoneNumber: string ="";
  email: string ="";
  password: string="";
  errorMessage: string ="";

  constructor(private authenticator :AuthenticatorService,private router: Router){}
  register() {
    this.authenticator.register(this.firstname, this.lastName, this.dateOfBirth, this.gender, this.phoneNumber, this.email, this.password).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
