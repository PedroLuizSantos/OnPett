import { RegistroComponent } from './registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistroRoutingModule } from './registro-routing.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    RegistroRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot()
  ]
})
export class RegistroModule { }
