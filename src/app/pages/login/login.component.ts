import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService';
import { Login } from '../../models/login';
import { Router } from '@angular/router'; // Import the Router class

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  addUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) {} // Add the 'router' property

  sendLogin() {
    const loginData = this.addUserForm.value as Login;

    this.loginService.login(loginData).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso', response);
        // Aquí puedes manejar la respuesta, como redireccionar al usuario o guardar un token
        // Redirect to create login page
        this.router.navigate(['/my']);
      },
      error: (error) => {
        console.error('Error de inicio de sesión', error);
        // Manejo del error, como mostrar un mensaje de error al usuario
      }
    });
  }

  ngOnInit(): void {}
}
