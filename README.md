# FlowerShop - Shop by  type


## create new component

1) create folder <b>flower-type</b> and inside this folder create the following:
  - flower-type.component.ts
  - flower-type.component.html
  - flower-type.component.scss
  
2) add <b>FlowerTypeComponent</b> to app.component.ts 

3) create <b>shared</b> folder and flower.type.ts file

4) copy the following code to flower-type.scss

```` $primaryColor: darkcyan;

h3 {
padding: 50px 30px 0px 30px;
font-weight: bold;
color: $primaryColor;
}
.table-responsive {
padding: 30px;
} 
````
5) add items array inside flower-type.component.ts file
6) copy the following code into flower-type.component.html

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

## i18n 

1) <b>install</b> 2 fallowing packages: 
  - "@ngx-translate/core": "11.0.1",
  - "@ngx-translate/http-loader": "4.0.0"
2) add modules into app.module.ts

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
 3) add 2 json files inside assets/i18n folder
 
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
 
 3) set default language in app.component.ts
 
 4) modify html files so that they use translation
 
 5) add in app.component.html the following: 
 ````<i class="fa fa-language" (click)="changeLanguage()"></i>````
 
 6) add method <b>changeLanguage()</b> in app.component.ts
 
 7) add <b>onLangChange</b> event in flower-type.component.ts
