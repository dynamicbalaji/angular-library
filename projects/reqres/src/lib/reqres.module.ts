import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReqresComponent } from './reqres.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [ReqresComponent, UsersComponent],
  exports: [ReqresComponent]
})
export class ReqresModule { }
