import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { StudenteRTO } from "../models/studente.model";

@Injectable({
    providedIn: 'root'
})
export class StudenteApi {
    private http = inject(HttpClient);
    private baseUrl = environment.apiBaseUrl;

    getAll(): Observable<StudenteRTO[]> {
        return this.http.get<StudenteRTO[]>(`${this.baseUrl}/studenti`);
    }
}