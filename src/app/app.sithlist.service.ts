import { Injectable } from '@angular/core';

class Sith{
  constructor(
    public name: string,
    public power: number,
    public lightSaberColor: string = '#FF5555'
  ){}
};

@Injectable()
export class SithListSevice {
  getList() {
		return [
			new Sith('Maul', 85),
			new Sith('Tyranus', 88),
			new Sith('Vader', 92),
			new Sith('Sidious', 97)
		];
	}
}
