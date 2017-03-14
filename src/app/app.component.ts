import { Component } from '@angular/core';
import { JediListSevice } from './app.jedilist.service';
import { SithListSevice } from './app.sithlist.service';
import { Character } from './character.class';

const regularCharacters = [
  new Character('Han Solo', 45, 'han.jpg'),
  new Character('Leia Organa', 12, 'leia.jpg'),
  new Character('Chewbacca', 39, 'chew.jpg'),
  new Character('C-3PO', 0, 'c3po.jpg'),
  new Character('R2-D2', 1, 'r2d2.jpg')
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

  getImagePath(image: string){
    return './img/'+image
  }

  getFirstContestantName(){
    return (this.firstContestant ? this.firstContestant.name : '')
  }

 imagePath = './src/app/img/';

  getSecondContestantName(){
    return (this.secondContestant ? this.secondContestant.name : '')
  }

  getFirstContestantImage(){
    return (this.firstContestant ? this.imagePath + this.firstContestant.img : '')
  }

  getSecondContestantImage(){
    return (this.secondContestant ? this.imagePath + this.secondContestant.img : '')
  }

  changeVisibility(){
    this.contentIsVisible = !this.contentIsVisible;
    this.buttonCaption = this.contentIsVisible ? 'Hide': 'Show'
  }
}
