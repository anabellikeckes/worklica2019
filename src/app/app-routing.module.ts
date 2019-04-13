import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerTypeComponent } from './flower-type/flower-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'flower-type-component', pathMatch: 'full' },
  { path: 'flower-type-component', component: FlowerTypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
