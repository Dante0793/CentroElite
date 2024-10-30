import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/loginService';
import { Register } from '../../../models/login';

@Component({
  selector: 'app-createlogin',
  templateUrl: './createlogin.component.html',
  styleUrl: './createlogin.component.css'
})
export class CreateloginComponent {
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    c_password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  createUser() {
    const loginData = this.addUserForm.value as Register;

    this.loginService.createUser(loginData).subscribe({
      next: (response) => {
        console.log('Creación exitosa', response);
      },
      error: (error) => {
        console.error('Error al crear usuario', error);
      }
    });
  }

  ngOnInit(): void {}
}
  
