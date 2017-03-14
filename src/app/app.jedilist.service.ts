import { Injectable } from '@angular/core';

class Jedi{
  constructor(
    public name: string,
    public power: number,
    public lightSaberColor: string = '#5588FF'
  ){}
};

@Injectable()
export class JediListSevice {
  getList() {
		return [
			new Jedi('Luke', 83, '#77EE22'),
			new Jedi('Obi-Van', 90),
			new Jedi('Yoda', 95, '#33EE22'),
			new Jedi('Windu', 92, '#AA22FF')
		];
	}
}
