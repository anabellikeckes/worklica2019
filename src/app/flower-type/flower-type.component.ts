import { Component, OnInit } from '@angular/core';

import { FlowerType } from '../shared/flower-type';

@Component({
  selector: 'flower-type-component',
  templateUrl: './flower-type.component.html',
  styleUrls: ['./flower-type.component.scss']
})
export class FlowerTypeComponent implements OnInit {

  items: Array<FlowerType>;

  ngOnInit(): void {
    this.items =  [
      {id: 1, type: 'Bouquet'},
      {id: 2, type: 'Jar'},
      {id: 3, type: 'Seedling'}
    ];
  }

}
