import { Injectable } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
@Injectable()
export class ChampionService {
  getChampions() {
    return Promise.resolve(CHAMPIONS);
  }
}
