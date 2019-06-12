import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  valor = localStorage.getItem('token');
  constructor(private conecta: PeticionesService, private routing: Router) { }

  ngOnInit() {
  }
  salir() {
    this.valor = this.conecta.salir();
    this.routing.navigateByUrl('/login');
  }
}
