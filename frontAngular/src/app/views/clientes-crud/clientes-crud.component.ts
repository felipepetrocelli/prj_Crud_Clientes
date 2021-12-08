import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.scss']
})
export class ClientesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToClienteCreate(): void{
    this.router.navigate(['/clientes/create'])
  }

}
