import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';

@Component({
  selector: 'classification-button',
  templateUrl: './classification-button.component.html',
  styleUrls: ['./classification-button.component.css']
})
export class ClassificationButtonComponent implements OnInit {

  players;
  show: any;

  constructor(service:PlayersService) { 
    this.players = service.getPlayers()
    this.show = service.getPlayers()
  }

  ngOnInit(): void {
  }

  showPro(){
    this.show = this.players
    this.show = this.players.filter(player => player.degree === 'Pro');

  }
  showAma(){
    this.show = this.players
    this.show = this.players.filter(player => player.degree === 'Amateur');

  }
  showAll(){
    this.show = this.players

  }
}
