import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/servicesService';
import { Create } from '../../../models/services';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrl: './createservice.component.css'
})
export class CreateserviceComponent {
    addServiceForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  
    constructor(private servicesService:ServicesService, private router: Router) {}
  
    createUser() {
      const serviceData = this.addServiceForm.value as Create;
  
      this.servicesService.createService(serviceData).subscribe({
        next: (response) => {
          console.log('Creación exitosa', response);
        },
        error: (error) => {
          console.error('Error al crear servicio', error);
        }
      });
    }
  
    ngOnInit(): void {}
}

