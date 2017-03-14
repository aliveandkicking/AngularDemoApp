import { Component } from '@angular/core';
import { JediListSevice } from './app.jedilist.service';
import { SithListSevice } from './app.sithlist.service';

const regularCharacters = [
  {
    name:'Han Solo',
    power: 45
  },
  {
    name:'Leia Organa',
    power: 10
  },
  {
    name:'Chewbacca',
    power: 39
  },
  {
    name:'C-3PO',
    power: 0
  },
  {
    name:'R2-D2',
    power: 1
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private jediListSevice: JediListSevice,
    private sithListSevice: SithListSevice
  ){};

  buttonCaption = 'Hide';
  contentIsVisible = true;

  forceUserstitle = 'List of force users';
  regularCharacterstitle = 'List of regular characters';

  sithListTitle = 'List of siths';
  jediListTitle = 'List of jedi';

  regularCharactersList = regularCharacters

  firstContestant = null
  secondContestant = null

  winner: string = ''
  comment: string = ''

  instructions: string = 'Click on competitors to see who will prevail'

  onCharacterClick(char){
    if (this.winner !== '') {
      this.firstContestant = null
      this.secondContestant = null
      this.winner = ''
    }

    if (this.firstContestant === null) {
      this.firstContestant = char
    } else {
      this.secondContestant = char
      this.doBattle()
    }
  }

  doBattle(){
    let totalPower = this.firstContestant.power + this.secondContestant.power
    let num = Math.floor(Math.random() * (totalPower - 1)) + 1

    if (num <= this.firstContestant.power) {
      this.winner = this.firstContestant.name
    } else {
      this.winner = this.secondContestant.name
    }
  }

  getFirstContestantName(){
    return (this.firstContestant ? this.firstContestant.name : '')
  }

  getSecondContestantName(){
    return (this.secondContestant ? this.secondContestant.name : '')
  }

  changeVisibility(){
    this.contentIsVisible = !this.contentIsVisible;
    this.buttonCaption = this.contentIsVisible ? 'Hide': 'Show'
  }
}
