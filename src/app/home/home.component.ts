import { Component, OnInit } from '@angular/core';
import { JingleService } from '../core';
import { PodcastModel } from '../shared';

@Component({
  selector: 'spot-home',
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  isLoaded = false;
  podcasts: PodcastModel[];

  constructor(private jingle: JingleService) {}

  ngOnInit() {
    this.isLoaded = false;
    this.jingle.podcasts.subscribe(pDocs => {
      this.isLoaded = true;
      this.podcasts = pDocs.map((p) => new PodcastModel(null, p));
    });
  }

}
