///<reference path="riot-games-api.d.ts" />

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChampionService {
  private championsUrl = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=c4ff4533-ac86-45d0-b871-8c536c48c977";

  constructor(private http: Http) { }

  getChampions(): Promise<RiotGamesAPI.LolStaticData.ChampionDto[]> {

   return this.http.get(this.championsUrl)
              .toPromise()
              .then(response =>  {
                var championList: RiotGamesAPI.LolStaticData.ChampionListDto = response.json();
                var champions: RiotGamesAPI.LolStaticData.ChampionDto[] = [];

                var keys: string[] = Object.keys(championList.data).sort();

                keys.forEach( element => {
                  championList.data[element].imageUrl  = this.getImageUrl(element);
                  champions.push(championList.data[element])
                }
              );
                return champions;
              })
              .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private getImageUrl(championName: string): string
  {
    return `http://ddragon.leagueoflegends.com/cdn/6.13.1/img/champion/${championName}.png`;
  }
}
