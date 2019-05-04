# FlowerShop UT

## testing

1) import needed imports into app.component.spec.ts

2) create flower.component.spec.ts folder inside <b>flower</b> file  and write corresponding tests 

````
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FlowerComponent } from './flower.component';
import { TranslateModule } from '@ngx-translate/core';
import { ColorDirective } from 'src/app/shared/color.directive';
import { CurrencyPipe } from '@angular/common';

describe('FlowerComponent', () => {
    let comp: FlowerComponent;
    let fixture: ComponentFixture<FlowerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                FlowerComponent,
                ColorDirective
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                TranslateModule.forRoot()
            ],
            providers: [CurrencyPipe]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(FlowerComponent);
            comp = fixture.debugElement.componentInstance;
            comp.flowerForm = new FormGroup({
                name: new FormControl(null),
                price: new FormControl(null),
                inStock: new FormControl(null),
                amount: new FormControl(null, Validators.required),
                color: new FormControl(null),
            });
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('form'));
        });
    }));

    it(`should call buy method`, () => {
        fixture.detectChanges();
        spyOn(comp, 'buy');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(comp.buy).toHaveBeenCalledTimes(0);
    });
   });
````

3. add another test (test when form is invalid)
