import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerTypeComponent } from './flower-type/flower-type.component';
import { FlowersComponent } from './flowers/flowers.component';

const routes: Routes = [
  { path: '', redirectTo: 'flower-type-component', pathMatch: 'full' },
  { path: 'flower-type-component', component: FlowerTypeComponent },
  { path: 'flowers-component', component: FlowersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
