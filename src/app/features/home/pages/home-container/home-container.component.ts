import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBannerComponent } from '../../../../shared/component/hero-banner/hero-banner.component';

import { HeapInfo } from 'v8';
import { HeroInfo } from '../../../../shared/models/heroInfo';
import { StoryService } from '../../../../shared/services/story/story.service';
import { Story } from '../../../../shared/models/story';
import { CardStoryComponent } from '../../../../shared/component/card-story/card-story.component';
import { StoryCategories } from '../../../../shared/models/story-categories.enum';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [RouterLink, HeroBannerComponent, CardStoryComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent implements OnInit {
  stories!: Story[];
  categories!: StoryCategories[];
  constructor(private storyservice: StoryService) {}

  ngOnInit(): void {
    this.getStories();
  }
  getStories() {
    if ((this.stories = this.storyservice.getStoriesOverview())) {
      console.log(this.stories);
    }
  }
  getStoriesByCategories() {}
}
