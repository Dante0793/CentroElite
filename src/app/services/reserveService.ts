import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Create } from "../models/reserves";

@Injectable(
    {providedIn: 'root'}
)
export class ReserveService 
{
    constructor(private http: HttpClient) { }

    createReserve(create: Create):Observable<Create> {
        return this.http.post<Create>('http://localhost:8000/api/reserve', create);
    }
}