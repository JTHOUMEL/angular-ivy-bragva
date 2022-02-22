import { NgModule } from '@angular/core';
import { SomeRoutingModule } from './some-routing.module';
import { SomeComponent } from './some.component';

@NgModule({
  imports: [SomeRoutingModule],
  declarations: [SomeComponent],
})
export class SomeModule {}
