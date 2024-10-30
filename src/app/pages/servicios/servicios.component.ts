import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/services';
import { ServicesService } from '../../services/servicesService';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicelist: Service[] = [];
  constructor(private servicesservices: ServicesService) { }

  ngOnInit(): void {

    this.servicesservices.getServices().subscribe((services:any)=>{this.servicelist = services.data;});
  }

}
