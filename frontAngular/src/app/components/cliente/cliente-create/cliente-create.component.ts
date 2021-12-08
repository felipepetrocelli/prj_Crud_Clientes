import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  constructor(private clienteservice: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    this.clienteservice
  }
  cancel(): void {
    this.router.navigate(['clientes'])
  }

}
