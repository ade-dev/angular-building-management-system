import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingManagerComponent } from './building-manager/building-manager.component';

const routes: Routes = [
  {
    path: 'building-manager', component: BuildingManagerComponent
  },
  { path: '', redirectTo: '/building-manager', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
