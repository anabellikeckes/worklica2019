import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Flower } from '../shared/models/flower';

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
                { id: 1, name: 'Rose', price: 10, color: 'red', inStock: 0  },
                { id: 2, name: 'Tulip', price: 8, color: 'violet', inStock: 5 }
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
    onUpdateFlowerValues(updatedFlower: Flower) {
        const findIndex = this.items.findIndex((obj => obj.id === updatedFlower.id));
        // update items
        this.items[findIndex] = updatedFlower;
        this.visible = false;
    }
}
