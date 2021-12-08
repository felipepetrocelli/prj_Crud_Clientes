import { Cliente } from './../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {
  cliente!: Cliente;
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.clienteService.readById(id).subscribe(cliente =>{
      this.cliente = cliente
    });
  }

  updateCliente(): void {}


  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
