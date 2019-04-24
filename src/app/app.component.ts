import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeChange', [
      transition('* => *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            padding: '30px',
            width: '100%',
            opacity: 1
          }),
        ],
          { optional: true }),
        query(':enter', [
          style({ opacity: 0 })
        ],
          { optional: true }),
        group([
          query(':leave', [
            animate('700ms ease-out', style({ opacity: 0 }))
          ],
            { optional: true }),
          query(':enter', [
            animate('700ms ease-out', style({ opacity: 1 }))
          ],
            { optional: true })
        ]),
      ])
    ])
  ]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage() {
    this.translate.currentLang === 'en' ? this.translate.use('hr') : this.translate.use('en');
  }
}
