import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Flower } from '../shared/flower';

@Component({
    selector: 'flowers-component',
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {

    items: Array<Flower>;
    visible: boolean;
    selectedFlower: Flower;

    constructor(
        private translateService: TranslateService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.translateService.get('FLOWER_TYPE.TYPES').subscribe(res => {
            this.items = [
                { id: 1, name: 'Rose', price: 10, colors: ['blue', 'white', 'red'], inStock: 0 },
                { id: 2, name: 'Tulip', price: 8, colors: ['violet', 'white', 'pink'], inStock: 5 }
            ];
        });
    }

    return() {
        this.router.navigate(['']);
    }

    buy(item: Flower) {
        this.visible = true;
        this.selectedFlower = item;
    }
    onUpdateFlowerValues() {
        // update items
    }
}
