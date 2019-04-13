import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerTypeComponent } from './flower-type/flower-type.component';
import { FlowersComponent } from './flowers/flowers.component';

const routes: Routes = [
  { path: '', redirectTo: 'flower-type', pathMatch: 'full' },
  { path: 'flower-type', component: FlowerTypeComponent },
  { path: 'flowers', component: FlowersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
