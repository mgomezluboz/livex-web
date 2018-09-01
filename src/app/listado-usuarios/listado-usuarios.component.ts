import { Component, OnInit } from '@angular/core';
import { User } from '../model/usuario';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe(user => this.usuarios = user);
  }

  goTo(u: User) {
    this.router.navigate(['/usuarios/edit'], {queryParams:{id:u.id}});
  }

  addUser(u: User) {
    this.usuarios.concat(u);
  }

}
