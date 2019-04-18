import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Flower } from '../../shared/models/flower';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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

    // get selectedColor () {
    //     return this.flower.colors[this.flowerForm.controls.colors.value.findIndex((c: boolean) => c === true)];
    // }

    ngOnInit() {
        if (this.flower) {
            this.flowerForm = new FormGroup({
                name: new FormControl(this.flower.name),
                price: new FormControl(this.flower.price),
                inStock: new FormControl(this.flower.inStock),
                amount: new FormControl(0, Validators.required),
                color: new FormControl(this.flower.color, Validators.required),
            });
            this.amount = new Array(this.flower.inStock).fill(0).map((x, i) => i + 1);
            // this.flower.colors.map((o, i) => {
            //     const control = new FormControl(i === 0); // if first item set to true, else false
            //     (this.flowerForm.controls.colors as FormArray).push(control);
            // });
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
