import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Flower } from '../../shared/models/flower';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

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
    total: string;

    constructor(private currencyPipe: CurrencyPipe) {}

    ngOnInit() {
        if (this.flower) {
            this.flowerForm = new FormGroup({
                name: new FormControl(this.flower.name),
                price: new FormControl(this.flower.price),
                inStock: new FormControl(this.flower.inStock),
                amount: new FormControl('', [Validators.required]),
                color: new FormControl(this.flower.color),
            });
            this.amount = new Array(this.flower.inStock).fill(0).map((x, i) => i + 1);
        }
    }

    calculateTotal() {
        this.total = this.currencyPipe.transform(this.flowerForm.getRawValue().price * this.flowerForm.getRawValue().amount);
    }

    buy() {
        this.flower.inStock = this.flower.inStock - this.flowerForm.getRawValue().amount;
        this.updateFlowerValues.emit(this.flower);
    }

    cancel () {
        this.updateFlowerValues.emit(this.flower);
    }
}
