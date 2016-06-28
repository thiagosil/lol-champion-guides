///<reference path="riot-games-api.d.ts" />
import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/styles.css'],
  providers: [ChampionService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  champion: RiotGamesAPI.LolStaticData.ChampionDto;
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
  }

  filterChampions(championName: string){
    if(!championName)
    {
      this.getChampions();
    }

/*
    this.champions = this.champions.data.filter(function (el) {
        return (el.name.toUpperCase().includes(championName.toUpperCase()));
    });
    */
  }

  goToUrl(url: string){
     window.location.href = url;
  }
}
