/* eslint-disable @typescript-eslint/typedef */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomeComponent } from './some/some.component';

export const appRoutes: Routes = [
  { path: 'some/new', component: SomeComponent },
  {
    path: 'some/some-path/:id',
    loadChildren: () => import('./some/some.module').then((m) => m.SomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
