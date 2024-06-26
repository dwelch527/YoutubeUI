import { Component } from '@angular/core';
import homeData from '../../assets/data/home.json';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  videos: any [] = [];
  segments: any[] = [];

  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computrer program',
      'Documentarty',
      'Music',
    ].map((val) => ({
      title: val,
      selected: false,
    }));

    setTimeout(() => {
      this.selectSegment(0);
    this.videos = homeData;
    }, 3000);
 }

  selectSegment(index) {
    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
  }

  doRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
