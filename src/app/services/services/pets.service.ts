import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from 'src/app/models/models/pet';

@Injectable({
    providedIn: 'root'
})
export class PetService {
    constructor(
        private http: HttpClient,
    ) { }


    async findByStatus(status: 'available' | 'pending' | 'sold') {
        const endpoint = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`;
        return this.http.get<Pet[]>(endpoint).toPromise();
    }

}
