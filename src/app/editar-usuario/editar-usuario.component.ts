import { Component, OnInit } from '@angular/core';
import { User } from '../model/usuario';
import { Rol } from '../model/rol';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  idParam: string;
  usuario: User;
  newPassword: string = "";
  selectedRol: string;
  roles: Rol[];

  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.idParam = params['id']);
    this.userService.getRoles().subscribe(roles => this.roles = roles);

    if(this.idParam) {
      this.userService.getById(this.idParam).subscribe(user => {this.usuario = user; this.selectedRol = this.usuario.rol.name;});
    } else {
      this.usuario = new User();
    }

  }

  saveUser(): void {
    this.usuario.rol = this.roles.find(e => e.name == this.selectedRol);

    if(this.newPassword.trim() != "") {
      this.usuario.password = this.newPassword;
    } else {
      this.usuario.password = null;
    }

    if(this.idParam) {
      this.userService.update(this.usuario).subscribe(() => this.goBack());
    } else {
      this.userService.register(this.usuario).subscribe(() => this.goBack());
    }
  }

  deleteUser(): void {
    if(this.idParam) {
      this.userService.delete(this.usuario.id).subscribe(() => this.goBack());
    } else {
      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }

}
