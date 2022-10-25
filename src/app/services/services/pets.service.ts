import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pet } from 'src/app/models/models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(
    private http: HttpClient,
  ) { }

  async addPet(newPet: Pet) {
    const endpoint = `https://petstore.swagger.io/v2/pet`;
    return this.http.post<Pet[]>(endpoint, newPet).toPromise();

  }

  async deletePet(pet: Pet){
    const endpoint = `https://petstore.swagger.io/v2/pet/${pet.id}`;
    return firstValueFrom(this.http.delete<Pet>(endpoint));

  }

  async findByStatus(status: 'available' | 'pending' | 'sold') {
    const endpoint = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`;
    return this.http.get<Pet[]>(endpoint).toPromise();
  }

}
