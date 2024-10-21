import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  stories: any[] = [];
  selectedStory: any = null;

  ngOnInit() {
   
  }

  selectStory(story: any) {
    this.selectedStory = story;
  }

  deselectStory() {
    this.selectedStory = null;
  }
}



