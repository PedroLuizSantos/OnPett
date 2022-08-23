import { UserService } from './../services/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.FormBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
  ) { }

  ngOnInit(): void {
  }

  async login(){
    if(this.form.invalid) return;
    await this.UserService.login(
      this.form.controls['username'].value,
      this.form.controls['password'].value,
    )
  }

}
