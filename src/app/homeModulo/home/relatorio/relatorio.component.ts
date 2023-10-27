import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
 @Output() nome = new EventEmitter<string>();
 
  constructor() { }
  
  ngOnInit(): void {
  }

}
