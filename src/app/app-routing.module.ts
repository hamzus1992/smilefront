import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResetpasswordComponent} from './user/resetpassword.component';

const routes: Routes = [{
  path: 'resetpassword',
  component: ResetpasswordComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
