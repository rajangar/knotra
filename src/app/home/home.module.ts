import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeRoutingModule }       from './home-routing.module';

import { AuthGuard } from '../auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
  ]
})
export class HomeModule {}