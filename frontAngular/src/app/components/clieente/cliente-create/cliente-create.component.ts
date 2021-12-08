import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
  
})
export class ClienteCreateComponent implements OnInit {
  

  cliente : Cliente ={
    nome: '',
    endereco: '',
    data_nascimento: ''
  }


  constructor(private clienteservice: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    this.clienteservice.create(this.cliente).subscribe(()=> {
      this.clienteservice.showMessage('Cliente Criado')
      this.router.navigate(['clientes'])
    })
  }
  cancel(): void {
    this.router.navigate(['clientes'])
  }

}