import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  anio: number;
  // es recomendado que las funcniones se hagan en el consructor
  constructor() {
    this.anio = new Date().getFullYear();
  }
}
