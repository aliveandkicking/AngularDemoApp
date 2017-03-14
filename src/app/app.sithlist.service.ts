import { Injectable } from '@angular/core';
import { Jedi } from './jedi.class';

@Injectable()
export class SithListSevice {
  getList() {
		return [
			new Jedi('Maul', 85, 'maul.jpg', '#FF3333'),
			new Jedi('Tyranus', 88, 'duku.jpg', '#FF3333'),
			new Jedi('Vader', 92, 'vader.jpg', '#FF3333'),
			new Jedi('Sidious', 97, 'sid.jpg', '#FF3333')
		];
	}
}
