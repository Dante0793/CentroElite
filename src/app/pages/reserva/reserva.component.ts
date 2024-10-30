import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/services';
import { ServicesService } from '../../services/servicesService';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})

export class ReservaComponent implements OnInit {
  
  servicelist: Service[] = [];
  constructor(private servicesservices: ServicesService) { }

  ngOnInit(): void {

    this.servicesservices.getServices().subscribe((services:any)=>{console.log(services); this.servicelist = services.data; console.log(this.servicelist);});
  }
}


