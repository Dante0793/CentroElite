import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Create, Service } from "../models/services";


@Injectable(
    {providedIn: 'root'}
)
export class ServicesService 
{
    constructor(private http: HttpClient) { }

    getServices():Observable<Service[]> {
        return this.http.get<Service[]>('http://localhost:8000/api/services');
    }
    createService(create: Create):Observable<Create> {
        return this.http.post<Create>('http://localhost:8000/api/services', create);
    }
}