import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PetService } from 'OnPett/src/app/services/services/pets.service';


@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.component.html',
  styleUrls: ['./cadastrar-pet.component.scss']
})
export class CadastrarPetComponent implements OnInit {

  constructor(
    private FormBuilder: FormBuilder,
    private service: PetService,
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required]],
  });

  async salvarPet() {
    await this.service.addPet({
      id: Math.floor(Math.random() * 100),
      name: this.form.controls['name'].value,
    }, this.selectedFile);
  }
  private selectedFile?: File;
  async changeFile(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files?.item(0) || undefined;
  }

}
