import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../../sevices/authenticator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SecondNavbarComponent } from '../second-navbar/second-navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,SecondNavbarComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string="";
  password: string="";
  errorMessage: string="";

  constructor(private autheticator: AuthenticatorService, private router: Router) { }

  login() {
    this.autheticator.login(this.email, this.password).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = 'Username or password is incorrect';
      }
    );
  }}
