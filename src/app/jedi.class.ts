import { Character } from './character.class';

export class Jedi extends Character{
  constructor(
    public name: string,
    public power: number,
    public img: string,
    public lightSaberColor: string
  ){
    super(name, power, img)
  }
};
