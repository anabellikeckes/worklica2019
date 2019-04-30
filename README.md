# FlowerShop Flower

## create new component

1. create <b>flower</b> folder inside flowers folder and inside this folder create the following:
  - flower.component.ts
  - flower.component.html
  - flower.component.scss

2. add new component to app.module

3. import ReactiveFormsModule

4. copy flowers.scss

````
.flower-component {
margin: 0px 30px;
height: 55%;
border: 1px solid lightgray;
}
````

5. add code to flowers.component.html & flowers.component.ts regarding flower component

6. copy code to flower.component.scss file

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

7. fill the localization files 

  7.1. en.json

````
"AMOUNT": "Amount",
"BUY": "Buy",
"CANCEL": "Cancel",
"TOTAL" : "Total"
````

  7.2. hr.json
````
"AMOUNT": "Količina",
"BUY": "Kupi",
"CANCEL": "Odustani",
"TOTAL" : "Ukupno"
````

8. copy following code to flower.component.html

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

9. write code to flower.component.ts

10. add code to <b>onUpdateFlowerValues</b> method in flowers.component.ts 


## directive

1. change structure of models

2. add new directive 

3. write code to directive

4. add directive to app.module.ts

5. add directive to fower.component.html like:

````
<div class="image">
<i class="fa fa-leaf" myColor="{{flowerForm.controls.color.value}}"></i>
</div>
````

