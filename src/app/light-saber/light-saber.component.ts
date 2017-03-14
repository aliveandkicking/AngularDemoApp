import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light-saber',
  templateUrl: './light-saber.component.html',
  styleUrls: ['./light-saber.component.css']
})
export class LightSaberComponent implements OnInit {
  constructor() { }

  @Input() color: string ='#77FF22'

  getStyle(){
    return{
      backgroundColor: this.color
    }
  }

  ngOnInit() {
  }

}
