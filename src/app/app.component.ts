import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/component/footer/footer.component";
import { HeaderComponent } from './core/component/header/header.component';
import { ProgrammeContainerComponent } from './features/nos-programmes/pages/programme-container/programme-container.component';
import { CardStoryComponent } from './shared/component/card-story/card-story.component';



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
export class AppComponent {
  title = 'readflex-frontend';
}
