# FlowerShop - Flowers list

## create new component

1. run the two following commands:
 - <b> cd src/app </b>
 - <b> ng generate component flowers </b>
  
2. add routing for <b>FlowersComponent</b>

3. add <b>button</b> & <b>method</b> to flower-type.component that <b>redirects</b> to to the flowers component

4. inside shared folder create Flower class like: <b>ng generate class flower</b>

5. add the following code to flowers.component.scss

````
$primaryColor: darkcyan;

.fa-arrow-left {
    font-size: 25px;
    padding: 30px;
}

h3 {
    padding: 0px 30px 0px 30px;
    font-weight: bold;
    color: $primaryColor;
}

.table-responsive {
    padding: 30px;
}
````

6. add the following code into styles.scss

````
.btn-info {
    color: unset;
    background-color: unset;
    border-color: #17a2b8;
}
````

6. add the following code to flowers.component.html

````<i class="fa fa-arrow-left" (click)="return()"></i>
<h3>{{'FLOWER_LIST' | translate}}</h3>

<div class="table-responsive">
  <table id="table" class="table table-striped table-bordered table-sm">
    <thead>
      <tr>
        <th scope="col">{{'FLOWER.ID' | translate}}</th>
        <th scope="col">{{'FLOWER.NAME' | translate}}</th>
        <th scope="col">{{'FLOWER.PRICE' | translate}}</th>
        <th scope="col">{{'FLOWER.IN_STOCK' | translate}}</th>
        <th scope="col">{{'FLOWER.COLOR' | translate}}</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.price | currency:'GBP'}}</td>
        <td>{{item.inStock}}</td>
        <td><i class="fa fa-circle" [ngStyle]="{'color': item.color}"></i></td>
      </tr>
    </tbody>
  </table>
</div>
````

7. add the following code to flowers.component.ts

````  items: Array<Flower>;

    constructor(
        private translateService: TranslateService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.translateService.get('FLOWER_TYPE.TYPES').subscribe(res => {
            this.items = [
                { id: 1, name: 'Rose', price: 10, color: 'red', inStock: 0  },
                { id: 2, name: 'Tulip', price: 8, color: 'purple', inStock: 5 }
            ];
        });
    }

    return() {
        this.router.navigate(['']);
    }
  ````
8. fill the localization files with:

  8.1. en.json
  
  ````
      "FLOWER_LIST": "List of flowers",
      "FLOWER_TYPE": {
        "CHOOSE": "Choose"
       },
       "FLOWER" : {
        "ID": "Id",
        "NAME": "Name",
        "PRICE": "Price",
        "IN_STOCK": "In stock",
        "COLOR": "Color",
        "BUY": "Buy"
    }
  ````
  8.2. hr.json
  
  ````
      "FLOWER_LIST": "Lista cvijeća",
      "FLOWER_TYPE": {
        "CHOOSE": "Odaberi"
       },
       "FLOWER" : {
       "ID": "Id",
        "NAME": "Naziv",
        "PRICE": "Cijena",
        "IN_STOCK": "Na zalihi",
        "COLOR": "Boja",
        "BUY": "Kupi"
    }
  ````
  
## animation

1. add <b>BrowserAnimationsModule</b> in app.module.ts (@angular/platform-browser/animations)

2. add the following code to the app.component.ts

````
animations: [
    trigger('routeChange', [
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ], { optional: true }),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
        ], { optional: true })
      ])
    ]),

    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
````

3. import needed imports, add corresponding events & code to app.component.html & app.component.ts
