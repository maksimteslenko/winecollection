import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinesComponent } from './wines/wines.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { WineDetailComponent }  from './wine-detail/wine-detail.component';

const routes: Routes = [
  {path: 'wines', component: WinesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo:'/dashboard', pathMatch:'full' },
  {path: 'detail/:id', component: WineDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
