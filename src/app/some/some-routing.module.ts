import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeComponent } from './some.component';

export const someRoutes: Routes = [{ path: '', component: SomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(someRoutes)],
  exports: [RouterModule],
})
export class SomeRoutingModule {}
