import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from './../../core';
import { SharedModule, PodcastModel } from './../../shared';
import { HomePodcastComponent } from './home-podcast.component';
import { HomeCampaignComponent } from './home-campaign.component';
import { makeModel } from '../../../testing/helpers';

describe('HomePodcastComponent', () => {
  let comp: HomePodcastComponent;
  let fix: ComponentFixture<HomePodcastComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeCampaignComponent,
        HomePodcastComponent
      ],
      imports: [
        CoreModule,
        RouterTestingModule,
        SharedModule
      ]
    }).compileComponents().then(() => {
      fix = TestBed.createComponent(HomePodcastComponent);
      comp = fix.componentInstance;
      comp.podcast = makeModel(PodcastModel, {name: 'Podcast One'});
      fix.detectChanges();
      de = fix.debugElement;
      el = de.nativeElement;
    });
  }));

  it('should prominently show podcast name', () => {
    const h1 = de.query(By.css('h1')).query(By.css('a'));
    expect(h1.nativeElement.textContent).toEqual('Podcast One');
  });

  it('should show campaigns for podcast', () => {
    expect(de.query(By.css('spot-home-campaign'))).toBeNull();
    comp.podcast = makeModel(PodcastModel, {name: 'Podcast One'}, null, {campaigns: [{name: 'campaign-one'}]});
    fix.detectChanges();
    expect(de.query(By.css('spot-home-campaign'))).not.toBeNull();
  });
});
