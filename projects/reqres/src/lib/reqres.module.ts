import { NgModule } from '@angular/core';
import { ReqresComponent } from './reqres.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
  ],
  declarations: [ReqresComponent, UsersComponent],
  exports: [ReqresComponent]
})
export class ReqresModule { }
