import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pet } from '../models/models/pet';
import { PetService } from '../services/services/pets.service';
import { UserService } from '../services/services/user.service';
import { CadastrarPetComponent } from './cadastrar-pet/cadastrar-pet.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@Component({
  selector: 'ns-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  cards: Pet[] = [];

  constructor(
    public service: UserService,
    public dialog: MatDialog,
    public servicePet: PetService,
  ) { }

  pet?: Pet;

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditarUsuarioComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogPet() {
    const dialogRef = this.dialog.open(CadastrarPetComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async adotarPet() {
    if (!this.pet) return;
    await this.servicePet.deletePet(this.pet);
    if (this.cards.indexOf(this.pet) > -1)
      this.cards.splice(this.cards.indexOf(this.pet), 1);

  }



  sair() {
    this.service.logout();
  }
}
