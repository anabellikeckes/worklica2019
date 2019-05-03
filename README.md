# FlowerShop - Shop by  type


## create new component

1. run the two following commands:
 - <b>cd src/app</b> 
 - <b>ng generate component flower-type</b>
  
2. create <b>shared</b> folder and run <b>ng generate class flower-type</b>

3. copy the following code to flower-type.component.scss

```` 
$primaryColor: darkcyan;
h3 {
padding: 50px 30px 0px 30px;
font-weight: bold;
color: $primaryColor;
}
.table-responsive {
padding: 30px;
} 
````
4. add items array inside flower-type.component.ts file

5. copy the following code into flower-type.component.html

````
<h3>Flower Shop</h3>
<div class="table-responsive">
<table id="table" class="table table-striped table-bordered table-sm">
<thead>
<tr>
<th scope="col">Id</th>
<th scope="col">Type</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let item of items">
<th scope="row">{{item.id}}</th>
<td>{{item.type}}</td>
</tr>
</tbody>
</table>
</div> 
````

6. add flower-type route in app-routing.module.ts

```````
const routes: Routes = [
{ path: '', redirectTo: 'flower-type', pathMatch: 'full' },
{ path: 'flower-type', component: FlowerTypeComponent }
];
```````

## i18n 

1. <b>install</b> 2 following packages: 
  - "@ngx-translate/core": "11.0.1",
  - "@ngx-translate/http-loader": "4.0.0"
  
2. add modules into app.module.ts

````
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
imports: [
  HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
]
````
 3. add 2 json files inside <b>assets/i18n</b> folder
 
 en.json: 
 
 ````
 {
    "TITLE": "Flower Shop",
    "FLOWER_TYPE": {
        "TITLE": "Shop by type",
        "ID": "Id",
        "TYPE": "Type",
        "TYPES": {
            "BOUQUET": "Bouquet",
            "JAR": "Jar",
            "SEEDLING": "Seedling"
        }
    }
}
 ````
 
  hr.json: 
 
 ````
{
    "TITLE": "Cvjećara",
    "FLOWER_TYPE": {
        "TITLE": "Kupnja po tipu",
        "ID": "Id",
        "TYPE": "Tip",
        "TYPES": {
            "BOUQUET": "Buket",
            "JAR": "Tegla",
            "SEEDLING": "Sjemenjače"
        }
    }
}
 ````
 
 4. set default language in app.component.ts
 
 5. modify html files so that they use translation
 
 5.1. flower-type.component.html
 
 ````
 {{'FLOWER_TYPE.ID' | translate}}
 {{'FLOWER_TYPE.TYPE' | translate}}
 ````
 5.2. flower-type.component.ts
 
 ```````
 this.translateService.get('FLOWER_TYPE.TYPES').subscribe(res => {

this.items = [
{ id: 1, type: res.BOUQUET },
{ id: 2, type: res.JAR },
{ id: 3, type: res.SEEDLING }
];
});
 ```````
 
 6. add in app.component.html the following: 

 ````<i class="fa fa-language" (click)="changeLanguage()"></i>````
 
 7. add method <b>changeLanguage()</b> in app.component.ts
 
 8. add <b>onLangChange</b> event in flower-type.component.ts (translate event)
 
 ```````
this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
  this.items = [
    { id: 1, type: event.translations.FLOWER_TYPE.TYPES.BOUQUET },
    { id: 2, type: event.translations.FLOWER_TYPE.TYPES.JAR },
    { id: 3, type: event.translations.FLOWER_TYPE.TYPES.SEEDLING }
    ];
});
 ```````
