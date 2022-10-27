import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/models/user';
import { IMessage } from 'src/app/models/models/message';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarioAcesso?: IUser;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async login(username: string, password: string) {
    const endpoint = `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`;
    const acesso = await firstValueFrom(this.http.get<IMessage>(endpoint));
    if (acesso?.code == 200) {
      await this.getUser(username);
      this.router.navigate(['/acesso']);
    }
  }

  async logout() {
    const endpoint = `https://petstore.swagger.io/v2/user/logout`;
    const acesso = await firstValueFrom(this.http.get<IMessage>(endpoint));
    if (acesso?.code == 200) {
      this.router.navigate(['/login'])
    }
  }

  async register(newUser: IUser) {
    const endpoint = `https://petstore.swagger.io/v2/user`;
    const message = await this.http.post<IMessage>(endpoint, newUser).toPromise();
    if (message?.code === 200 && !isNaN(Number(message.message))) {
      newUser.id = Number(message.message);
      alert("Cadastro Efetuado com Sucesso!");
      this.router.navigate(['/login']);
    }
    return newUser;
  }

  async UpdateUser(user: IUser) {
    const endpoint = `https://petstore.swagger.io/v2/user/${user.username}`;
    const message = await this.http.put<IMessage>(endpoint, user).toPromise();
  }

  async getUser(username: string) {
    const endpoint2 = `https://petstore.swagger.io/v2/user/${username}`;
    this.usuarioAcesso = await this.http.get<IUser>(endpoint2).toPromise();
    if (this.usuarioAcesso && this.usuarioAcesso.username)
      localStorage.setItem('user', this.usuarioAcesso.username)
  }


}
