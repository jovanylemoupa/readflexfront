import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../../../shared/component/hero-banner/hero-banner.component';

import { HeapInfo } from 'v8';
import { HeroInfo } from '../../../../shared/models/heroInfo';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [
    RouterLink,
    HeroBannerComponent
  ],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit{

 
  
ngOnInit(): void {
 
}


}
