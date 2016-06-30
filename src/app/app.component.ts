///<reference path="riot-games-api.d.ts" />
import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/styles.css'],
  providers: [ChampionService]
})

export class AppComponent implements OnInit {
  title = 'Lol Guides';
  championName: string;
  champions: RiotGamesAPI.LolStaticData.ChampionDto[];


  constructor(private championService: ChampionService) { }

  getChampions() {
    return this.championService.getChampions().then(
      champions =>
      {
        this.champions = champions;
      }
    );
  }
  ngOnInit() {
    this.getChampions();
    this.championName = "";
  }

  filterChampions(championName: string){
    if(!championName)
    {
      this.getChampions();
    }


    this.champions = this.champions.filter(function (el) {
        return (el.name.toUpperCase().includes(championName.toUpperCase()));
    });

  }

  goToUrl(url: string){
     window.location.href = url;
  }
}
