import { Component, OnInit } from '@angular/core';

import { FlowerType } from '../shared/flower-type';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'flower-type-component',
  templateUrl: './flower-type.component.html',
  styleUrls: ['./flower-type.component.scss']
})
export class FlowerTypeComponent implements OnInit {

  items: Array<FlowerType>;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.get('FLOWER_TYPE.TYPES').subscribe(res => {
      this.items = [
        { id: 1, type: res.BOUQUET },
        { id: 2, type: res.JAR },
        { id: 3, type: res.SEEDLING }
      ];
    });

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.items = [
        { id: 1, type: event.translations.FLOWER_TYPE.TYPES.BOUQUET },
        { id: 2, type: event.translations.FLOWER_TYPE.TYPES.JAR },
        { id: 3, type: event.translations.FLOWER_TYPE.TYPES.SEEDLING }
      ];
    });
  }

}
