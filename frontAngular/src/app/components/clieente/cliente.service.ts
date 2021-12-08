import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Cliente } from './cliente.model';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/api/clientes"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }
  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  readById(id: number | any): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}}`
    return this.http.put<Cliente>(url, cliente)
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
