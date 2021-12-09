import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {
   
  clientes: Cliente[] = []; 
  displayedColumns = ['id','nome', 'endereco', 'data_nascimento', 'action']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
   this.clienteService.read().subscribe(clientes => {
     this.clientes = clientes 
     console.log(clientes)
   })
  }

}
