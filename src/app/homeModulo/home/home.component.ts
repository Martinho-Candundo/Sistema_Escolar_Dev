import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new Date();
  titulo:string = 'Sistema de Gestão Escolar - Ministério da Educação';

  constructor() { }

  ngOnInit(): void {

  }

}
