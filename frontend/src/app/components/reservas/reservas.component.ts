import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../../services/reservas.service';
import { provideForRootGuard } from '@angular/router/src/router_module';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  providers:[ReservasService]
})
export class ReservasComponent implements OnInit {

  constructor(private reservasService: ReservasService) { }

  ngOnInit() {
  }

}
