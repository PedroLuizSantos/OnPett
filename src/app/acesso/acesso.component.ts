import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/services/user.service';


@Component({
  selector: 'ns-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss']
})
export class AcessoComponent implements OnInit {

  constructor(
    private router: Router,
    public service: UserService,
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login'])
  }
  home(){
    this.router.navigate(['/acesso'])
  }
  user(){
    this.router.navigate(['/cliente'])
  }
}
