import { UserService } from './../services/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup = this.FormBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  constructor(
    private FormBuilder: FormBuilder,
    private service: UserService
  ) { }

  ngOnInit(): void {
  }

  async register() {
    if (this.form.invalid) return;
    await this.service.register({
      username: this.form.controls['username'].value,
      firstName: this.form.controls['firstName'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      phone: this.form.controls['phone'].value,
    });
  }

}
