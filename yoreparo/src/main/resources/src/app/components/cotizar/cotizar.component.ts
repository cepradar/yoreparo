import { Component} from '@angular/core';

interface Servicio {
  id: string;
  nombre: string;
}

interface Asistencia {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent{

  
  asistencias: Asistencia[] = [
    {id: '0', nombre: ''},
    {id: '1', nombre: 'Revisión Técnica'},
  ];

  servicios: Servicio[] = [
    {id: '0', nombre: ''},
    {id: '1', nombre: 'Reparacion de lavadoras'},
    {id: '2', nombre: 'Reparacion de Neveras'},
    {id: '3', nombre: 'Reparacion de celulares'}
  ];
}
