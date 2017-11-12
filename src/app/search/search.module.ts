import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent }       from './search.component';

import { SearchRoutingModule }       from './search-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchModule {}