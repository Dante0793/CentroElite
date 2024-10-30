import { Component } from '@angular/core';
import { Create } from '../../../models/reserves';
import { ReserveService } from '../../../services/reserveService';

@Component({
  selector: 'app-showreserves',
  templateUrl: './showreserves.component.html',
  styleUrl: './showreserves.component.css'
})
export class ShowreservesComponent {
  servicelist: Create[] = [];
  constructor(private reserveService: ReserveService) { }

  ngOnInit(): void {

    // this.reserveService.createReserve().subscribe((reserves:any)=>{this.servicelist = reserves;});
  }

}
