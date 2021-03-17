import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'addnew',component:MyformComponent,
  },
  {
    path:'viewadded',component:ViewDataComponent,
  },
  {
    path:'viewadded/edit/:id',component:ManageDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
