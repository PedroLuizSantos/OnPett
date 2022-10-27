import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Pet } from 'src/app/models/models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(
    private http: HttpClient,
  ) { }

  async addPet(newPet: Pet, image?: File) {
    const endpoint = `https://petstore.swagger.io/v2/pet`;
    const pet_saved = await firstValueFrom(this.http.post<Pet>(endpoint, newPet));
    if (pet_saved?.id && image) {
      const data: FormData = new FormData();
      data.append('file', image);
      const endpoint = `https://petstore.swagger.io/v2/pet/${pet_saved.id}/uploadImage`;
      const request = new HttpRequest('POST', endpoint, data, {
        reportProgress: true,
        responseType: 'text'
      });
      await lastValueFrom(this.http.request(request));
    }
    return pet_saved;
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
