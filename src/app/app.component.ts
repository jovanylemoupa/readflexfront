import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "./core/component/footer/footer.component";
import { HeaderComponent } from './core/component/header/header.component';
import { UserService } from './shared/services/user/user.service';
import { User } from './shared/models/user';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

}