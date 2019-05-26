import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddBikeComponent } from './components/addBike/addBike.component';
import { BikedeleteComponent } from './components/deleteBike/deleteBike.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
  { path: '', redirectTo: 'api/station', pathMatch: 'full' },
 
  {path: 'api/station', component: StationsComponent},
  {path: 'api/relacion/add/:id', component: AddBikeComponent},
  {path: 'api/relacion/delete/:id', component: BikedeleteComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
