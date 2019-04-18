import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Flower } from '../../shared/models/flower';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'flower-component',
    templateUrl: './flower.component.html',
    styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {

    @Input() flower: Flower;
    @Output() updateFlowerValues = new EventEmitter<Flower>();
    flowerForm: FormGroup;
    amount: Array<number>;

    ngOnInit() {
        if (this.flower) {
            this.flowerForm = new FormGroup({
                name: new FormControl(this.flower.name),
                price: new FormControl(this.flower.price),
                inStock: new FormControl(this.flower.inStock),
                amount: new FormControl(0, Validators.required),
                color: new FormControl(this.flower.color),
            });
            this.amount = new Array(this.flower.inStock).fill(0).map((x, i) => i + 1);
        }
    }

    buy() {
        this.flower.inStock = this.flower.inStock - this.flowerForm.getRawValue().amount;
        this.updateFlowerValues.emit(this.flower);
    }

    cancel () {
        this.updateFlowerValues.emit(this.flower);
    }
}
