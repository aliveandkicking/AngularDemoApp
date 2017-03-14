import { Injectable } from '@angular/core';
import { Jedi } from './jedi.class';

@Injectable()
export class JediListSevice {
  getList() {
		return [
			new Jedi('Luke', 83, 'luke.jpg', '#77EE22'),
			new Jedi('Obi-Van', 90, 'obi.jpg', '#5588FF'),
			new Jedi('Yoda', 95, 'yoda.jpg', '#33EE22'),
			new Jedi('Windu', 92, 'windu.jpg', '#AA22FF')
		];
	}
}
