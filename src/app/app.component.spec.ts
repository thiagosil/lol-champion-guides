/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { ChampionService } from './champion.service';

beforeEachProviders(() => [AppComponent, ChampionService, HTTP_PROVIDERS]);

describe('App: LolChampionGuides', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Lol Guides\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Lol Guides');
  }));
});
