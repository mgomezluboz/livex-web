import { Component } from '@angular/core';
import { User } from './model/usuario';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LivEx - Carga de espectaculos';

  constructor() {
  }
}
