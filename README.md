# FlowerShop - Flower

## create new component

1. run the two following commands:
 - <b> cd src/app/flowers</b>
- <b> ng generate component flower</b>

2. import ReactiveFormsModule (@angular/forms)

3. copy to flowers.scss file the following:

````
.flower-component {
  margin: 0px 30px;
  height: 55%;
  border: 1px solid lightgray;
}
````

4. add code to flowers.component.html & flowers.component.ts regarding <b>flower</b> component & add method to <b>buy</b> button

5. copy code to flower.component.scss file

````
form {
  width: 60%;
  float: left;
  padding: 15px;
  .total {
   color: darkcyan;
   text-align: end;
   font-weight: bolder;
  }
}
.image {
  width: 40%;
  padding: 40px 100px;
  float: left;
  font-size: 100px;
}
.btn {
  margin: 15px 5px;
}
````

6. fill the localization files 

  6.1. en.json

````
"AMOUNT": "Amount",
"CANCEL": "Cancel",
"TOTAL" : "Total"
````

  6.2. hr.json
````
"AMOUNT": "Količina",
"CANCEL": "Odustani",
"TOTAL" : "Ukupno"
````

7. copy following code to flower.component.html

````
<form class="form" [formGroup]="flowerForm" *ngIf="flowerForm">
  <div class="form-group">
   <label for="name">{{'FLOWER.NAME' | translate}}</label>
    <input type="text" class="form-control" id="name" readonly formControlName="name">
  </div>
  <div class="form-group">
    <label for="inStock">{{'FLOWER.IN_STOCK' | translate}}</label>
    <input type="number" class="form-control" id="inStock" readonly formControlName="inStock">
  </div>
  <div class="form-group">
    <label for="amount">{{'FLOWER.AMOUNT' | translate}}</label>
    <select class="custom-select form-control" id="amountDropdown" formControlName="amount"
    (change)="calculateTotal()">
      <option value="">Choose...</option>
      <option *ngFor="let number of amount" [ngValue]="number" >{{number}}</option>
    </select>
  </div>
  <div class="form-group" *ngIf="flowerForm.valid">
    <label for="total">{{'FLOWER.TOTAL' | translate}}</label>
    <input type="text" class="form-control total" id="total" readonly [value]="total">
  </div>
  <button type="submit" class="btn btn-primary" (click)="buy()"
    [disabled]="flowerForm.invalid">{{'FLOWER.BUY' | translate}}</button>
  <button type="button" class="btn btn-secondary" (click)="cancel()">{{'FLOWER.CANCEL' | translate}}</button>
</form>
````

8. import CurrencyPipe (providers), write code to flower.component.ts; create form & paste following methods:

````
calculateTotal() {
   this.total = this.currencyPipe.transform(this.flowerForm.getRawValue().price * this.flowerForm.getRawValue().amount, 'GBP');
 }

buy() {
     this.flower.inStock = this.flower.inStock - this.flowerForm.getRawValue().amount;
     this.updateFlowerValues.emit(this.flower);
 }

cancel () {
      this.updateFlowerValues.emit(this.flower);
 }
````

9. add following code to <b>onUpdateFlowerValues</b> method in flowers.component.ts 

````
  const findIndex = this.items.findIndex((obj => obj.id === updatedFlower.id));
  // update items
  this.items[findIndex] = updatedFlower;
  this.visible = false;
````

10. run <i>ng serve</i>


## directive

1. run cd src/app/shared

2. add new directive like: <b>ng generate directive color</b>

3. write code to directive

4. add directive to flower.component.html like:

````
<div class="image">
  <i class="fa fa-pagelines" myColor="{{flowerForm.controls.color.value}}"></i>
</div>
````
5. run <i>ng serve</i>
