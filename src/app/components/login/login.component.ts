import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../sevices/authenticator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string="";
  password: string="";
  errorMessage: string="";

  constructor(private autheticator: AuthenticatorService, private router: Router) { }

  login() {
    this.autheticator.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = 'Username or password is incorrect';
      }
    );
  }}
