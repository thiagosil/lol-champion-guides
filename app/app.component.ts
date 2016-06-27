import { Component, OnInit } from '@angular/core';
import { Champion } from './champion';
import { ChampionService } from './champion.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/styles.css'],
  providers: [ChampionService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  champion = new Champion();
  champions: Champion[];


  constructor(private championService: ChampionService) { }

  getChampions() {
    return this.championService.getChampions().then(
      champions =>
      {
        this.champions = champions;
        return this.champions.forEach( champion => champion.url = `http://www.lolking.net/guides/champion/${champion.name}`);
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

    this.champions = this.champions.filter(function (el) {
        return (el.name.toUpperCase().includes(championName.toUpperCase()));
    });
  }

  goToUrl(url: string){
     window.location.href = url;
  }
}
