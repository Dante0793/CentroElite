import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login, Register } from "../models/login";

@Injectable({
    providedIn: 'root'
})

export class LoginService 
{
    constructor(private http: HttpClient) { }

    public createUser(user: Register): Observable<Register> 
    {
        const url = 'http://localhost:8000/api/register';
        return this.http.post<Register>(url, user);
    }

    public login(user: Login): Observable<Login> 
    {
        const url = 'http://localhost:8000/api/login';
        return this.http.post<Login>(url, user);
    }
}